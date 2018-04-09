import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import "./styles.css"

function App(props) {
  let { posts } = props;
  return (
    <div>
    <Header />
      <Form />
      <div className="posts-wrapper">
        {posts.map((post, index) => {
          return <List {...post} key={index + post.title} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {})(App);
