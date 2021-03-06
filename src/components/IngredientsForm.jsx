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
                <input id="ingredients" type="search" name="Ingredient" placeholder="Enter Ingredients" size="70" style={{padding: '6px', fontSize: '18px', borderRadius: '5px 0px 0px 5px'}} />
              </label>
              <input type="submit" value="Submit" className = {'btn','btn-primary'} style={{padding: '6px', fontSize: '18px'}}/>
              <input type="button" value="Clear" className = {'btn', 'clear_btn'} style={{padding: '6px', fontSize: '18px', borderRadius: '0px 5px 5px 0px'}}/>
            </form>
            <div className = {'loader'}></div>
        </div>);
  }
  componentDidMount() {
    this.setSubmitFormAction();
  }

  setSubmitFormAction() {
   // render the button with jQuery
    $('.clear_btn').click(function(ev) {
      $('#DisplayResponse').empty();
    });

    // render the button with jQuery
    $('#ingredients_form').on('submit', function(ev) {
      $('#DisplayResponse').empty();
      $('.loader').css('visibility', 'visible');
      $('.loader').css('display', 'block');
      ev.preventDefault(); // to stop the form from submitting
      var ingredients = $('#ingredients').val().split(/[\s,]+/);
      var jsonData = {};
      jsonData["ingredients"]= ingredients;

      /* Validations go here */
      request.post('https://foodup-backend.herokuapp.com/recipes/search') 
        .send(jsonData)
        .set('Accept', 'application/json')
        .type('application/json')
        .end((err, res) => {
          if (res && res.status === 200) {
            console.log(res.body);
            $('.loader').css('visibility', 'hidden');
            $('.loader').css('display', 'none');
            ReactDOM.render(<DisplayResponse recipes={res.body}/>, document.getElementById('DisplayResponse'));
          }
        });
    });
  }
}

