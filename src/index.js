import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from './TimersDashboard';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<TimersDashboard />, document.getElementById('content'));

registerServiceWorker();
