import React from 'react';

export default class DisplayResponse extends React.Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
          <ul style={{listStyle: 'none'}}>
            {this.props.name && <li>{this.props.name}</li>}
            {this.props.link && <li>{this.props.link}</li>}
            {this.props.time && <li>{this.props.time}</li>}
            {this.props.ingredients && <li>{this.props.ingredients}</li>}
          </ul>
        </div>);
  }
}

//check if property exists, if so render list {this.props.name &&