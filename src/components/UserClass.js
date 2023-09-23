import React from "react";
import "./User.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };

    console.log("constructor");
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/Cgs1208");
    const json = await response.json();

    this.setState({
      userInfo: json,
    });

    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: charangs157@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
