import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import primaryColor from '@material-ui/core/colors/teal';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import List from './List';
import Player from './Player';

import 'typeface-roboto'

const theme = createMuiTheme({
	palette: {
		primary: primaryColor,
		type: 'dark',
	},
});

function App(props) {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div>
					<Switch>
						<Route name="list" path="/list/**" component={List} />
						<Route name="play" path="/play/**" component={Player} />
						<Redirect to="/list/" />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
