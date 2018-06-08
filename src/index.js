import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Transposer from './components/transposer';

ReactDOM.render(<Transposer/>, document.getElementById('root'));
registerServiceWorker();
