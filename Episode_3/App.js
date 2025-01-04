import React from 'react';
import ReactDOM from 'react-dom/client'
const heading = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'title' }, [
        React.createElement('h1', { id: 'text' }, 'Hello, world! from grandchild')
    ]),
    React.createElement('p', { id: 'description' }, 'This is a paragraph of text im child of parent')
]);

const jsxheading = <h1 key={0}> heading</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxheading)
