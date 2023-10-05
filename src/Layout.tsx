import React, { createContext } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router';
import { AppBar, Box, IconButton, Toolbar, Tooltip, styled } from '@mui/material';
import { Add, AddOutlined, Person, PersonOutline, ViewStream, ViewStreamOutlined } from '@mui/icons-material';

// styled appbar 
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
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
        createBlog: useMatch("/blog/new"),
    };

    React.useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    });

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>

            {/* main content section */}
            <Box
                sx={{
                    pl: { md: "75px" },
                    pb: { xs: "72px", md: "0px" }
                }}
            >
                <Outlet />
            </Box>
            {/*  */}

            {/* bottom nav bar */}
            <StyledAppbar
                sx={[
                    (theme) => ({
                        backgroundColor: theme.palette.background.default,
                        display: "flex",
                        [theme.breakpoints.down('md')]: {
                            position: "sticky",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "72px",
                            borderTop: `1px solid ${theme.palette.background.paper}`,
                            borderBottom: `1px solid ${theme.palette.background.paper}`,
                        },
                        [theme.breakpoints.up('md')]: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "69px",
                            borderRight: `1px solid ${theme.palette.background.paper}`,
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

                    <Tooltip title="Create Blog" placement={"right"}>
                        <IconButton>
                            {location.createBlog ?
                                <Add sx={{ color: "text.primary" }} /> :
                                <AddOutlined onClick={() => navigate("/blog/new")} />
                            }
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
