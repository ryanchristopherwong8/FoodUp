import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import IngredientsForm from './components/IngredientsForm.jsx';
import request from 'superagent';

// this renders it to div element root
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<IngredientsForm />, document.getElementById('IngredientsForm'));

$('#hello-world').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submitting
    /* Validations go here */
    request.get('https://foodup-backend.herokuapp.com/recipes')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (res && res.status === 200) {
          console.log(res.body);
        }
      });
});

