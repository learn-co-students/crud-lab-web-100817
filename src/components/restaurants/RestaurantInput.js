import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text:''
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type:"ADD_RESTAURANT", restaurant:{text: this.state.text}})
    this.setState({text:''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant</label> <br/>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
