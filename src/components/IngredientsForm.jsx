import React from 'react';
import request from 'superagent';

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
    this.renderBuyButton();
  }
  renderBuyButton() {
    // render the buy button with jQuery
    $('#ingredients_form').submit(function(ev) {
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
  }
}



