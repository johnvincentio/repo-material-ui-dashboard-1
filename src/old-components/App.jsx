
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

import * as actions from '../actions/';

import Gallery from './gallery';

const data = [
	{ id: 0, url: 'https://www.johnvincent.io/internet-resources/resources/images/logos/react.ico', description: 'React' },
	{ id: 1, url: 'https://www.johnvincent.io/internet-resources/resources/images/logos/babel.ico', description: 'Babel' },
	{ id: 2, url: 'https://www.johnvincent.io/internet-resources/resources/images/logos/webpack.ico', description: 'Webpack' },
];
// const message = require('./message');
// document.write(message.sayHello());

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('>>> App; constructor');
		console.log(props);
		console.log('<<< App; constructor');
	}

	componentDidMount() {
		console.log('>>> App; componentDidMount');
		this.props.actions.getUserData();
		console.log('<<< App; componentDidMount');
	}

	render() {
		return (
			<Gallery images={data} />
		);
	}
}

App.propTypes = {
	actions: PropTypes.shape({
		getUserData: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	data: state.dataReducer.data,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
