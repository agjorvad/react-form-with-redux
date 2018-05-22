import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSnack: ''
    }
  }

  handleSnackChange = (event) => {
    this.setState({newSnack: event.target.value})
    console.log(this.state.newSnack);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      {type: 'SUBMIT', payload: this.state.newSnack}
    )
  }
  render() {
    return (
        <div>
<h3>Snacks</h3>
<form onSubmit={this.handleSubmit}>
<input onChange={this.handleSnackChange} value={this.state.newSnack} />
<input type="submit" value="Submit" />
</form>
      </div>
    );
  }
}

export default connect()(SnackForm);