import React from 'react';

// mui
import { Box, Stack, TextField, Toolbar, Typography } from '@mui/material';

// react router
import { useNavigate } from 'react-router';

// graphql relay
import { useLazyLoadQuery } from 'react-relay';
import { RootQuery } from './__generated__/RootQuery.graphql';

// icons
// import {  Category, ContentCopy, Delete } from '@mui/icons-material';

// custom components
import DrawerLayout from '../DraweredLayout';
import { DrawerContext, HeaderContext, StyledAppbar } from '../Layout';
import ThemeSwitch from '../components/ThemeSwitch';
import Hamburger from '../components/Hamburger';
import BlogThumbnail from '../components/BlogThumbnail';
import DrawerButton from '../components/DrawerButton';

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
    const navigate = useNavigate();
    const { isDrawerOpen, toggleDrawer } = React.useContext(DrawerContext);
    const { toggleHeader } = React.useContext(HeaderContext);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        toggleHeader(false);

        return () => toggleHeader(true);
    }, []);

    return (
        <>
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
                    <Stack
                        gap={1}
                        paddingTop={2}
                        children={data.blogs?.edges?.map(
                            (blog, index) => (
                                <BlogThumbnail
                                    onClick={id => navigate(`/b/blog/${id}`)}
                                    fragRef={blog?.node as any}
                                    key={blog?.node?.id ?? index}
                                />
                            )
                        )}
                    />
                }
                drawerChildren={
                    <Box component="span" px={2} >
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

                        <Stack direction="column" gap={"10px"} mt={2} pt={2} pb={4} >
                            <Typography variant="h6" children="Blogs" color="text.secondary" />
                            {data.blogs?.edges?.map(
                                (blog, index) => blog?.node ? (
                                    <DrawerButton
                                        frag={blog?.node}
                                        key={blog?.node?.id ?? index}
                                    />
                                ) : null
                            )}
                        </Stack>
                    </Box>
                }
            />
        </>
    );

};

export default Root;
