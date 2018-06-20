import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch,NavLink} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Home from 'pages/home';
class App extends Component{
	render(){
		return(
			<Router>
				<Route exact path='/' component={Home} />
			</Router>
		)
	}
}
ReactDOM.render(<App />,document.getElementById('app'))
