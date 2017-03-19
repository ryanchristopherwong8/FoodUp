import React from 'react';

export default class DisplayResponse extends React.Component {

  render() {
    return (
        <div className={'container-fluid'}>
          {this.props.recipes && this.props.recipes.map(function(object) {
            return (
              <div className={'container-fluid', 'recipe_block'}>
                <h2>{object.id}</h2>
                <div className={'col-md-8', 'text-center'}><h2 className={'recipe_heading'}>{object.name}</h2></div>
                <div className={'container-fluid'}>
                <div className={'col-md-6'}><img src={object.image} className={'img-responsive'} /></div>
                <div className={'col-md-6'}><h3>Time:</h3>{object.time}</div>
                <h3>Ingredients</h3>
                <ul style={{listStyle: 'none'}} className = {'list-group'}>
                    {object.ingredients}
                </ul>
                <a href={object.link} className={'btn btn-default btn-lg active'} role="button">Click here to get recipe instructions</a>
              </div>
              </div>
            );
          })}
        </div>);
  }
}

