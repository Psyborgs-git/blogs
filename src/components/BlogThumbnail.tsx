import { Avatar, Box, Stack, SxProps, Typography } from '@mui/material';
import { useFragment } from 'react-relay';
import { BlogThumbnail_data$key } from './__generated__/BlogThumbnail_data.graphql';
import { useNavigate } from 'react-router';

// import 
const graphql = require('babel-plugin-relay/macro');

interface BlogThumbnailProps {
    fragRef: BlogThumbnail_data$key;
    sx?: SxProps;
};

export const fragQuery = graphql`
    fragment BlogThumbnail_data on BlogType {
        id
        title 
        description
        cover
        icon
    }
`;

function BlogThumbnail({ fragRef, sx }: BlogThumbnailProps) {

    const data = useFragment(fragQuery, fragRef)
    const naviagte = useNavigate();

    return (
        <Box
            component="a"
            key={data?.id}
            sx={[{
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                p: 1,
                m: 1,
                backgroundColor: theme => theme.palette.background.default,
                cursor: "pointer",
                width: "90%",
                alignSelf: "center",
                height: "max-content",
                transition: "all 0.2s ease-in-out",
                justifySelf: "center",
                alignItems: "center",
                boxShadow: theme => `0px 0px 3px 3px ${theme.palette.background.paper}`,
                "&:hover": {
                    boxShadow: theme => `0px 0px 6px 6px ${theme.palette.background.paper}`,
                    transform: "scale(0.98)",
                }
            },
            ...(Array.isArray(sx) ? sx : [sx])
            ]}
            onClick={() => naviagte(`/blog/${data?.id}`)}
        >
            <Stack gap={1} maxWidth="100%" direction='row' p={0.5} height="54px" >
                {data?.icon && <Avatar src={data?.icon} alt={data?.title} />}
                <Typography variant="h5" children={data?.title} color="text.primary" sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1, // Change this value to adjust the number of lines displayed
                    lineClamp: 1,
                    fontWeight: 700,
                    maxLines: 1,
                    maxHeight: "45px",
                    alignSelf: "center",
                }} />
            </Stack>

            <Box
                component="img"
                sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: theme => theme.palette.background.paper,
                    position: "relative",
                    flex: 1,
                    width: "100%",
                    height: {
                        xs: "50%",
                        md: "60%",
                    },
                    maxHeight: "300px",
                    my: 2
                }}
                src={data?.cover ?? "https://source.unsplash.com/random"}
                alt={data?.title}
                style={{
                    objectFit: "cover",
                }}
            />
            <Typography
                variant="body2"
                children={data?.description}
                color="text.secondary"
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4, // Change this value to adjust the number of lines displayed
                    lineHeight: "1.5rem", // Change this value to adjust the line height
                }}
            />
        </Box>
    );

};

export default BlogThumbnail;
