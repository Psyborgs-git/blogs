import React, { createContext } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router';
import { AppBar, Box, IconButton, Toolbar, Tooltip, styled } from '@mui/material';
import { BorderColor, BorderColorOutlined, KeyboardCommandKey, KeyboardCommandKeyOutlined, Person, PersonOutline, ViewStream, ViewStreamOutlined } from '@mui/icons-material';

// styled appbar 
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
    position: "sticky",
    boxShadow: "none",
    background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.default} 70%, transparent 100%)`,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.background.paper}`,
    ml: {
        xs: "0px",
        md: "60px",
    }
}));

export const DrawerContext = createContext({ isDrawerOpen: false, toggleDrawer: (open?: boolean) => { } });
export const HeaderContext = createContext({ isHeaderVisible: false, toggleHeader: (open?: boolean) => { } })

function Layout() {
    const [isDrawerOpen, setDrawerState] = React.useState(false);
    const toggleDrawer = React.useCallback(
        (open?: boolean) => {
            if (open === undefined) {
                setDrawerState(!isDrawerOpen);
            } else {
                setDrawerState(open);
            }
        }, [isDrawerOpen]
    );
    const navigate = useNavigate();
    const location = {
        home: useMatch("/"),
        profile: useMatch("/profile/"),
        blog: useMatch("/b/blogs"),
        edit: useMatch("/edit/"),
    };

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>

            {/* main content section */}
            <Outlet />
            {/*  */}

            {/* bottom nav bar */}
            <StyledAppbar
                position="fixed"
                sx={[
                    (theme) => ({
                        backgroundColor: theme.palette.background.default,
                        [theme.breakpoints.down('md')]: {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            borderTop: `1px solid ${theme.palette.background.paper}`,
                            borderBottom: `1px solid ${theme.palette.background.paper}`,
                        },
                        [theme.breakpoints.up('md')]: {
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "60px",
                            borderRight: `1px solid ${theme.palette.background.paper}`,
                            height: "100vh",
                            justifyContent: "center",
                            alignItems: "center",
                        }
                    })
                ]}
            >
                <Toolbar
                    sx={[
                        (theme) => ({
                            color: theme.palette.mode === "dark" ? theme.palette.grey[700] : theme.palette.grey[400],
                            height: "100%",
                            width: "100%",
                            [theme.breakpoints.down('md')]: {
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                            },
                            [theme.breakpoints.up('md')]: {
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                alignself: "center",
                                gap: 4,
                            }
                        })
                    ]}
                >
                    <Tooltip title="Home" placement={"right"}>
                        <IconButton>
                            {location.home ? <ViewStream sx={{ color: "text.primary" }} /> : <ViewStreamOutlined onClick={() => navigate("/")} />}
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Blogs" placement={"right"}>
                        <IconButton>
                            {location.blog ? <KeyboardCommandKey sx={{ color: "text.primary" }} /> : <KeyboardCommandKeyOutlined onClick={() => navigate("/b/blogs")} />}
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Create" placement={"right"}>
                        <IconButton>
                            {location.edit ? <BorderColor sx={{ color: "text.primary" }} /> : <BorderColorOutlined onClick={() => navigate("/edit")} />}
                        </IconButton>
                    </Tooltip>


                    <Tooltip title="Account" placement={"right"}>
                        <IconButton>
                            {location.profile ? <Person sx={{ color: "text.primary" }} /> : <PersonOutline onClick={() => navigate("/profile")} />}
                        </IconButton>
                    </Tooltip>


                </Toolbar>
            </StyledAppbar>
            {/*  */}
        </DrawerContext.Provider>
    );

};

export default Layout;
