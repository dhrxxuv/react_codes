import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, // THIS IS HOW WE CREATE STATE VARIABLE
      count1: false,
      data: [], // Initialize data as an array
    };
    console.log("hi from constructor UserClass ");
  }

  // we can also deStructure the props or can use them directly
  componentDidUpdate(){
    console.log('componentdidupdate UserClass ')
  }
  async componentDidMount() {
    console.log("hi from componentDidMount UserClass ");
    try {
      const data = await fetch("https://api.github.com/users/dhrxxuv");
      const response = await data.json();
      console.log(response);
      this.setState({ data: response });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { name, location } = this.props; // Destructuring props
    const { count1, count, data } = this.state; // Destructuring state
    console.log("hi from render UserClass " );

    return (
      <>
        <h1>Hi from class component</h1>
        <h2>{name}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1, // Increment count
            });
          }}
        >
          {`INCREMENT ${count}`}
        </button>

        <button
          onClick={() => {
            this.setState({
              count1: !count1, // Toggle count1
            });
          }}
        >
          {`true false button`}
        </button>

        {count1 ? <h1>True</h1> : <h1>False</h1>}
        <h2>{location}</h2>

        {/* Display fetched data */}
        <div>
            <h1>{data.name}</h1>
      </div>

      </>
    );
  }
}

export default UserClass;

// import {useEffect, useState} from 'react'
// const UserClass = ()=>{
//   const [data,setdata] = useState([])

//   useEffect(()=>{
//     const fetching = async()=>{
//       const DATA = await fetch('https://api.github.com/users/dhrxxuv')
//       const response = await DATA.json()

//       setdata(response)
//       console.log(DATA)
//     }
//     fetching()
//   },[])

//   return(
//     <div>
      
//         <h1>{data.name}</h1>

//     </div>
//   )
// }



// export default UserClass