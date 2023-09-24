import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { useFragment } from 'react-relay';
import { DrawerButton_data$key } from './__generated__/DrawerButton_data.graphql';
import { useNavigate } from 'react-router';

const graphql = require('babel-plugin-relay/macro');

interface DrawerButtonProps {
    frag: DrawerButton_data$key;
};

function DrawerButton(props: DrawerButtonProps) {
    const data = useFragment(
        graphql`
            fragment DrawerButton_data on BlogType {
                id
                title
                icon
            }
        `,
        props.frag
    );
    const navigate = useNavigate();


    return (
        <Stack
            flexDirection="row"
            alignItems="center"
            key={data?.id}
            onClick={e => navigate(`/blog/${data.id}`)}
            gap={1}
            p={1}
            width="90%"
            height="72px"
            borderRadius={"21px"}
            sx={{
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: theme => `0px 0px 10px 0px ${theme.palette.divider}`,
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                }
            }}
        >
            <Avatar
                src={data?.icon ?? undefined}
                alt={data?.title ?? undefined}
                variant="rounded"
                sx={{ height: "54px", width: "54px", borderRadius: "21px" }}
            />
            <Typography
                variant="h6"
                children={data?.title}
                color="text.secondary"
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // Change this value to adjust the number of lines displayed
                    lineHeight: "1.5rem", // Change this value to adjust the line height
                }}
            />
        </Stack>
    );

};

export default DrawerButton;
