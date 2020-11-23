import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends PureComponent {
  render() {
    if (this.props.userData) {
      return (
        <Route
          {...this.props}
          render={(params) => {
            return <this.props.component {...params} />;
          }}
        />
      );
    } else {
      return <Redirect to='/login' />;
    }
  }
}

const mapStateToProps = (state) => ({
  userData: state.loginUser,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
