import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

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
      <ValidIndicator />
      <Greeting />
      <Table />
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

// Ternary operators example:
function ValidIndicator ()
{
  const isValid = true;
  return (
    <span>
      {isValid ? 'valid' : 'not valid' }
      <hr />
    </span>
  );
}

// 4. Create a component that renders 'Hello, {username} if the username is a string
// if the username is not a string output 'Not Logged In..'
function Greeting ()
{
  // Try all of these variations
  let username = "gunnerjnr";
  //let username = undefined;
  //let username = null;
  //let username = false;

  // Fill in the rest:
  return (
    <span>
      {username ? 'Hello, ' + username : 'Not Logged In...' }
      <hr />
    </span>
  );
}

/*
 *5. One good way to learn a new syntax is to try breaking it – discover its boundaries. Try some of the things this chapter warned about and see what kind of errors you get.
 * At the very least, it’ll familiarize you with what the errors mean if you make one of these mistakes later on.
* a. Name a component starting with a lowercase letter, like “testComponent”.
* b. Try returning 2 elements at once
* c. Try returning an array with 2 elements inside
* d. Can you put 2 expressions inside single braces, like {x && 5; x && 7}?
* e. What happens if you use return inside a JS expression?
* f. What about a function call like alert('hi')? Does it halt rendering?
* g. Try putting a quoted string inside JSX. Does it strip out the quotes?
 */

/*
  * 6. The HTML spec says that tables must be structured with a table element surrounding a tbody, which surrounds multiple trs( the rows ),
  * which each surround multiple tds( the columns ).
  * Create a component called Table that renders a table with 1 row and 3 columns and any data you like.
  * Open the browser console and make sure there are no warnings.
  */
function Table ()
{
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name:</th>
          <th>Last Name:</th>
          <th>Age:</th>
        </tr>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
}

/*
 * 6. Then, create a component called Data that renders the 3 columns, and replace the 3 < td > s with the < Data /> component.
 */
function Data ()
{
  return (
    <>
      <td>David</td>
      <td>Gunner</td>
      <td>36</td>
    </>
  );
}

ReactDOM.render(
  <JSXExercises />,
  document.querySelector( '#root' )
);
