import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Link, Box, Typography } from '@mui/material';

const MarkdownListItem = (props) => {
  return <Box component="li" sx={{ mt: q, typography: 'body1'}} {...props} />;
};

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      }
    },
    h2: {
      component: Typography,
      props: { 
        gutterBottom: true,
        variant: 'h6',
        component: 'h2'
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'subtitle1',
      },
      h4: {
        component: Typography,
        variant: 'caption',
        paragraph: true,
      }
    },
    p: {
      component: {
        props: { paragraph: true },
      },
      a: { component: Link },
    },
    li: { component: MarkdownListItem }
    },
  }
};

const Markdown = () => {
  return <ReactMarkdown options={options}  />;
};

export default Markdown;
