// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  HashRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import ToolsHome from './Tools/Home';
import ToolsDelegations from './Tools/Delegations';
import ToolsAirgrabs from './Tools/Airgrabs';
import ToolsKeyGenerator from './Tools/KeyGenerator';
import ToolsKeyValidator from './Tools/KeyValidator';
import ToolsCustomTokens from './Tools/CustomTokens';
import ToolsPermissions from './Tools/Permissions';
import ToolsRecommendations from './Tools/Recommendations';
import ToolsSmartContracts from './Tools/SmartContracts';
import ToolsLedger from './Tools/Ledger';
import ToolsCrosschainTransfer from './Tools/CrosschainTransfer';

class ToolsContainer extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route exact path="/tools" component={ToolsHome} />
            <Route path="/tools/v1" component={Tools} />
            <Route path="/tools/delegations" component={ToolsDelegations} />
            <Route path="/tools/airgrabs" component={ToolsAirgrabs} />
            <Route path="/tools/key_generator" component={ToolsKeyGenerator} />
            <Route path="/tools/key_validator" component={ToolsKeyValidator} />
            <Route path="/tools/custom_tokens" component={ToolsCustomTokens} />
            <Route path="/tools/permissions" component={ToolsPermissions} />
            <Route path="/tools/recommendations" component={ToolsRecommendations} />
            <Route path="/tools/smart-contracts" component={ToolsSmartContracts} />
            <Route path="/tools/ledger" component={ToolsLedger} />
            <Route path="/tools/crosschain_transfer" component={ToolsCrosschainTransfer} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({

    }, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolsContainer));
