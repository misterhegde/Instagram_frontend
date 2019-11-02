import React, { Component } from "react";

class InstaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: ""
    };

    this.getUserDetails = this.getUserDetails.bind(this);
  }

  getUserDetails() {
    console.log(this.props.user_id);
    console.log(this.props.access_token);
    let { user_id, access_token } = this.props;

    fetch(
      `https://graph.instagram.com/${user_id}?fields=id,username&access_token=${access_token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        // var idstr = JSON.stringify(json.id);
        // var usernamesre = JSON.stringify(json.username);

        this.setState(
          {
            id: json.id,
            username: json.username
          },
          () => {
            console.log(this.state.id);
          }
        );
        console.log(this.state.id);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getUserDetails}>GetUserDetails</button>
      </div>
    );
  }
}

export default InstaDetails;
