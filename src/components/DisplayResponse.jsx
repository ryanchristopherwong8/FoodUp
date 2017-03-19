import React from 'react';

export default class DisplayResponse extends React.Component {

  render() {
    return (
        <div className={'col-md-8'}>
          {this.props.recipes && this.props.recipes.map(function(object) {
            return (
              <div>
                <h2>{object.id}</h2>
                <h2>{object.name}</h2>
                <img src={object.image} className={'col-md-6'} style={{display: 'block', width: '500px'}}/>
                <span><h4>Time:</h4></span><div>{object.time}</div>
                <h4>Ingredients</h4>
                <ul style={{listStyle: 'none'}} className = {'list-group'}>
                    {object.ingredients}
                </ul>
              </div>
            );
          })}
        </div>);
  }
}

