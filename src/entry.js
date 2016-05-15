import React  from 'react';
import { render } from 'react-dom';
import Main from './containers/main/main';
import Challenges from './containers/challenges/challenges';
import { Router, browserHistory } from 'react-router';


render(
    <Router history={browserHistory}>
        <Router path="/" component={Main}/>
        <Router path="/challenges" component={Challenges}/>
    </Router>
,document.getElementById('app'));
