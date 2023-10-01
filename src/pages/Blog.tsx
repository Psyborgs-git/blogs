import React, { useRef } from 'react';

// mui
import { Box, Container, IconButton, Stack, Typography } from '@mui/material';

// helmet
import { Helmet } from 'react-helmet';

// router
import { useParams } from 'react-router';

// relay
import { useLazyLoadQuery } from 'react-relay';

// graphql query
import { BlogQuery } from './__generated__/BlogQuery.graphql';
import { Close } from '@mui/icons-material';
import { scaleUp } from '../animations/text';

// graphql 
const graphql = require('babel-plugin-relay/macro');


function Blog() {
    const id = useParams().id as string;
    const data = useLazyLoadQuery<BlogQuery>(
        graphql`
            query BlogQuery ($id: ID!){
                blog(id: $id) {
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
        `,
        { id },
        { "fetchPolicy": "store-or-network" }
    );
    const references = JSON.parse(data.blog?.references ?? "");

    return (
        <>
            <Helmet>
                <title>{data.blog?.title ?? "Blog"}</title>
                <meta name="description" content={data.blog?.description ?? ""} />
                <meta name="keywords" content={data.blog?.tags?.join(", ") ?? ""} />
                <meta name="author" content={data.blog?.author?.name ?? ""} />
                <meta name="category" content={data.blog?.category ?? ""} />
                <meta name="rating" content={data.blog?.avrRating?.toString() ?? "0"} />
                <meta name="icon" content={data.blog?.icon ?? ""} />
                <meta name="cover" content={data.blog?.cover ?? ""} />
                <meta name="created" content={data.blog?.createdAt ?? ""} />
                <meta name="updated" content={data.blog?.lastUpdated ?? ""} />
            </Helmet>

            <IconButton
                sx={{
                    backgroundColor: "background.default",
                    p: 1,
                    height: "50px",
                    width: "50px",
                    borderRadius: "25px",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "fixed",
                    top: "20px",
                    left: "calc(50% - 25px)",
                    animation: `${scaleUp} 500ms ease-in-out`,
                    zIndex: 1000,
                    boxShadow: theme => `0px 0px 10px 0px ${theme.palette.divider}`
                }}
                onClick={() => window.history.back()}
                children={<Close />}
            />

            <Container
                sx={{
                    overflowY: "scroll",
                    height: "100vh",
                    width: {
                        xs: "100%",
                        md: "calc(100vw - 70px)"
                    },
                    display: "flex",
                    flex: 1,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }}
            >
                <Box
                    sx={{
                        py: "75px",
                        height: "max-content",
                        maxWidth: "100%"
                    }}
                >
                    <Stack direction="column" gap={1} mb="50px" >

                        <Box sx={{ height: "50vh", width: "100%", overflow: "hidden", borderRadius: "18px", mx: "auto", }} >
                            <img
                                src={data.blog?.cover ?? ""}
                                alt={data.blog?.title ?? ""}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    minWidth: "600px",
                                    minHeight: "600px"
                                }}
                            />
                        </Box>

                        {/* header stack for title summary and other info */}
                        <Stack gap={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }} >

                            <Typography variant="overline" color="text.secondary" >
                                {new Date(data.blog?.createdAt).toDateString()}
                            </Typography>
                            <Typography variant="h4" maxWidth={{ xs: "95%", md: "70%" }} textAlign="center" fontWeight="bold" >
                                {data.blog?.title}
                            </Typography>

                            <Typography variant="body1" color="text.secondary" >
                                {data.blog?.description}
                            </Typography>

                        </Stack>
                        {/*  */}

                        {/* author stack */}
                        {/*  */}

                        {/* sections stack */}
                        <Stack gap={2} mt={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }} >

                            {
                                data.blog?.sections?.edges?.map((section, index) => (
                                    <Stack gap={1} mt={1.5} key={section?.node?.id} >
                                        {
                                            section?.node?.cover && (
                                                <Box
                                                    sx={{
                                                        width: "90%",
                                                        height: "30vh",
                                                        borderRadius: "18px",
                                                        overflow: "hidden"
                                                    }}
                                                >
                                                    <img
                                                        src={section.node.cover}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </Box>
                                            )
                                        }
                                        {
                                            section?.node?.video && (
                                                <Box
                                                    sx={{
                                                        width: "90%",
                                                        height: "30vh",
                                                        borderRadius: "18px",
                                                        overflow: "hidden"
                                                    }}
                                                >
                                                    <video
                                                        src={section.node.video}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </Box>
                                            )
                                        }
                                        <Typography variant="h5" fontWeight="bold" >
                                            {section?.node?.title}
                                        </Typography>
                                        <Typography variant="body1"  >
                                            {section?.node?.content.split("\n").map((line: string) => (
                                                <>
                                                    {line}
                                                    <br />
                                                </>
                                            ))}
                                        </Typography>
                                    </Stack>
                                ))
                            }

                        </Stack>
                        {/*  */}

                        {/* references */}
                        <Stack gap={1} mt="2em" sx={{ display: Object.keys(references).length > 0 ? "flex" : "none" }}>

                            <Typography variant='subtitle1' fontWeight="bold" fontStyle="oblique" >
                                References :
                            </Typography>

                            {Object.keys(references).map(
                                (key) => {
                                    return (
                                        <Typography variant="caption" component="a" color="text.primary" href={references[key]} key={key}>
                                            {key}
                                        </Typography>
                                    )
                                }
                            )}
                        </Stack>
                        {/*  */}
                    </Stack >

                </Box>
            </Container>
        </>
    );

};

export default Blog;
