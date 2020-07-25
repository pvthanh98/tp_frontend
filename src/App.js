import React from "react";
import Profile from "./components/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
                    <Route exact path="/">
                        <Profile />
                    </Route>
                    <Route exact path="/about">
                        <Profile />
                    </Route>
                    <Route><h3>Không tìm thấy trang</h3></Route>
                </Switch>
			</Router>
		</div>
	);
}

export default App;
