import React from 'react';

export default class DisplayResponse extends React.Component {
  render() {
    var ingredients = [];
    for (var i = 0; i < this.props.ingredients.length; i++) {
      ingredients.push(this.props.ingredients[i] && <li>{this.props.ingredients[i]}</li>)
    }
    return (
        <div className={'col-md-8'}>
        {this.props.name && <h2>{this.props.name}</h2>}
        {this.props.image && <img src={this.props.image} className={'col-md-6'} style={{display: 'block', width: '500px'}}/>}
        <span><h4>Time:</h4></span>{this.props.time && <div>{this.props.time}</div>}
        <h4>Ingredients</h4>
          <ul style={{listStyle: 'none'}} className = {'list-group'}>
            {ingredients}
          </ul>
        {this.props.link && <a href={this.props.link}>{this.props.link}</a>}
        </div>);
  }
}