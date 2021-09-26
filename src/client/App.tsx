import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './views/Books';
import Home from './views/Home';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/books">
					<Books />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
