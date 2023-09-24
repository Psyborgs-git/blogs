import React from 'react';
import { Box } from '@mui/material';
import { useFragment } from 'react-relay';

const graphql = require("babel-plugin-relay/macro");

interface ReviewProps {
    fragRef: any
};

function Review({ fragRef }: ReviewProps) {
    const data = useFragment(
        graphql`
            fragment Review_data on ReviewType {
                id
                comment
                rating
                timestamp
                media {
                    edges {
                    node {
                        id
                        url
                        type
                    }
                    }
                }
            }
        `,
        fragRef
    )

    return (
        <Box>

        </Box>
    );

};

export default Review;
