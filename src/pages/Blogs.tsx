import React from 'react';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

interface BlogsProps {

};

function Blogs(props: BlogsProps) {

    return (
        <>
            <Helmet>
                <title>Blogs</title>
                <meta name="description" content="Blogs" />
                <meta name="keywords" content="Blogs, Technology, TechBlog, Vlogs, API. OpenSource" />
                <meta name="author" content="Jainam Shah" />
                <meta property="og:title" content="Blogs" />
                <meta property="og:description" content="Blogs" />
                <meta property="og:url" content="https://blogs.beyondigital.agency" />
                <meta property="og:site_name" content="Blogs" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://blogs.beyondigital.agency/logo.png" />
                <meta property="og:image:alt" content="Blogs" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />
            </Helmet>

            <Box>

            </Box>
        </>
    );

};

export default Blogs;
