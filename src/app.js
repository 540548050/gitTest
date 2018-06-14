import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss';
let Test = ()=>{
	return (
		<div>
			<h1>Test</h1>
		</div>
	)
}
ReactDOM.render(<Test />,document.getElementById('app'))
