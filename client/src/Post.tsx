import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {
  Post,
  useAddCommentMutation,
  useRemovePostMutation,
} from '../src/generated/graphql';
import { Button, IconButton, TextField } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const PostComp: FC<{ post: Post; fetchPosts: () => void }> = ({
  post,
  fetchPosts,
}) => {
  const [commentTitle, setCommentTitle] = useState('');
  const [addCommentMutation] = useAddCommentMutation();
  const [removePostMutation] = useRemovePostMutation();

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (commentTitle) {
      await addCommentMutation({
        variables: {
          id: post.id,
          createCommentInput: { title: commentTitle },
        },
      });
      setCommentTitle('');
      fetchPosts();
    }
  };

  const handleRemovePost = async (e: React.MouseEvent) => {
    await removePostMutation({
      variables: {
        id: post.id,
      },
    });
    fetchPosts();
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}
        >
          <Typography variant="h4" component="p" gutterBottom textAlign="left">
            {post.title}
          </Typography>
          <IconButton color="error" onClick={handleRemovePost}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
        <section>
          <form onSubmit={handlePostSubmit}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
            >
              <TextField
                value={commentTitle}
                onChange={(e) => setCommentTitle(e.target.value)}
                variant="standard"
                placeholder="Enter comment"
                fullWidth
              />
              <Button type="submit" style={{ width: 200 }}>
                Add Comment
              </Button>
            </Box>
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
