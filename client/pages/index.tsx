import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

import {
  useCreatePostMutation,
  useGetPostsLazyQuery,
} from '../src/generated/graphql';
import { Post } from '../src/Post';

const Home: NextPage = () => {
  const [getPosts, { data: postsData, loading, error }] =
    useGetPostsLazyQuery();
  const [createPost] = useCreatePostMutation();
  const [postTitle, setPostTitle] = React.useState('');

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (postTitle) {
      await createPost({
        variables: {
          createPostInput: { title: postTitle },
        },
      });
      setPostTitle('');
      await getPosts();
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Posts
        </Typography>
        <section>
          <form onSubmit={handlePostSubmit}>
            <TextField
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Enter post title"
            />
            <Button type="submit">Create Post</Button>
          </form>
        </section>
        {postsData?.posts.map((post) => (
          <Post post={post} key={post.id} fetchPosts={getPosts} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
