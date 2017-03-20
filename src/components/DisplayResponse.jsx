import React from 'react';

export default class DisplayResponse extends React.Component {
  render() {
    return (
        <div className={'container-fluid'}>
          {this.props.recipes && this.props.recipes.map(function(object) {
          var ingredients = [];
        for (var i = 0; i < object.ingredients.length; i++) {
          ingredients.push(object.ingredients[i] && <li>{object.ingredients[i]}</li>)
        }
          return (
            <div className={'container-fluid recipe_block'}>
              <h2>{object.id}</h2>
              <div className={'text-center'}>
                <h2 className={'recipe_heading'}>{object.name}</h2>
              </div>
              <div className={'container-fluid'}>
                <div className={'col-md-6'}>
                  <img src={object.image} className={'img-responsive recipe_img'} />
                </div>
                <div className={'col-md-6'}>
                  <h3>Time: {object.time}</h3>
                  <h3>Ingredients</h3>
                  <ul className = {'list-group ingredients_list'}>
                      {ingredients}
                  </ul>
                  <a href={object.link} className={'btn btn-default btn-warning btn-lg active recipe-btn'} role="button">Click here to get recipe instructions</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>);
  }
}

