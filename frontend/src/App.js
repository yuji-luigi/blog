import "./App.css";

import Blog from "./components/Blog"


const sections = [
  { title: 45454, url: "api/v1/blogs" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: 'Title of  mainFeaturedPost that appeares at the TOP!!',
  description: "Multiple lins of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: 'main image description',
  linkText: 'Continue reading...'
};



const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];
const posts = [post1, post2, post3];



function App() {
  return (

    <Blog  
      featuredPosts={featuredPosts}
      mainFeaturedPost={mainFeaturedPost}
      sections={sections}
     />
  );
}

export default App;
