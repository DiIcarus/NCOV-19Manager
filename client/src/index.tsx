import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import store from './store';
import { Provider } from "react-redux";

const Root = ():any =>{
	return (
	<Provider store={store}>
		<App />
	</Provider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
