import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

let h1 = React.createElement('h1', {}, "An Awesome Person")
let p = React.createElement('p', {}, "Who is learning React")
let listItems = []
let list = ["JavaScript", "React", "Movies", "Ice cream"]
list.forEach((interest) => {
  listItems.push(React.createElement('li', {}, interest))
})
let ul = React.createElement('ul', {className: 'my-interests'}, listItems)
let meInReact = React.createElement('div', {className: 'me'}, [h1, p, ul])



ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
