import React from 'react';

import { Autocomplete, Avatar, Box, Button, CircularProgress, Collapse, Container, Stack, TextField, Tooltip, Typography } from '@mui/material';

import { ProfileCard, ProfileProps } from './Profile';
import { T } from '../components/Subscribe';

import { useMutation } from 'react-relay';
import { useNavigate } from 'react-router';
import { CreateAccountMutation, CreateAccountMutation$variables, SocialMediaInput } from './__generated__/CreateAccountMutation.graphql';
import { Add } from '@mui/icons-material';
import SocialLink from '../components/SocialMediaButton';
import type { SocialAccountsEnum } from './__generated__/MyProfileQuery.graphql';

const graphql = require('babel-plugin-relay/macro');

const socialAccountsArray: SocialAccountsEnum[] = ["INSTAGRAM", "FACEBOOK", "TWITTER", "WHATSAPP", "LINKEDIN", "YOUTUBE", "TIKTOK", "SNAPCHAT", "TELEGRAM", "PINTEREST", "REDDIT", "TUMBLR", "GITHUB", "MEDIUM", "DISCORD", "OTHER", "SKYPE", "QUORA", "TWITCH", "SPOTIFY", "SOUNDCLOUD", "TINDER", "BADOO"];

interface CreateAccountProps {

}

interface CreateAccountState {
    input: CreateAccountMutation$variables['i'];
    profile?: Partial<ProfileProps>;
    preview: boolean;
    icon?: Blob;
}

class CreateAccount extends React.Component<CreateAccountProps, CreateAccountState> {

    constructor(props: CreateAccountProps) {
        super(props);
        this.state = {
            input: {

            },
            profile: undefined,
            preview: false
        };
    }

    componentDidMount() {
        // const 
    }

