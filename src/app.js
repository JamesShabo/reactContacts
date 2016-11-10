import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ContactList from 'Components/contactList'


require('assets/styles/style.css')

// UI components
import Home from 'ui/home'
import Contact from 'Components/Contacts.js'

ReactDOM.render((
 <Router history={hashHistory}>
 	<Route component={Home} />
 		<Route path ="/" component={ContactList} />
 		<Route path ="contact/:id" component={Contact} />
 	</Router>
), document.getElementById('app'));


