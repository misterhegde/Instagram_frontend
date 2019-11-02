import React, { Component } from "react";

class InstaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      account_type: ""
    };

    this.getUserDetails = this.getUserDetails.bind(this);
  }

  getUserDetails() {
    // console.log(this.props.user_id);
    // console.log(this.props.access_token);
    let { user_id, access_token } = this.props;

    const invocation = new XMLHttpRequest();

    fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${access_token}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          invocation: true,
          credentials: "include"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        var u_id = json.id;
        var u_username = json.username;
        var u_accounttype = json.account_type;

        this.setState(
          {
            id: u_id,
            username: u_username,
            account_type: u_accounttype //@dev Added account_type field, make sure to make changes in the state if you wan to modify
          },
          () => {
            console.log(this.state.id);
          }
        );
        console.log(this.state.username);
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
