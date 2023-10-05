import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function RootErrorPage() {
    const error = useRouteError() as any;
    console.error(error);

    return (
        <Container
            id="error-page"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                width: '100vw',
            }}>
            <Typography variant="h2" >Oops!</Typography>
            <Typography variant="overline">
                <p>Sorry, an unexpected error has occurred.</p>
            </Typography>

            <Typography variant="caption" >
                <p>
                    <b>{error.status}</b> <br />
                    <i>{error.statusText || error.message}</i>
                </p>
            </Typography>

        </Container>
    );
}