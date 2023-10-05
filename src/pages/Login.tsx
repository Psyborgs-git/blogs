import React from 'react';
import { useMutation } from 'react-relay';
import { LoginMutation, LoginMutation$variables } from './__generated__/LoginMutation.graphql';
import { Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { T } from '../components/Subscribe';
import { useNavigate } from 'react-router';
const graphql = require('babel-plugin-relay/macro');

interface LoginProps {

}

interface LoginState {
    input: LoginMutation$variables['i'];
    userExists: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            input: {},
            userExists: false
        };
    }

    AuthForm = () => {
        const [fire, isInFlight] = this.runAuth();

        return (
            <Stack direction="column" gap={3} width="100%" alignSelf="center" alignItems="center" justifyContent="center" >
                <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
                    Login using your email
                </Typography>

                <T
                    value={this.state.input.email}
                    onChange={(e) => this.setState({ input: { ...this.state.input, email: e.target.value } })}
                    label="Email"
                    type="email"
                    placeholder='Email'
                    title='Email'
                    required
                    sx={{ maxWidth: "500px" }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%", maxWidth: "500px", borderRadius: "21px", p: "9px" }}
                    onClick={() => fire()}
                    disabled={isInFlight || !this.state.input.email}
                >
                    {isInFlight ? <CircularProgress size="20px" /> : "Get Verification Code"}
                </Button>

            </Stack>
        )
    }

    VerificationForm = () => {
        const [fire, isInFlight] = this.runAuth();

        return (
            <Stack direction="column" gap={3} width="100%" alignSelf="center" alignItems="center" justifyContent="center" >
                <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
                    Enter the verification code sent to your email
                </Typography>

                <T
                    value={this.state.input.verification?.otp}
                    onChange={(e) => this.setState({
                        input: {
                            ...this.state.input, verification: {
                                // @ts-ignore
                                id: this.state.input.verification.id as string,
                                otp: e.target.value
                            }
                        }
                    })}
                    label="OTP"
                    type="number"
                    placeholder='OTP'
                    title='OTP'
                    required
                    sx={{ maxWidth: "500px" }}
                />

                <Typography variant="overline" component="h1" sx={{ textAlign: "center" }}>
                    Note: Check Spam if you don't see it
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%", maxWidth: "500px", borderRadius: "21px", p: "9px" }}
                    onClick={() => fire()}
                    disabled={isInFlight || !this.state.input.verification?.otp}
                >
                    {isInFlight ? <CircularProgress size="20px" /> : "Get Verification Code"}
                </Button>


            </Stack>
        )
    }

    runAuth = (): [() => void, boolean] => {
        const [mutate, isInFlight] = useMutation<LoginMutation>(graphql`
            mutation LoginMutation ($i:  EmailAuthenticationInput!){
                emailAuth(input:$i){
                    token
                    userExists
                    success
                    error
                    id
                }
            }
        `);
        const nav = useNavigate();

        const fire = () => {
            mutate({
                variables: {
                    i: this.state.input
                },
                onCompleted: (res) => {
                    if (res.emailAuth?.userExists) {
                        this.setState({ userExists: true });
                    }
                    if (res.emailAuth?.success) {
                        this.setState({ input: { ...this.state.input, verification: { id: res.emailAuth.id as string, otp: "" } } });
                    }
                    if (res.emailAuth?.error) {
                        alert(res.emailAuth.error);
                    }
                    if (res.emailAuth?.token) {
                        localStorage.setItem("token", res.emailAuth.token);
                        nav("/");
                    }
                },
                onError: (err) => {
                    console.log(err);
                }
            })
        };

        React.useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    fire();
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }, []);

        return [fire, isInFlight]
    }

    render() {
        const { AuthForm, VerificationForm } = this;
        const { input } = this.state;

        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100vh",
                    bgcolor: "background.default",
                    overflowY: "scroll",
                    justifyContent: "center",
                }}
            >
                <Box component="span" sx={{ height: "max-content", width: "100%" }} >
                    {input.verification?.id ?
                        <VerificationForm />
                        : <AuthForm />
                    }
                </Box>
            </Container>
        );
    }

}

export default Login;
