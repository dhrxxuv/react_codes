import React ,{Component}from 'react'
import UserClass from './UserClass'
import Dummy from './Dummy'
// import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div>
//       <UserClass name = "Dhruv" location = "DABRA"></UserClass>
//     </div>
//   )
// }

// export default About



class About extends Component {
  constructor(){
    super()
    console.log(this)
    console.log('parent constructor')

    this.state={
      nameeee: 'Dhruv',
    }
  }
  componentDidMount(){
    console.log("component did mount parent");
    <Dummy></Dummy>
  }
  render() {
    console.log('render parent')
    return (
      <div>
        <h1>{this.state.nameeee}</h1>
        <UserClass name="Dhruv" location="DABRA" />
      </div>
    );
  }
}

export default About;
