import React from "react";

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
      <div className="border border-black w-1/4 p-4 bg-white rounded-lg shadow-xl">
        <img
          src={avatar_url}
          alt="github-avatar"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h2 className="font-bold">Name: {name}</h2>
        <h3 className="font-bold">Location: {location}</h3>
        <h4 className="font-bold">Contact: charangs157@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
