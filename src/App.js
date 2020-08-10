import React from "react";
import Profile from "./components/profile";
import Login from './components/auth/login';
import Register from './components/auth/register.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/routecustom/private'
import Index from './components/index';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={Index} />
					<Route exact path="/login" component={Login} />
					
				</Switch>
			</Router>
		</div>
	);
}

export default App;
