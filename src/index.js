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
import styles from './index.css';
import Share from './containers/share/share';

const store = configureStore();

const ask = () => {
    //TODO: leave action from challenges
    //if (confirm('Для достижения результата нужно завершить тестирование. Уйти?')) {
    //    console.log('true');
    //} else {
    //    console.log('false');
    //}
};

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Router path="/" component={Main}/>
        <Router path="auth" component={Auth}/>
        <Router path="home" component={Home}>
            <IndexRoute component={Results} />
            <Router path="/profile" component={Profile}/>
            <Router path="/challenges" component={Challenges} onLeave={ask}/>
            <Router path="/results" component={Results}/>
            <Router path="/share" component={Share}/>
        </Router>
    </Router>
</Provider>
,document.getElementById('app'));
