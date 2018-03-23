
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import DevTools from './DevTools';

import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';

const Root = ({ store }) => (
	<Provider store={store}>
		<div>		{/* comment */}
			<Switch>
				<Route path="/" component={App} />
				<Route component={NotFoundPage} />
			</Switch>
			<div className="devtools">
				<DevTools />
			</div>
		</div>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;

/*
<Route path="/:login/:name" component={RepoPage} />
<Route path="/:login" component={UserPage} />
*/
