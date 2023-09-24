import React from 'react';

// mui
import { Box, Stack, TextField, Toolbar, Typography } from '@mui/material';

// graphql relay
import { useLazyLoadQuery } from 'react-relay';
import { RootQuery } from './__generated__/RootQuery.graphql';

// icons
// import {  Category, ContentCopy, Delete } from '@mui/icons-material';

// custom components
import DrawerLayout from '../DraweredLayout';
import { DrawerContext, StyledAppbar } from '../Layout';
import ThemeSwitch from '../components/ThemeSwitch';
import Hamburger from '../components/Hamburger';
import BlogThumbnail from '../components/BlogThumbnail';
import DrawerButton from '../components/DrawerButton';
import { Helmet } from 'react-helmet';

// graphql 
const graphql = require('babel-plugin-relay/macro');


// root
function Root() {

    const data = useLazyLoadQuery<RootQuery>(
        graphql`
                query RootQuery {
                    accounts {
                        edges {
                            node {
                                id
                                name
                                icon
                                isActive
                            }
                        }
                    }
                    blogs {
                        edges {
                          node {
                            id
                            title
                            ...BlogThumbnail_data
                            ...DrawerButton_data
                          }
                        }
                    }
                }
            `,
        {},
        { "fetchPolicy": "store-or-network" }
    );
    const { isDrawerOpen, toggleDrawer } = React.useContext(DrawerContext);
    const [search, setSearch] = React.useState("");
    const blogs = data.blogs?.edges?.filter(v => search ? v?.node?.title?.includes(search) : true) ?? [];

    return (
        <>
            <Helmet>
                <title>Blogs: Home</title>
                <meta name="description" content="Blogs" />
                <meta name="keywords" content="Blogs, Technology, TechBlog, Vlogs, API. OpenSource" />
                <meta name="author" content="Jainam Shah" />
                <meta property="og:title" content="Blogs" />
                <meta property="og:description" content="Blogs" />
                <meta property="og:url" content="https://blogs.beyondigital.agency" />
                <meta property="og:site_name" content="Blogs" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://blogs.beyondigital.agency/logo.png" />
                <meta property="og:image:alt" content="Blogs" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />
            </Helmet>

            {/* header for home page */}
            <StyledAppbar
                position='fixed'
                sx={{ top: 0, zIndex: 999, p: 0 }}
            >
                <Toolbar sx={{ justifyContent: "space-between", height: "72px" }}>
                    <ThemeSwitch sx={{ color: "text.primary", ml: "auto" }} />
                    <Hamburger
                        onClick={() => toggleDrawer()}
                        open={isDrawerOpen}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <span />
                        <span />
                        <span />
                    </Hamburger>
                </Toolbar>
            </StyledAppbar>

            {/*  */}
            <DrawerLayout
                children={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            pt: "50px",
                            pb: "210px",
                            height: "max-content",
                        }}
                    >
                        <Typography
                            variant="h5"
                            children="Blogs"
                            color="text.secondary"
                            textTransform="uppercase"
                            sx={{
                                ml: "10px",
                                mb: "10px",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        />
                        <Stack
                            gap={1}
                            children={data.blogs?.edges?.map(
                                (blog, index) => (
                                    <BlogThumbnail
                                        fragRef={blog?.node as any}
                                        key={blog?.node?.id ?? index}
                                    />
                                )
                            )}
                        />
                    </Box>
                }
                drawerChildren={
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            alignItems: "center",
                            pb: "210px",
                            height: "max-content"
                        }}
                    >

                        <StyledAppbar
                            position='sticky'
                            sx={{
                                top: 0,
                                p: 1,
                                height: "72px",
                                bgcolor: "background.default"
                            }}
                        >
                            <TextField
                                variant="standard"
                                placeholder="Search"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                sx={{
                                    borderRadius: "12px",
                                    border: theme => `1px solid ${theme.palette.divider}`,
                                    backgroundColor: theme => theme.palette.background.paper,
                                    p: 1.5,
                                }}
                            />
                        </StyledAppbar>

                        <Stack
                            direction="column"
                            sx={{
                                width: "100%",
                                gap: "10px",
                                mt: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            children={blogs.length === 0 ?
                                (
                                    <Typography variant="body1" children="No blogs to show here" color="text.secondary" />
                                )
                                : blogs.map(
                                    (blog, index) => blog?.node ? (
                                        <DrawerButton
                                            frag={blog?.node}
                                            key={blog?.node?.id ?? index}
                                        />
                                    ) : null
                                )
                            }
                        />
                    </Box>
                }
            />
        </>
    );

};

export default Root;
