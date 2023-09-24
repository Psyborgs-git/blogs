import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import SnapchatIcon from '../svgs/Snapchat';
import { Facebook, GitHub, Instagram, LinkedIn, Pinterest, Reddit, Telegram, Twitter, YouTube } from '@mui/icons-material';
import { SocialAccountsEnum } from '../pages/__generated__/MyProfileQuery.graphql';

interface SocialLinkProps {
    name?: string;
    username?: string;
    type?: SocialAccountsEnum;
}
type IconType = {
    [key in SocialAccountsEnum]: React.ReactNode;
};
const Icons: IconType = {
    FACEBOOK: <Facebook />,
    TWITTER: <Twitter />,
    INSTAGRAM: <Instagram />,
    LINKEDIN: <LinkedIn />,
    GITHUB: <GitHub />,
    SNAPCHAT: <SnapchatIcon />,
    TELEGRAM: <Telegram />,
    YOUTUBE: <YouTube />,
    REDDIT: <Reddit />,
    PINTEREST: <Pinterest />,
    WHATSAPP: undefined,
    TIKTOK: undefined,
    TUMBLR: undefined,
    MEDIUM: undefined,
    DISCORD: undefined,
    OTHER: undefined,
    SKYPE: undefined,
    QUORA: undefined,
    TWITCH: undefined,
    SPOTIFY: undefined,
    SOUNDCLOUD: undefined,
    TINDER: undefined,
    BADOO: undefined,
    '%future added value': undefined
};

const link = (type: SocialAccountsEnum, username: string) => {
    switch (type) {
        case "FACEBOOK":
            return `https://www.facebook.com/${username}`;
        case "TWITTER":
            return `https://twitter.com/${username}`;
        case "INSTAGRAM":
            return `https://www.instagram.com/${username}`;
        case "LINKEDIN":
            return `https://www.linkedin.com/in/${username}`;
        case "GITHUB":
            return `https://github.com/${username}`;
        case "SNAPCHAT":
            return `https://www.snapchat.com/add/${username}`;
        case "TELEGRAM":
            return `https://t.me/${username}`;
        case "WHATSAPP":
            return `https://wa.me/${username}`;
        case "YOUTUBE":
            return `https://www.youtube.com/channel/${username}`;
        case "TIKTOK":
            return `https://www.tiktok.com/${username}`;
        case "REDDIT":
            return `https://www.reddit.com/user/${username}`;
        case "PINTEREST":
            return `https://www.pinterest.com/${username}`;
        case "TUMBLR":
            return `https://${username}.tumblr.com`;
        case "SPOTIFY":
            return `https://open.spotify.com/user/${username}`;
        case "SOUNDCLOUD":
            return `https://soundcloud.com/${username}`;
        case "TWITCH":
            return `https://www.twitch.tv/${username}`;
        case "DISCORD":
            return `https://discord.com/users/${username}`;
        default:
            break;
    }
};

export default function SocialLink({ name, type, username }: SocialLinkProps) {
    return (
        <Tooltip title={name} >
            <IconButton
                component="a"
                sx={{
                    color: theme => theme.palette.text.primary,
                    m: 1,
                    bgcolor: theme => theme.palette.background.paper,
                    borderRadius: "12px",
                    transition: "0.2s",
                    height: "45px",
                    width: "45px",
                    "&:hover": {
                        transform: "scale(0.98)"
                    }
                }}
                href={type && username && link(type, username)}
                target="_blank"
                rel="opener referrer"
            >
                {(type && Icons[type]) ?? <Box sx={{ width: "24px", height: "24px", bgcolor: "primary.main" }} />}
            </IconButton>
        </Tooltip >
    );
};


