import React from 'react';
import { Link } from 'react-router';
import ContactList from '../Components/contactList.js'

export default React.createClass({
  render: function() {
    return (
     	<div>
     		{this.props.children}
    	</div>
    )		
  }
});

		