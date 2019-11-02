import React, { Component } from "react";

import InstaDetails from "./InstaDetails";

class InstaAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: "",
      user_id: ""
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const code = query.get("code");
    console.log("code:" + code);

    if (code) {
      var details = {
        app_id: "464830744136772",
        app_secret: "5395aaba15877852e9bfa4f749fd5c67",
        grant_type: "authorization_code",
        redirect_uri: "https://localhost:3000/instaauth",
        code: code
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      fetch("https://api.instagram.com/oauth/access_token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      })
        .then(response => response.json())
        .then(json => {
          var user_idstr = JSON.stringify(json.user_id);
          var access_tokenstr = json.access_token;
          //access_tokenstr = access_tokenstr.replace(/\"/g, ""));
          console.log(access_tokenstr);
          // user_idstr += 1;
          // console.log(access_tokenstr);

          this.setState(
            {
              access_token: access_tokenstr,
              user_id: user_idstr
            },
            () => {
              console.log("userid: " + this.state.user_id);
              console.log("accesstoken: " + this.state.access_token);
            }
          );
          console.log(this.state.user_id);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>
          If you see this page, you successfully authorized this app. You should
          now be able to get your <em>User ID</em> and <em>Access Token</em>
        </h1>
        <InstaDetails
          access_token={this.state.access_token}
          user_id={this.state.user_id}
        />
      </div>
    );
  }
}

export default InstaAuth;
