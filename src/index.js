import React from 'react';
import ReactDOM from 'react-dom';

// components

// 1. Create a component similar to the Hello World
function JSXExercises ()
{
  return (
    <>
      <div>JSX Exercises</div>
      <hr />
      <br />
      <RenderJSX />
      <TheLongWay />
    </>
  );
}

// 2. Create a component that renders JSX
function RenderJSX ()
{
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
    </div>
  );
}

// 3. Create a of exercise 1. component but replace JSX with calls to React.creatElement
// NOTE: The output should be identical
function TheLongWay ()
{
  return React.createElement(
    'span',
    {},
    <hr />,
    <p>JSX Exercises - The Long Way</p>,
    <p>Example of the above code in the backend:</p>,
    <pre>{ `
    function TheLongWay(),
    {
      return React.createElement(
        'span',
        {},
        <hr />,
        'JSX Exercises - The Long Way'
      );
    }
    `}</pre>,
    <p>We call this in our main function that we render to the dom like so:</p>,
    <pre>{ `
    function JSXExercises ()
    {
      return (
        <>
          <div>JSX Exercises</div>
          <hr />
          <br />
          <RenderJSX />        // Renders our book club details
          <TheLongWay />       // renders the above function example
        </>
      );
    }
    ` }</pre>,
    <hr />,
  );
}

ReactDOM.render(
  <JSXExercises />,
  document.querySelector( '#root' )
);
