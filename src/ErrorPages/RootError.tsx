import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function RootErrorPage() {
    const error = useRouteError() as any;
    console.error(error);

    return (
        <Container id="error-page">
            <Typography variant="h2" >Oops!</Typography>
            <Typography variant="overline">
                <p>Sorry, an unexpected error has occurred.</p>
            </Typography>

            <Typography variant="caption" >
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Typography>

        </Container>
    );
}