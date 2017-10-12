import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';

class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <h2>hello world from the dashboard!</h2>
        <PhotoForm
          onComplete={this.props.photoCreate}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
