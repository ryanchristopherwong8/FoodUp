import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import IngredientsForm from './components/IngredientsForm.jsx';
import DisplayResponse from './components/DisplayResponse.jsx';
import request from 'superagent';

// this renders it to div element root

 ReactDOM.render(<App />, document.getElementById('root'));
 ReactDOM.render(<IngredientsForm />, document.getElementById('IngredientsForm'));
 ReactDOM.render(<DisplayResponse />, document.getElementById('DisplayResponse'));

