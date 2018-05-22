import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);
class SnackList extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div>
<h3>List of Snacks</h3>
<ul>
{
    this.props.reduxState.firstReducer.map((snack, i) => <li key={i}>
{snack}</li>
)
}
</ul>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(SnackList);