import React from 'react';
import client from './basic/client';

class Header extends React.Component {
	
	const MenuItem = ({active, children, to}) => (
	    <div className="menu-item">
	    	{children}
	    </div>
	)

	const Header = () => {
	    return (
	        <div>
	            <div className="logo">
	                velopert
	            </div>
	            <div className="menu">
	                <MenuItem>홈</MenuItem>
	                <MenuItem>소개</MenuItem>
	                <MenuItem>포스트</MenuItem>
	            </div>
	        </div>
	    );
	};

	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="/">ReactProject</a>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav">
		            <li className="active"><a href="/">Home</a></li>
		            <li><a href="/pageMove/contact">Contact</a></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}
}

export default Header;