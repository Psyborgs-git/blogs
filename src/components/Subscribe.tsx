import React from 'react';
import { Box, Button, CircularProgress, Stack, TextField, Typography, styled } from '@mui/material';
import { useMutation } from 'react-relay';
import { Mail } from '@mui/icons-material';
import { SubscribeMutation } from './__generated__/SubscribeMutation.graphql';
const graphql = require('babel-plugin-relay/macro');

interface SubscribeProps {
    node: string;
};

export const T = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        borderRadius: "21px",
        borderColor: theme.palette.divider,
        "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
        },
        "&:hover": {
            borderColor: theme.palette.primary.main,
        }
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.divider,
    },
    [theme.breakpoints.down("md")]: {
        width: "90%"
    },
    [theme.breakpoints.up("md")]: {
        width: "70%"
    },
}))


function Subscribe({ node }: SubscribeProps) {
    const subscribed: boolean = window.localStorage.getItem(`subscribed:${node}`) === "true";
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [commit, isInFlight] = useMutation<SubscribeMutation>(graphql`mutation SubscribeMutation($input: SubscriberMutationInput!) {subscribe(input: $input) {success error} }`);

    const _submit = () => {

        if (!name || !email) {
            return alert("Please fill in both name and email");
        };

        return commit({
            variables: {
                input: {
                    name,
                    email,
                    node
                }
            },
            onCompleted: (response: any) => {
                if (response.subscribe.success) {
                    setName("");
                    setEmail("");
                    window.localStorage.setItem(`subscribed:${node}`, "true");
                }
            },
            onError: (error: Error) => {
                console.log(error);
            }
        })
    }

    return (
        <Box
            sx={{
                width: {
                    xs: "100%",
                    md: "60%",
                },
                alignSelf: "center",
                height: "max-content",
                px: 2,
                py: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.paper",
                borderRadius: "21px",
                border: theme => `1px solid ${theme.palette.divider}`,
                mt: 4,
            }}
        >

            <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                gap={2}
                sx={{ flex: 1 }}
            >

                <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "text.primary" }}
                    align="center"
                    children="Subscribe to our newsletter"
                />

                <Typography
                    variant="body1"
                    sx={{ fontWeight: 400, color: "text.secondary" }}
                    align="center"
                    children="Get the latest news and updates from us"
                />

                <T
                    label="Name"
                    required
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <T
                    label="Email"
                    required
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        endAdornment: <Mail />
                    }}
                />

                <Button
                    variant="contained"
                    disabled={subscribed}
                    sx={{
                        width: { xs: "90%", md: "50%" },
                        bgcolor: theme => theme.palette.primary.dark,
                        color: "background.default",
                        py: 1,
                        borderRadius: "21px",
                    }}
                    onClick={_submit}
                >
                    {isInFlight ?
                        <CircularProgress
                            size={20}
                            sx={{ color: "background.default" }}
                        /> :
                        <Typography variant="caption"
                            sx={{
                                fontWeight: 600, fontSize: "15px",
                                color: subscribed ? "text.success" : "background.default",
                                textTransform: "uppercase"
                            }}
                            children={subscribed ? "Subscribed" : "Submit"}
                        />
                    }
                </Button>

            </Stack>

        </Box>
    );

};

export default Subscribe;
