import { Autocomplete, Avatar, Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLazyLoadQuery, useMutation } from 'react-relay';
import { T } from '../components/Subscribe';
import { CreateBlogQuery } from './__generated__/CreateBlogQuery.graphql';
import { CreateBlogMutation, CreateBlogMutation$variables } from './__generated__/CreateBlogMutation.graphql';
import { useNavigate } from 'react-router';
const graphql = require('babel-plugin-relay/macro');

interface CreateBlogProps {

}

interface CreateBlogState {
    selectedBlogAccount?: {
        id: string;
        name: string;
    };
    input: CreateBlogMutation$variables["input"];
    icon?: Blob;
    cover?: Blob;
}

function AccountAvatar({ edge, onClick, isSelected = false }: { edge: any; onClick?: () => void; isSelected: boolean }) {
    return (
        <Stack my={1} onClick={onClick} direction="row" width="100%" justifyContent="space-between" alignItems="center" >
            <Avatar
                key={edge?.node?.id}
                src={edge?.node?.icon ?? undefined}
                alt={edge?.node?.name}
                children={
                    edge?.node?.icon ??
                    edge?.node?.name?.split(" ").map((x: string) => x.charAt(0))
                }
                sx={{
                    width: "48px",
                    height: "48px",
                    border: theme => `3px solid ${isSelected ? theme.palette.primary.main : theme.palette.text.secondary}`,
                    cursor: "pointer",
                    transition: "0.2s",
                    mx: 2,
                    "&:hover": {
                        transform: "scale(0.98)"
                    }
                }}
            />
            <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ textAlign: "left", flex: 1 }}
                children={edge?.node?.name}
            />
        </Stack>
    )
}

class CreateBlog extends React.Component<CreateBlogProps, CreateBlogState> {

    constructor(props: CreateBlogProps) {
        super(props);
        this.state = {
            selectedBlogAccount: {
                id: "",
                name: "",
            },
            input: {}
        };
    }

