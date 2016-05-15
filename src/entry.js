import React  from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute } from 'react-router';

import Challenges from './containers/challenges/challenges';
import Main from './containers/main/main';
import Home from './containers/home/home';
import Results from './containers/results/results';
import Profile from './containers/profile/profile';
import Share from './containers/share/share';

render(
    <Router history={browserHistory}>
        <Router path="/" component={Main}/>
        <Router path="home" component={Home}>
            <IndexRoute component={Results} />
            <Router path="/profile/:user" component={Profile}/>
            <Router path="/challenges" component={Challenges}/>
            <Router path="/results" component={Results}/>
            <Router path="/share" component={Share}/>
        </Router>
    </Router>
,document.getElementById('app'));
