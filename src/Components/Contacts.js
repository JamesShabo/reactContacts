import React from 'react';
import contacts from '../contacts.json';

import 'font-awesome/css/font-awesome.css'

export default React.createClass({

	  render: function() {
	  	return (
				<div>
					<h1>Contact</h1>
	     			{contacts.filter((contact) => {
	     				return contact.id.value === Number(this.props.params.id);
	     				}).map(function(first){
	     		  		return (<div key={first.id.value}> 
	     		  			<i className="fa fa-user" /><div className="firstName">{first.name.first} {first.name.last}</div>
	     		  											  <i className="fa fa-phone"/> <div className="phone">{first.phone}</div> 
	     		  											  <i className="fa fa-envelope" /> <div className="email">{first.email}</div>
	     		  											<i className="fa fa-globe" /><div className="location">{first.location.city},{first.location.state}</div>

	     		  		 </div>)
	     			})}
			  </div>
     )
  }
});