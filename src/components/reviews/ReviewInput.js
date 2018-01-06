import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    content: ''
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurantId: this.props.id,
      review: this.state.content
    });
    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.content}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} id={this.props.id} />
      </div>
    );
  }
}

export default ReviewInput;
