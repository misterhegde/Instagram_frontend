import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <a
          className="btn btn-primary btn-lg"
          href="https://www.instagram.com/oauth/authorize?app_id=464830744136772&redirect_uri=https://localhost:3000/instaauth&scope=user_profile&response_type=code"
        >
          Instagram Login
        </a>
      </div>
    );
  }
}

export default LandingPage;
