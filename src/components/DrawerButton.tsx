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
            px={1}
            width="90%"
            sx={{
                borderRadius: "10px",
                alignSelf: "flex-start",
                cursor: "pointer",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                }
            }}
        >
            <Avatar src={data?.icon ?? undefined} variant="rounded" />
            <Typography
                variant="subtitle1"
                children={data?.title}
                color="text.secondary"
            />
        </Stack>
    );

};

export default DrawerButton;
