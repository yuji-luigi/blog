import React from 'react'
import {
  CssBaseline,
  Grid,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { GitHubIcon, FacebookIcon, TwitterIcon } from "@mui/icons-material";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";


const theme = createTheme();


const Blog = (props) => {
  const {
    mainFeaturedPost,
    featuredPosts,
    sections,
    posts
} = props
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid
            container
            spacing={5}
            sx={{ mt:3 }}
            >
              {/* <Main title="From the fire hose" posts={posts} /> */}
            </Grid>
        </main>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Blog
