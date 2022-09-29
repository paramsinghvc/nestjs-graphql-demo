import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Post, useAddCommentMutation } from '../src/generated/graphql';
import { Button, TextField } from '@mui/material';

export const Post: FC<{ post: Post; fetchPosts: () => void }> = ({
  post,
  fetchPosts,
}) => {
  const [commentTitle, setCommentTitle] = useState('');
  const [addComment] = useAddCommentMutation();

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (commentTitle) {
      await addComment({
        variables: {
          id: post.id,
          createCommentInput: { title: commentTitle },
        },
      });
      setCommentTitle('');
      fetchPosts();
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
        <Typography variant="h4" component="p" gutterBottom>
          {post.title}
        </Typography>
        <section>
          <form onSubmit={handlePostSubmit}>
            <TextField
              value={commentTitle}
              onChange={(e) => setCommentTitle(e.target.value)}
              variant="standard"
              placeholder="Enter comment"
            />
            <Button type="submit">Add Comment</Button>
          </form>
        </section>
        {post.comments?.map((comment) => (
          <Typography component="p" key={comment.id} gutterBottom>
            {comment.title}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};
