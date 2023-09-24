import { Box, Container, Skeleton } from '@mui/material';

function BlogPage() {

    return (
        <Container>
            <Skeleton variant="rectangular" width="100%" height={400} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <Skeleton variant="text" width="80%" height={50} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="text" width="40%" height={50} />
            </Box>
            <Skeleton variant="text" width="90%" height={100} />
        </Container>
    );

};

export default BlogPage;
