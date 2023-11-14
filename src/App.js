import React from 'react';
import './App.css';
import MyComponent from './components';
import Blog_Editor from './components/Blogs/Blog_Editor/Blog_Editor';
import Blog_SignUp from './components/Blogs/Blog_SignUp_Login/Blog_SignUp/Blog_SignUp';
import Blog_Login from './components/Blogs/Blog_SignUp_Login/Blog_Login/Blog_Login';
// const rtfContent = require("./components/Blogs/RichTextViewer/RichText.rtf")

function App() {
  return (
    <>
      <MyComponent />
      {/* <Blog_Editor /> */}
      <Blog_SignUp />
      <Blog_Login />
    </>
  );
}

export default App;