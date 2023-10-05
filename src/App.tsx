import React from 'react';
import { Box, Container, Skeleton } from '@mui/material';

// relay environment
import { RelayEnvironmentProvider } from 'react-relay';

// relay config
import prodEnv from './relay/environment';

// pages components
import ThemeWrapper from './theme/Wrapper';

// react router
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom";

// error pages
import RootErrorPage from './ErrorPages/RootError';

// pages
import Root from './pages/Root';
// import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';
import Blog from './pages/Blog';

// root app layout
import Layout from './Layout';
import NewRootLoader from './loader/Root';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import CreateBlog from './pages/CreateBlog';


const LoadingScreen = () => {
    return (
        <Container>
            <Skeleton variant="rectangular" width="100%" height={400} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <Skeleton variant="text" width="80%" height={50} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="text" width="40%" height={50} />
            </Box>
            <Skeleton variant="text" width="90%" height={100} />
        </Container>
    )
};

// router config
const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Layout />,
        errorElement: <RootErrorPage />,
        children: [
            // root page
            {
                path: "/",
                errorElement: <RootErrorPage />,
                element: (
                    <React.Suspense fallback={<NewRootLoader />} >
                        <Root />
                    </React.Suspense>
                )
            },
            // profile page
            {
                id: "profile",
                path: "/profile",
                children: [
                    {
                        path: "/profile",
                        element: (
                            <React.Suspense fallback={<LoadingScreen />} >
                                <MyProfile />
                            </React.Suspense>
                        ),
                    },
                    {
                        id: "CreateProfile",
                        path: "/profile/new",
                        element: (
                            <React.Suspense fallback={<LoadingScreen />} >
                                <CreateAccount />
                            </React.Suspense>
                        ),
                    },
                ]
            },
            // explore blogs & view blog page
            {
                id: "blog",
                path: "/blog",
                children: [
                    {
                        path: "/blog/:id",
                        element: (
                            <React.Suspense fallback={<LoadingScreen />} >
                                <Blog />
                            </React.Suspense>
                        )
                    },
                    {
                        id: "EditBlog",
                        path: "/blog/:id/edit",
                        element: (
                            <React.Suspense fallback={<LoadingScreen />} >
                                <CreateBlog />
                            </React.Suspense>
                        ),
                    },
                ]
            },
            {
                id: "CreateBlog",
                path: "/blog/new",
                element: (
                    <React.Suspense fallback={<LoadingScreen />} >
                        <CreateBlog />
                    </React.Suspense>
                ),
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <RootErrorPage />
    }
]);
// 
const inDevEnv = process.env.NODE_ENV === "development";
// const inDevEnv = process.env.NODE_ENV === "production";

export default function App() {

    const env = prodEnv({
        url: (inDevEnv ? "http://j.local:8000" : "https://api.jaesmetaverse.com") + "/blogs/graphql/",
        "apiToken": inDevEnv ? "JAE_TEST_KEY" : "3df844de6b02d29ea2b9c3b83b924459488b93c0679aae8791a3ce4bbe9e3c41",
        token: window.localStorage.getItem("token") ?? ""
    });

    return (
        <ThemeWrapper>
            <RelayEnvironmentProvider environment={env} >
                <RouterProvider router={router} />
            </RelayEnvironmentProvider>
        </ThemeWrapper>
    );

};
