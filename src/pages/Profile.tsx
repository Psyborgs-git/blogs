import React from 'react';
import { Avatar, Box, Button, Chip, Container, Stack, Typography, keyframes } from '@mui/material';
import { useParams } from 'react-router';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { ProfileQuery } from './__generated__/ProfileQuery.graphql';
import { ContentCopy, Email, Verified } from '@mui/icons-material';
import DrawerLayout from '../DraweredLayout';
import { ProfileData$data, ProfileData$key } from './__generated__/ProfileData.graphql';

const graphql = require('babel-plugin-relay/macro');

const blink = keyframes`
    0% {
        opacity: 0;
        scale:1;
    }
    50% {
        opacity: 1;
        scale:1.2;
    }   
    100% {
        scale:1;
        opacity: 0.5;
    }
`;

interface ProfileProps {
    frag: ProfileData$key;
};

// const Icons: any = {
//     "facebook": <Facebook />,
//     "twitter": <Twitter />,
//     "instagram": <Instagram />,
//     "linkedin": <LinkedIn />,
//     "github": <GitHub />,
//     "snapchat": <SnapchatIcon />
// };

// const SocialLink = ({ key, link, icon }: { key: string; link: string; icon?: JSX.Element }) => {
//     return icon ? (
//         <Tooltip title={key} >
//             <IconButton component="a" sx={{ color: "text.secondary" }} href={link} target="_blank" rel="noreferrer">
//                 {icon}
//             </IconButton>
//         </Tooltip>
//     ) : null;
// };

function ProfileCard({ account }: { account: Partial<ProfileData$data> }) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', "second": undefined });
    // const links = JSON.parse(account?.socials ?? {});

    return (
        <Stack maxWidth="sm" alignSelf="center" direction="column" justifyContent="center" mt={1} alignItems="center" >

            <Typography
                variant="overline"
                color="text.secondary"
                children={time}
                my={1}
                letterSpacing={2.5}
                textAlign="center"
            />

            <Avatar
                sx={{
                    width: "72px",
                    height: "72px",
                    bgcolor: "text.secondary",
                    mt: "10px",
                }}
                src={account?.icon ?? undefined}
                children={account?.name?.split(" ").map(x => x.charAt(0)) ?? undefined}
            />
            <Typography
                mt={2}
                variant="h5"
                children={account?.name}
            />
            <Typography
                variant="subtitle2"
                color="text.secondary"
                children={account?.position}
                mb={2}
            />

            <Chip
                avatar={account?.isVerified ? <Verified htmlColor="navy" /> : undefined}
                label={account?.category ?? " - "}
            />

            <Stack direction="row" alignItems="center" gap={1} my={2} alignSelf="center" >
                <Box component="span" sx={{
                    borderRadius: "50%",
                    width: "5px",
                    height: "5px",
                    bgcolor: account?.availabilityStatus ? "green" : "red",
                    animation: `${blink} 1000ms infinite`,
                    msScrollbarShadowColor: account?.availabilityStatus ? "green" : "red"
                }} />
                <Typography color="text.secondary" variant="subtitle2" >
                    {account?.availabilityStatus ?? "Status: Unavailable"}
                </Typography>
            </Stack>

            <Box sx={{ alignItems: "center", justifyContent: "space-evenly", gap: 2, flex: 1, alignSelf: "center", maxWidth: "100%" }}  >
                {/* {Object.keys(links).map(
                    (key: string) => (
                        <SocialLink
                            key={key}
                            link={links[key]}
                            icon={Icons[key]}
                        />
                    )
                )} */}
            </Box>

            <Stack gap={1.5} my={2} sx={{ flexDirection: { xs: "column", md: "row" } }} >
                <Button
                    variant="contained"
                    LinkComponent="a"
                    sx={{
                        width: { xs: "90vw", md: "200px" },
                        borderRadius: "12px", bgcolor: theme => theme.palette.text.primary,
                        color: "background.default"
                    }}  >
                    <Typography variant="caption" >
                        Contact
                    </Typography>
                    <Email sx={{ ml: "5px" }} />
                </Button>
                <Typography m="auto" textAlign="center" variant="caption" color="text.secondary" >
                    or
                </Typography>
                <Button
                    variant="contained"
                    LinkComponent="a"
                    sx={{
                        width: { xs: "90vw", md: "200px" },
                        boxShadow: (theme) => theme.shadows[5],
                        borderRadius: "12px",
                        bgcolor: "background.paper",
                        color: "text.secondary",
                    }} >
                    <Typography variant="caption" >
                        copy email
                    </Typography>
                    <ContentCopy sx={{ ml: "5px" }} />
                </Button>
            </Stack>

        </Stack>
    );

};

function Profile(props: ProfileProps) {
    const data = useFragment(
        graphql`
            fragment ProfileData on BlogAccountType {
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
                    position
                    # socials
                    availabilityStatus
                    reviews {
                        edges {
                            node {
                                ...Review_data
                            }
                        }
                    }
                }
        `,
        props.frag
    )


    return (
        <DrawerLayout>
            <Container maxWidth='md' >
                <Stack direction="column" pb="200px" gap={1} justifyContent="center" mt={1} alignItems="center" >

                    <ProfileCard account={data} />

                </Stack>
            </Container>
        </DrawerLayout>
    );

};


export default function NodeFetcher() {

    const id = useParams().id as string;
    const data = useLazyLoadQuery<ProfileQuery>(
        graphql`
            query ProfileQuery ($id: ID!) {
                node(id: $id) {
                    ...ProfileData
                }
            }
        `,
        { id },
        { fetchPolicy: "store-or-network" }
    );
    if (data?.node) { // add null check here
        return (
            <Profile frag={data.node} />
        );
    }
    return null; // return null if data is null

};


