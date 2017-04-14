import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Content from './components/Content';
import Contacts from './components/Contacts';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Content}/>
			<Route path="contacts" component={Contacts}/>
		</Route>
	</Router>,
	rootElement
);
