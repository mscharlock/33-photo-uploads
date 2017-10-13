import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import {BrowserRouter, Route} from 'react-router-dom';
import SettingsContainer from '../settings-container';
// import appStoreCreate from '../../lib/app-create-store';
import DashboardContainer from '../dashboard-container';

class App extends React.Component {
  componentDidMount() {
    let token = utils.cookieFetch('X-Sluggram-Token');
    if (token) this.props.tokenSet(token);
  }

  render() {
    return (
      <div className="application">
          <BrowserRouter>
            <div>
              <Navbar />
                <Route path="/welcome/:auth" component={LandingContainer}/>
                <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <redirect to="/" />}/>
                <Route exact path="/" component={()=> this.props.auth ? <DashboardContainer/> : <redirect to="/"/>}/>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
