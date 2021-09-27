import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookDetails from './views/BookDetails';
import Books from './views/Books';
import EditDetails from './views/EditDetails';
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
				<Route exact path="/books/:id">
					<BookDetails />
				</Route>
				<Route exact path="/edit/:id">
					<EditDetails />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
