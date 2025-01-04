// const heading = React.createElement("h1",{
//     id:"heading"
// },"Hell")
import React from 'react';
import ReactDOM from 'react-dom/client'
// const heading = React.createElement(
//     "h1",
//     {
//       id: "heading",
//       dangerouslySetInnerHTML: {
//         __html: `I
//         <marquee id="marquee-id">
//         Love</marquee>
//         <h2 id="h2heading">
//         INDIA
//         <h2>`,
//       },
//     },
//   );
  
  const heading_2 = React.createElement('div',{id:'heading2'},[
    React.createElement('div',{id:'child1'},[
      React.createElement('h1',{},'Hello from child 1 using parcel'),
      React.createElement('h1',{},'World'),
    ]),
    React.createElement('div',{id:'child2'},[
      React.createElement('h1',{},'Hello from child 2'),
      React.createElement('h1',{},'World'),
    ])
  ])


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading_2);
  