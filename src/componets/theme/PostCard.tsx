import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Post } from '../../models/post';
import { Box } from '@mui/material';

interface PostCardProps {
  post: Post;
}

export default function PostCard(props: PostCardProps) {
  const { post } = props;

  return (
    <>
      <Box sx={{ m: 2 }} /> 
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.id}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}