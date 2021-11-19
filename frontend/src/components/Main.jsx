import React from 'react';
import { Typography, Grid, Divider } from '@mui/material';
import Markdown from './Markdown';

const Main = (props) => {
  const { posts, title } = props;
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3
        }
      }}
    >
      <Typography variant="h6" gutterBottom >
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <Markdown className="markdown" key={post.substring(0, 40)} >
          {post} here
        </Markdown>
      )
      )
      }

    </Grid>
  );
};

export default Main;
