import React from 'react';

// react-relay
import { useLazyLoadQuery } from 'react-relay';
import { MyProfileQuery, MyProfileQuery$data } from './__generated__/MyProfileQuery.graphql';

// mui components
import { AppBar, Avatar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import { ProfileCard } from './Profile';
import { ProfileData$data } from './__generated__/ProfileData.graphql';
import BlogThumbnail from '../components/BlogThumbnail';
import Subscribe from '../components/Subscribe';

const graphql = require("babel-plugin-relay/macro");

interface ModProfileProps {

}

interface ModProfileState {
    accounts?: MyProfileQuery$data["accounts"];
    selected?: number;
    newAccountForm?: boolean;
}

class ModProfile extends React.Component<ModProfileProps, ModProfileState> {

    constructor(props: ModProfileProps) {
        super(props);
        this.state = {
            accounts: undefined,
            selected: undefined,
            newAccountForm: false
        };
    }

    _render_header_account = (edge: any, index: number) => {
        const isSelected = index === this.state.selected;

        const selectAccount = (index: number) => {
            this.setState({ selected: index });
        };

        return (
            <Stack direction="column" justifyContent="center" alignItems="center" >
                <Avatar
                    key={edge?.node?.id}
                    src={edge?.node?.icon ?? undefined}
                    children={edge?.node?.icon ? undefined : edge?.node?.name?.split(" ").map((x: string) => x.charAt(0))}
                    onClick={() => selectAccount(index)}
                    sx={{
                        width: "48px",
                        height: "48px",
                        border: theme => `2px solid ${isSelected ? theme.palette.primary.main : theme.palette.text.secondary}`,
                        cursor: "pointer",
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(0.98)"
                        }
                    }}
                />
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                    children={edge?.node?.name}
                />
            </Stack>
        )
    }

    _render_blog_thumbnail = (edge: any, index: number) => (
        <BlogThumbnail
            sx={{
                width: {
                    xs: "100%",
                    md: "45%",
                },
                mx: "auto"
            }}
            key={edge?.node?.id}
            fragRef={edge?.node}
        />
    )

    DataFetchLayer = () => {
        const data = useLazyLoadQuery<MyProfileQuery>(
            graphql`
                query MyProfileQuery {
                    accounts {
                        edges {
                            node {
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
                }
            `,
            {},
            { fetchPolicy: "store-or-network" }
        );
        const { accounts } = this.state;

        React.useEffect(() => {
            this.setState({ accounts: data?.accounts });
            if (accounts?.edges?.length === 0) {
                this.setState({ selected: undefined });
            } else if (this.state.selected === undefined && accounts?.edges?.length) {
                this.setState({ selected: 0 });
            }
        }, [data]);

        return (
            <AppBar
                sx={{
                    height: "max-content",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    bgcolor: "background.default",
                    boxShadow: "none"
                }}
            >

                <Toolbar
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        height: "max-content",
                        bgcolor: "background.default",
                    }} >
                    <Box
                        sx={{
                            flex: 1,
                            overflowX: "scroll",
                            overflowY: "hidden",
                            alignSelf: "center",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }} >
                        <Stack py={2} direction="row" gap={3} justifyContent="space-evenly">
                            {accounts?.edges?.map(this._render_header_account)}
                        </Stack>
                    </Box>
                </Toolbar>

            </AppBar>
        )
    }

    Account = () => {
        return (
            <Box
                sx={{
                    height: "max-content",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    py: "72px",
                }}
            >
                {this.state.selected !== undefined ?
                    <Box
                        sx={{
                            height: "max-content",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            pb: "120px",
                        }}
                    >
                        <ProfileCard
                            account={this.state.accounts?.edges?.[this.state.selected]?.node as unknown as ProfileData$data}
                        />
                        <Stack direction="column" justifyContent="space-evenly" alignItems="center" gap={2} sx={{ flex: 1 }} >
                            <Typography variant="h5" children="Blogs" alignSelf="center" />
                            <Stack
                                direction={{
                                    xs: "column",
                                    md: "row"
                                }}
                                sx={{ width: "100%", flexWrap: "wrap" }}
                                justifyContent="space-evenly"
                                gap={2}
                                children={
                                    this.state.accounts?.edges?.[this.state.selected]?.node?.blogs?.edges?.length ?
                                        this.state.accounts?.edges?.[this.state.selected]?.node?.blogs?.edges?.map(this._render_blog_thumbnail) :
                                        <Typography
                                            variant="h5"
                                            children={"This Account has no published blogs yet. check back later."}
                                            sx={{
                                                alignSelf: "center",
                                                color: "text.secondary",
                                                fontWeight: "bold",
                                                mt: 2,
                                                width: "100%",
                                                textAlign: "center"
                                            }}
                                        />
                                }
                            />

                            <Subscribe
                                node={this.state.accounts?.edges?.[this.state.selected]?.node?.id as string}
                            />

                        </Stack>
                    </Box>
                    : <Typography
                        variant="h5"
                        children={"Select a Profile from above."}
                        sx={{
                            alignSelf: "center",
                            color: "text.secondary",
                            fontWeight: "bold",
                            mt: 2,
                            width: "100%",
                            textAlign: "center"
                        }}
                    />
                }
            </Box>
        )
    }

    render() {
        const { DataFetchLayer, Account } = this

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
                <DataFetchLayer />
                <Account />
            </Container>
        );
    }

}

export default ModProfile;
