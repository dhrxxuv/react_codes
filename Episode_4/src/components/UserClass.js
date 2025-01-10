import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, // THIS IS HOW WE CREATE STATE VARIABLE
      count1: false,
    };

  }
  // we can also deStructure the props or can use them directly

  render() {
    const { name } = this.props;
    const { count1 } = this.state; // Correctly destructuring state

    return (
      <>
        <h1>Hi from class component</h1>
        <h2>{name}</h2>
        {/* This is how we can destructure the props */}

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {`INCREMENT ${this.state.count}`}
        </button>

        <button
          onClick={() => {
            this.setState({
              count1: !this.state.count1, // Correctly toggling count1
            });
          }}
        >
          {`true false button`}
        </button>

        {count1 ? <h1>True</h1> : <h1>False</h1>}
        <h2>{this.props.location}</h2>
        {/* This is how we can directly use the props */}
      </>
    );
  }
}

export default UserClass;