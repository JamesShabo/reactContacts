import React from 'react';
import {Link} from 'react-router';
import { getContacts } from 'api/contacts'


export default React.createClass({
		render: function(){
		  	var getContacts = contacts.map(function(person){
		  		return <li key={person.id.value}><Link to={'db'+person.id.value}>{person.name.first + " " + person.name.last}</Link></li>
		  	});

	    return (
			<div>
		     <h1>Contacts</h1>
		     <ul className="contacts">{getContacts}</ul>
	     </div>
	     )
		}
});
	
  
