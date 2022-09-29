import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Post, useAddCommentMutation } from '../src/generated/graphql';
import { Button, TextField } from '@mui/material';

export const PostComp: FC<{ post: Post; fetchPosts: () => void }> = ({
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
    <Card style={{ marginTop: 30 }}>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 4,
          paddingTop: 1,
          paddingBottom: 1,
          // alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="p" gutterBottom textAlign="center">
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
          <Typography
            component="p"
            key={comment.id}
            gutterBottom
            style={{ textAlign: 'left' }}
          >
            {comment.title}
          </Typography>
        ))}
      </Box>
    </Card>
  );
};
