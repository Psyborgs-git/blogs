import React from 'react';
import { Box, Container, SxProps, Theme, useMediaQuery } from '@mui/material';
import { DrawerContext } from './Layout';

interface DrawerLayoutProps {
    drawerChildren?: React.ReactNode;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
};

const height = "100vh";

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
                overflow: "hidden",
                width: "100%",
                height,
                "&::-webkit-scrollbar": {
                    display: "none"
                },
                pt: "72px"
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
                        width: "100%",
                        borderRight: theme => `1px solid ${theme.palette.divider}`,
                        bgcolor: "background.default",
                        height: "100%",
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        zIndex: 1000,
                        ...(isMobile && {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "80vw",
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
                    width: "100%",
                    height: "100%",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }}
            />

        </Box>
    );

};

export default DrawerLayout;
