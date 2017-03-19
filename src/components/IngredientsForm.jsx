import React from 'react';
import request from 'superagent';
import DisplayResponse from './DisplayResponse.jsx';
import ReactDOM from 'react-dom';

export default class IngredientsForm extends React.Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <form id="ingredients_form">
              <label>
                Name:
                <input type="text" name="Ingredient" />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>);
  }
  componentDidMount() {
    this.setSubmitFormAction();
  }
  setSubmitFormAction() {
    // render the buy button with jQuery
    $('#ingredients_form').submit(function(ev) {
      ev.preventDefault(); // to stop the form from submitting
      /* Validations go here */
      request.post('https://foodup-backend.herokuapp.com/recipes/search')
        .send({"ingredients": ["chicken", "spinach"]})
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, res) => {
          if (res && res.status === 200) {
            console.log(res.body[0])
            ReactDOM.render(<DisplayResponse  
              name={res.body[0].name}
              link={res.body[0].link}
              time={res.body[0].time}
              ingredients={res.body[0].ingredients}/>, 
            document.getElementById('DisplayResponse'));
          }
        });
    });
  }
}

// link time serves name ingredients

