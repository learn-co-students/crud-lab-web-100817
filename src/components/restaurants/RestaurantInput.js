import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state.text
    });
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={e => this.handleChange(e)}
            value={this.state.text}
            type="text"
          />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default RestaurantInput;
