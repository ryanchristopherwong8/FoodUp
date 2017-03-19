import React from 'react';

export default class IngredientsForm extends React.Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <form id="hello-world">
              <label>
                Name:
                <input type="text" name="Ingredient" />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>);
  }
}