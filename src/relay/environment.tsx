import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  urlMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware,
  uploadMiddleware,
  Middleware,
  RelayRequestAny
} from 'react-relay-network-modern';

// constants
const dev = process.env.NODE_ENV === "development";
export const DEV_KEY = "JAE_TEST_KEY";

interface EnvBuilder {
  url: string;
  apiToken: string;
  token?: string;
};

const middlewares = ({ url, apiToken, token }: EnvBuilder): Array<Middleware> => {
  return (
    [
      cacheMiddleware({
        size: 100 // max 100 requests
      }),
      urlMiddleware({
        url: () => Promise.resolve(url),
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: (req: RelayRequestAny) => ({
          "Access-Control-Allow-Origin": "true",
          "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
          "Access-Control-Allow-Credentials": "true",
          "API-KEY": apiToken,
          "Access-Control-Allow-Headers": "API, Content-Type, Dnt, Origin, User-Agent, X-CSRFToken, Access-Control-Allow-Origin, AUTHORIZATION",
          'X-CSRFToken': req.fetchOpts.headers["X-CSRFToken"] ?? "",
        })
      }),
      authMiddleware({
        token,
        allowEmptyToken: true,
        header: "AUTHORIZATION",
        "prefix": ""
      }),
      retryMiddleware({
        fetchTimeout: 15000,
        retryDelays: (attempt) => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
        beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
          if (attempt > 10) abort();
          // window.forceRelayRetry = forceRetry;
          console.log('call `forceRelayRetry()` for immediately retry! Or wait ' + delay + ' ms.');
        },
        statusCodes: [500, 503, 504],
      }),
      progressMiddleware({
        onProgress: (current, total) => {
          console.log('Downloaded: ' + current + ' B, total: ' + total + ' B');
          const px = new CustomEvent("progress", { detail: { progress: (current / (total ?? 100)) * 100 } });
          window.dispatchEvent(px);
        },
      }),
      uploadMiddleware(),
      (next) => async (req) => {
        const res = await next(req);
        console.log(res.json);
        return res;
      },
      // dev && errorMiddleware(),
      // dev && loggerMiddleware(),
      // dev && perfMiddleware()
    ]
  )
};

const source = new RecordSource();
const store = new Store(source);


export const devEnv = ({ extendedUrl, token }: {
  extendedUrl: string;
  token?: string;
}): Environment => {
  const env = new Environment({
    network: new RelayNetworkLayer(
      middlewares({
        url: (dev ? "http://j.local:8000/" : "https://api.jaesmetaverse.com/") + extendedUrl,
        apiToken: DEV_KEY,
        token
      }),
      {}
    ),
    store
  });

  return env;
};

const prodEnv = (props: EnvBuilder): Environment => new Environment({
  network: new RelayNetworkLayer(middlewares(props), {}),
  store
});

export default prodEnv;