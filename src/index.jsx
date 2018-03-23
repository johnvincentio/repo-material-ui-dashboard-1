import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './components/material-dashboard-react.scss';

import indexRoutes from './routes/index';

const hist = createBrowserHistory();

console.log('***** in index.jsx');

// ReactDOM.render(
// 	<Router history={hist}>
// 		<Switch>
// 			{indexRoutes.map((prop, key) => (
// 				<Route path={prop.path} component={prop.component} key={key} />
// 			))}
// 		</Switch>
// 	</Router>,
// 	document.getElementById('root')
// );

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router history={hist}>
			<Switch>
				{indexRoutes.map((prop, key) => (
					<Route path={prop.path} component={prop.component} key={key} />
				))}
			</Switch>
		</Router>,
		document.getElementById('root')
	);
});
