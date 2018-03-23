import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

console.log(`API_KEY ${process.env.API_KEY}`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router>
			<Root store={store} />
		</Router>,
		document.getElementById('root'),
	);
});
