import React from "react";
import "../App.css";
import Blog from "./Blogs/Blog";
import Blog_HomePage from "./Blog_HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog_Login from "./Blogs/Blog_SignUp_Login/Blog_Login/Blog_Login";
import Blog_SignUp from "./Blogs/Blog_SignUp_Login/Blog_SignUp/Blog_SignUp";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Category from "./Category/Category";
import Blog_Editor from "./Blogs/Blog_Editor/Blog_Editor";
import Sub_Category from "./Category/Sub_Category/Sub_Category";

const MyComponent = () => {
  return (
    <>
      <div className="main_container1 overflow-hidden">
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/category/:id">
              <Sub_Category />
            </Route>
            <Route exact path="/category">
              <Category />
            </Route>
            <Route exact path="/write-blog">
              <Blog_Editor />
            </Route>
            <Route exact path="/login">
              <Blog_Login />
            </Route>
            <Route exact path="/signup">
              <Blog_SignUp />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/home">
              <Blog_HomePage />
            </Route>
            <Route exact path="/">
              <Blog_HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
export default MyComponent;
