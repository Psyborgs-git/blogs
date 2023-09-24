import React from 'react';
import { Box, Container, SxProps, Theme, useMediaQuery } from '@mui/material';
import { DrawerContext } from './Layout';

interface DrawerLayoutProps {
    drawerChildren?: React.ReactNode;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
};

const height = "calc(100vh - 75px)";

function DrawerLayout({
    drawerChildren,
    children,
    sx
}: DrawerLayoutProps) {
    const isMobile = useMediaQuery("(max-width: 860px)");
    const { isDrawerOpen, toggleDrawer } = React.useContext(DrawerContext);

    React.useEffect(() => {
        if (isMobile) {
            toggleDrawer(false);
        } else {
            toggleDrawer(true);
        }
    }, [isMobile]);

    return (
        <Box
            sx={[{
                display: "grid",
                gridtemplateRows: "auto 1fr",
                gridTemplateColumns: {
                    xs: "none 1fr",
                    md: "1fr 2fr"
                },
                pl: {
                    xs: 0,
                    md: "72px"
                },
                height,
                overflow: "hidden",
                width: "calc(100vw- 72px)"
            },
            ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >

            {drawerChildren &&
                <Box
                    children={drawerChildren}
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexdirection: "column",
                        height,
                        width: "100%",
                        overflowY: "scroll",
                        borderRight: "1px solid rgba(0,0,0,0.1)",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                        bgcolor: "background.default",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        zIndex: 1,
                        ...(isMobile && {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "80vw",
                            zIndex: 99999,
                            transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)",
                            transition: "transform 300ms ease-in-out",
                            boxShadow: theme => isDrawerOpen ? `0px 0px 5px 5px ${theme.palette.background.paper}` : "none",
                            borderRight: "none",
                            height: "100vh"
                        }),
                    }}
                />
            }

            <Container
                children={children}
                sx={{
                    flex: 1,
                    display: "flex",
                    height,
                    width: "100%",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    scrollPaddingBottom: "100px",
                }}
            />

        </Box>
    );

};

export default DrawerLayout;