    handle_file_input = () => {
        const el = document.createElement("input");
        el.type = "file";
        el.accept = "image/*";

        el.onchange = (event: any) => {
            // Handle the selected file and set it to the state.icon
            const file = event.target?.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onloadend = (ev) => {
                    const blob = new Blob([reader?.result as any], { type: file.type });
                    this.setState({ icon: blob });
                };
                reader.readAsArrayBuffer(file);
            }
        };
        el.click();
    }

    _render_social = (social: any, index: number) => (<SocialLink key={index} {...social} />)

    SocialForm = () => {
        const [newSocial, setNewSocial] = React.useState<SocialMediaInput>({
            type: "OTHER",
            username: ""
        });
        const _submit = () => {
            this.setState({
                input: {
                    ...this.state.input,
                    socials: [
                        ...(this.state.input?.socials ?? []),
                        newSocial
                    ]
                }
            });
            setNewSocial({
                type: "OTHER",
                username: ""
            });
        };

        return (
            <Stack
                direction={{ xs: "column", md: "row" }}
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
            >
                <T
                    required
                    label="Username"
                    variant="outlined"
                    sx={{ flex: 1 }}
                    value={newSocial.username}
                    onChange={(e) => setNewSocial({ ...newSocial, username: e.target.value })}
                    helperText="Enter your username"
                />
                <T
                    label="URL"
                    variant="outlined"
                    sx={{ flex: 1 }}
                    value={newSocial.url}
                    onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })}
                    helperText="Use URL if platform not listed"
                />
                <Autocomplete
                    options={socialAccountsArray}
                    autoHighlight
                    getOptionLabel={(option) => option}
                    value={newSocial.type}
                    renderOption={(props, option) => (
                        <Box component="li"  {...props}>
                            {option}
                        </Box>
                    )}
                    onChange={(e, value) => value && setNewSocial({ ...newSocial, type: value })}
                    renderInput={(params) => (
                        <T
                            {...params}
                            required
                            sx={{ minWidth: "270px", maxWidth: "360px", mt: { xs: 1, md: 0 } }}
                            label="Choose the platform"
                            helperText="Choose the platform"
                        />
                    )}
                />
                <Button
                    variant="outlined"
                    onClick={_submit}
                    children="Add"
                    disabled={!newSocial.username || !newSocial.type}
                    sx={{ borderRadius: "21px", px: "45px" }}
                />
            </Stack>
        )
    }

    SocialsForm = () => {
        const [newSocial, setNewSocial] = React.useState<boolean>(false);
        const _toggle_new = () => setNewSocial(!newSocial);
        const { SocialForm } = this;

        return (
            <Stack direction="column" width="100%" gap={1} >

                <Stack direction="row" gap={1} sx={{ width: "100%", px: "9px" }} alignItems="center" justifyContent="space-between" >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            mt: 2,
                            py: 1,
                            width: {
                                md: "100%",
                                textAlign: { md: "left" }
                            }
                        }}
                        children="Socials Media Accounts"
                    />
                    <Tooltip title="Add Social" >
                        <Avatar
                            onClick={_toggle_new}
                            children={<Add />}
                            sx={{
                                width: "30px",
                                height: "30px",
                                bgcolor: "background.paper",
                                color: newSocial ? "error.main" : "primary.main",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "scale(1.1)"
                                },
                                transition: "0.2s",
                                ...(newSocial && {
                                    rotate: "45deg",
                                })
                            }}
                        />
                    </Tooltip>
                </Stack>

                <Box
                    sx={{
                        maxWidth: "100%",
                        width: "max-content",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        alignSelf: "center",
                        mb: 1
                    }}
                >
                    <Stack mb={2} direction="row" gap={1}>
                        {this.state.input.socials?.length ?
                            this.state.input.socials?.map(this._render_social) :
                            <Typography
                                variant="overline"
                                color="text.secondary"
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    mt: 2,
                                    py: 1,
                                    width: {
                                        md: "100%",
                                        textAlign: { md: "left" }
                                    }
                                }}
                                children="No Social Media Accounts Added Yet"
                            />
                        }
                    </Stack>

                    <Collapse sx={{ width: "100%" }} in={newSocial} >
                        <SocialForm />
                    </Collapse>

                </Box>

            </Stack>
        )
    }

    AccountForm = () => {
        const { SocialsForm } = this;
        return (
            <Stack
                direction="column"
                sx={{
                    width: "100%",
                    height: "max-content",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                gap={2}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 2,
                        py: 1
                    }}
                    children="Create Blog Account"
                />

                <Avatar
                    sx={{
                        width: "100px",
                        height: "100px",
                        mb: 2,
                        border: (theme) => `1px solid ${this.state.icon ? theme.palette.primary : theme.palette.divider}`,
                    }}
                    src={this.state.icon ? URL.createObjectURL(this.state.icon) : undefined}
                    children={<Add />}
                    onClick={() => this.handle_file_input()}
                />

                <SocialsForm />

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        mt: 2,
                        py: 1,
                        width: {
                            md: "100%",
                            textAlign: { md: "left" }
                        }
                    }}
                    children="Basic Account Info"
                />


                <T
                    label="Name"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: "400px"
                    }}
                    onChange={(e) => {
                        this.setState({
                            input: {
                                ...this.state.input,
                                name: e.target.value
                            }
                        })
                    }}
                />

                <T
                    label="Category"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: "400px"
                    }}
                    onChange={(e) => {
                        this.setState({
                            input: {
                                ...this.state.input,
                                category: e.target.value
                            }
                        })
                    }}
                />

                <T
                    label="Position"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: "400px"
                    }}
                    onChange={(e) => {
                        this.setState({
                            input: {
                                ...this.state.input,
                                position: e.target.value
                            }
                        })
                    }}
                />

            </Stack>
        )
    }

    runMutation = (): [() => void, boolean] => {
        const [mutate, isInFlight] = useMutation<CreateAccountMutation>(
            graphql`
            mutation  CreateAccountMutation($i: BlogAccountMutationInput!){
                account(input: $i) {
                    success
                    error
                    blogAccount {
                        id
                        name
                        seoTags
                        isActive
                        isVerified
                        verifiedEmail
                        category
                        cover
                        icon
                        avrRating
                        numOfReviews
                        description
                        socials {edges {node {id username name type}}}
                        blogs {edges {node {id ...BlogThumbnail_data}}}
                    }
                }
            }
        `);
        const nav = useNavigate();

        const fire = () => {
            mutate({
                variables: { i: this.state.input },
                onCompleted: (data) => {
                    if (data?.account?.success) {
                        console.log(data?.account?.blogAccount);
                        if (data?.account?.blogAccount) {
                            this.setState({
                                profile: data?.account?.blogAccount,
                                preview: true
                            });
                        }
                        else {
                            nav("/profile")
                        }
                    }
                },
                onError: (error) => {
                    console.log(error);
                },
                ...(this.state.icon && { uploadables: { icon: this.state.icon } })
            });
        };

        return [fire, isInFlight];
    }

    SubmitButton = () => {
        const [fire, isInFlight] = this.runMutation();
        const buttonIsDisabled = !this.state.input.name || !this.state.input.category || !this.state.input.position || isInFlight;
        const _preview = (e: any) => {
            if (this.state.preview) {
                this.setState({ preview: false });
            }
            else {
                this.setState({
                    preview: true,
                    profile: {
                        name: this.state.input.name,
                        category: this.state.input.category,
                        socials: this.state.input.socials ? {
                            edges: this.state.input.socials?.map((social) => ({ node: social })) as any
                        } : undefined,
                        ...(this.state.icon && { icon: URL.createObjectURL(this.state.icon) })
                    }
                })
            }
        }
        React.useEffect(() => {
            const _handle_keydown = (e: KeyboardEvent) => {
                if (e.key === "Enter" && !buttonIsDisabled) {
                    fire();
                }
            }
            window.addEventListener("keydown", _handle_keydown);
            return () => window.removeEventListener("keydown", _handle_keydown);
        }, [buttonIsDisabled]);

        return (
            <Stack
                position="sticky"
                direction="row"
                gap={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    bottom: 0,
                    width: "100%",
                    height: "72px",
                    bgcolor: "background.default",
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    px: 2,
                    py: 1,
                    zIndex: 1000
                }}
            >

                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => window.history.back()}
                    children="Cancel"
                    sx={{ borderRadius: "21px", px: "45px" }}
                />

                <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
                    <Button
                        variant="outlined"
                        color="info"
                        onClick={_preview}
                        children={
                            this.state.preview ? "Close Preview" : "Preview"
                        }
                        sx={{ borderRadius: "21px", px: "45px" }}
                        disabled={buttonIsDisabled}
                    />
                    <Button
                        variant="contained"
                        color='primary'
                        onClick={() => fire()}
                        children={
                            isInFlight ?
                                <CircularProgress size="20px" /> :
                                "Submit"
                        }
                        sx={{ borderRadius: "21px", px: "45px" }}
                        disabled={buttonIsDisabled}
                    />
                </Stack>
            </Stack>
        )
    }

    render() {
        const { profile, preview } = this.state;
        const { AccountForm, SubmitButton } = this;

        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: {
                        xs: "calc(100vh - 72px)",
                        md: "100vh"
                    },
                    bgcolor: "background.default",
                    overflowY: "scroll",
                }}
            >
                <Box component="span" sx={{ pb: "180px", width: "100%" }} >
                    {(preview && profile) ? <ProfileCard account={profile} /> : <AccountForm />}
                </Box>
                <SubmitButton />
            </Container>
        );
    }

}

export default CreateAccount;