    RenderBlogAccounts = () => {
        const data = useLazyLoadQuery<CreateBlogQuery>(graphql`query CreateBlogQuery {myAccounts { edges{node{ id name icon}}}}`, {}, { fetchPolicy: "store-or-network" });

        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    bgcolor: "background.default",
                    py: 1,
                    px: 2,
                    height: "81px",
                    alignItems: "center",
                    mb: 3
                }}
            >
                <Typography variant="h5" sx={{ textAlign: "center", my: 2 }} children={this.state.input.title ?? "New Blog"} />

                <Autocomplete
                    options={data?.myAccounts?.edges?.map((edge: any) => edge) ?? []}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) =>
                        <AccountAvatar
                            key={option.node?.id}
                            edge={option}
                            isSelected={this.state.selectedBlogAccount?.id === option.node?.id}
                            onClick={() => this.setState({ selectedBlogAccount: { ...option.node } })}
                        />
                    }
                    value={this.state.selectedBlogAccount?.name}
                    renderInput={(params) => (
                        <T
                            {...params}
                            required
                            sx={{ minWidth: "270px", maxWidth: "360px", mt: { xs: 1, md: 0 } }}
                            label="Select Blog Account"
                            helperText={this.state.selectedBlogAccount?.id ? undefined : "Select the account you want to post from."}
                        />
                    )}
                />

            </Stack>
        )
    }

    handle_file_input = (item: "icon" | "cover") => {
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
                    if (item === "cover") {
                        this.setState({ cover: blob });
                    }
                    if (item === "icon") {
                        this.setState({ icon: blob });
                    }
                };
                reader.readAsArrayBuffer(file);
            }
        };
        el.click();
    }

    MediaInp = () => {
        return (
            <Stack direction="column" gap={2} >

                <Typography variant="h6" sx={{ textAlign: "left" }} children="Cover" />
                <Avatar
                    src={this.state.cover ? URL.createObjectURL(this.state.cover) : undefined}
                    alt="Cover"
                    sx={{
                        width: "40vw",
                        height: "120px",
                        border: theme => `0.5px solid ${theme.palette.text.secondary}`,
                        cursor: "pointer",
                        transition: "0.2s",
                        mx: 2,
                        "&:hover": {
                            transform: "scale(0.98)"
                        }
                    }}
                    variant="rounded"
                    onClick={() => this.handle_file_input("cover")}
                    children="Cover"
                />

                <Typography variant="h6" sx={{ textAlign: "left" }} children="Icon" />
                <Avatar
                    src={this.state.icon ? URL.createObjectURL(this.state.icon) : undefined}
                    alt="Icon"
                    sx={{
                        width: "63px",
                        height: "63px",
                        border: theme => `0.5px solid ${theme.palette.text.secondary}`,
                        cursor: "pointer",
                        transition: "0.2s",
                        mx: 2,
                        "&:hover": {
                            transform: "scale(0.98)"
                        }
                    }}
                    onClick={() => this.handle_file_input("icon")}
                    children="Icon"
                />
            </Stack>
        )
    }

    BlogForm = () => {
        const { input } = this.state;
        const { MediaInp } = this;

        return (
            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "max-content",
                    bgcolor: "background.default",
                    overflowY: "scroll",
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    py: 2,
                    pb: "200px",
                    minheight: "100vh",
                }}
            >

                <MediaInp />

                <T
                    label="Title"
                    helperText="Enter the title of your blog."
                    value={input.title}
                    onChange={(e) => this.setState({ input: { ...input, title: e.target.value } })}
                    sx={{ maxWidth: "360px" }}
                />
                <T
                    label="Category"
                    helperText="Enter a Category for your blog."
                    value={input.category}
                    onChange={(e) => this.setState({ input: { ...input, category: e.target.value } })}
                    sx={{ maxWidth: "360px" }}
                />
                <T
                    label="Description"
                    helperText="Enter the description of your blog."
                    value={input.description}
                    onChange={(e) => this.setState({ input: { ...input, description: e.target.value } })}
                    multiline
                    type="text"
                />
                <T
                    label="Tags"
                    helperText="Enter the tags of your blog's SEO (use ',' to seperate words)."
                    value={input.tags}
                    onChange={(e) => this.setState({ input: { ...input, tags: e.target.value.split(",") } })}
                    sx={{ maxWidth: "360px" }}
                />

            </Stack>
        )
    }

    runMutation = (): [() => void, boolean] => {
        const [commit, isInFlight] = useMutation<CreateBlogMutation>(graphql`
            mutation CreateBlogMutation($input: BlogMutationInput!) {
                blog(input: $input) {
                    success
                    error
                    blog {
                            id
                            title
                            description
                            tags
                            references
                            author {
                                id
                                name
                            }
                            sectionOrder
                            createdAt
                            lastUpdated
                            category
                            avrRating
                            icon
                            cover
                            sections {
                                edges {
                                    node {
                                        id
                                        title
                                        cover
                                        content
                                        mediaLinks
                                        video
                                    }
                                }
                            }
                        }
                    }
                }
        `);
        const nav = useNavigate();

        const run = () => {
            const uploadables: any = {};
            if (this.state.icon) {
                uploadables.icon = this.state.icon;
            }
            if (this.state.cover) {
                uploadables.cover = this.state.cover;
            }
            commit({
                variables: {
                    input: {
                        ...this.state.input,
                        blogAccountId: this.state.selectedBlogAccount?.id
                    }
                },
                onCompleted: (response) => {
                    console.log(response);
                    if (response.blog?.success) {
                        nav(`/blog/${response.blog?.blog?.id}`);
                    }
                    if (response.blog?.error) {
                        alert(response.blog?.error);
                    }
                },
                onError: (error) => {
                    console.log(error);
                },
                uploadables: uploadables ?? undefined
            })
        };

        return [run, isInFlight];
    }

    SubmitionDeck = () => {
        const CanSubmit = !this.state.input.title || !this.state.input.category || !this.state.selectedBlogAccount?.id;
        const [run, isInFlight] = this.runMutation();

        // React.useEffect(() => {
        //     const hanleKeydown = (e: KeyboardEvent) => {
        //         if (e.key === "Enter") {
        //             CanSubmit && run();
        //         }
        //     }
        //     document.addEventListener("keydown", hanleKeydown);
        //     return () => document.removeEventListener("keydown", hanleKeydown);
        // }, [CanSubmit]);

        return (
            <Stack
                position="sticky"
                direction="row"
                justifyContent="space-between"
                height="73px"
                width="100%"
                sx={{
                    bottom: { xs: 73, md: 0 }, py: 2, px: 3, bgcolor: "background.default", zIndex: 1,
                    borderTop: theme => `1px solid ${theme.palette.divider}`,
                    alignItems: "center",
                }}
            >
                <Button variant="outlined" color="error" sx={{ borderRadius: "21px", px: "45px" }} children="Cancel" onClick={() => window.history.back()} />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "21px", px: "45px" }}
                    children={isInFlight ? <CircularProgress size="21px" /> : "Create"}
                    disabled={CanSubmit}
                    onClick={() => run()}
                />
            </Stack>
        )
    }

    render() {
        const { RenderBlogAccounts, BlogForm, SubmitionDeck } = this;

        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100vh",
                    bgcolor: "background.default",
                    overflowY: "scroll",
                    flex: 1,
                }}
            >
                <RenderBlogAccounts />
                <BlogForm />
                <SubmitionDeck />
            </Container>
        );
    }

}

export default CreateBlog;
