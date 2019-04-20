import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    posts: []
  };

  /// slice method abode helps getting only the first 10  objets from the array
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                {" "}
                {/* result here would be something like: /1234 */}
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

export default Home;
