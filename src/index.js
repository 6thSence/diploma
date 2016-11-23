import React  from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Auth from './containers/auth/auth';
import Challenges from './containers/challenges/challenges';
import configureStore from './store/configureStore';
import Main from './containers/main/main';
import Home from './containers/home/home';
import Results from './containers/results/results';
import Profile from './containers/profile/profile';
import Share from './containers/share/share';

import './styles/index.css';
import './styles/fonts.css';

const store = configureStore();

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Router path="/" component={Main}/>
        <Router path="auth" component={Auth}/>
        <Router path="home" component={Home}>
            <IndexRoute component={Challenges} />
            <Router path="/profile" component={Profile}/>
            <Router path="/challenges" component={Challenges}/>
            <Router path="/results" component={Results}/>
            <Router path="/share" component={Share}/>
        </Router>
    </Router>
</Provider>
,document.getElementById('app'));
