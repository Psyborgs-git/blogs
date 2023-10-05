import React from 'react';
import { Avatar, Box, Button, Chip, Rating, Stack, Typography, keyframes } from '@mui/material';
import { ContentCopy, Email, Verified } from '@mui/icons-material';
import { SocialAccountsEnum } from './__generated__/MyProfileQuery.graphql';
import SocialLink from '../components/SocialMediaButton';



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

export interface ProfileProps {
    id: string;
    name: string | null;
    seoTags: ReadonlyArray<string> | null;
    isActive: boolean;
    isVerified: boolean;
    verifiedEmail: string | null;
    category: string | null;
    cover: string | null;
    icon: string | null;
    avrRating: number | null;
    numOfReviews: number | null;
    description: string | null;
    socials: {
        edges: ReadonlyArray<{
            node: {
                id: string;
                username: string | null;
                type: SocialAccountsEnum | null;
                name: string | null;
            } | null;
        } | null>;
    };
}

export function ProfileCard({ account }: { account: Partial<ProfileProps> }) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', "second": undefined });

    return (
        <Stack maxWidth="sm" alignSelf="center" direction="column" justifyContent="center" alignItems="center" >

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
                children={"Surat, Gujarat, IN"}
                mb={2}
            />

            <Chip
                avatar={<Verified htmlColor={account?.isVerified ? "green" : "gray"} />}
                label={account?.category ?? " - "}
            />

            <Rating
                name="read-only"
                value={(account?.avrRating ?? 0) * 5}
                precision={0.1}
                max={5}
                readOnly
                sx={{ my: 1 }}
            />

            <Stack direction="row" alignItems="center" gap={1} my={2} alignSelf="center" >
                <Box
                    component="span"
                    sx={{
                        borderRadius: "50%",
                        width: "5px",
                        height: "5px",
                        bgcolor: account?.isActive ? "green" : "red",
                        animation: `${blink} 1000ms infinite`,
                        msScrollbarShadowColor: account?.isActive ? "green" : "red"
                    }} />
                <Typography color="text.secondary" variant="subtitle2" >
                    {account?.isActive ? "Status: Available" : "Status: Unavailable"}
                </Typography>
            </Stack>

            <Box sx={{ alignItems: "center", justifyContent: "space-evenly", gap: 2, flex: 1, alignSelf: "center", maxWidth: "100%" }}  >
                {account?.socials?.edges?.map(
                    (edge) => (
                        <SocialLink
                            key={edge?.node?.id ?? "sm"}
                            name={edge?.node?.name ?? "sm"}
                            username={edge?.node?.username ?? undefined}
                            type={edge?.node?.type ?? undefined}
                        />
                    )
                )}
            </Box>

            <Stack gap={1.5} my={2} sx={{ flexDirection: { xs: "column", md: "row" } }} >
                <Button
                    variant="contained"
                    LinkComponent="a"
                    sx={{
                        width: { xs: "90vw", md: "200px" },
                        borderRadius: "12px", bgcolor: theme => theme.palette.text.primary,
                        color: "background.default"
                    }}
                    href={`mailto:${account?.verifiedEmail ?? ""}`}
                >
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
                    onClick={() => {
                        navigator.clipboard.writeText(account?.verifiedEmail ?? "");
                    }}
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
