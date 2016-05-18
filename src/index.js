import React  from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Router, browserHistory, IndexRoute } from 'react-router';

import counter from './reducers/counter';
import Challenges from './containers/challenges/challenges';
import Main from './containers/main/main';
import Home from './containers/home/home';
import Results from './containers/results/results';
import Profile from './containers/profile/profile';
import Share from './containers/share/share';

import { increment, decrement } from './actions/actionsCounter';

var store = createStore(counter);
store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const ask = () => {
    //TODO: leave action from challenges
    //if (confirm('Для достижения результата нужно завершить тестирование. Уйти?')) {
    //    console.log('true');
    //} else {
    //    console.log('false');
    //}
};

render(<Router history={browserHistory}>
    <Router path="/" component={Main}/>
    <Router path="home" component={Home}>
        <IndexRoute component={Results} />
        <Router path="/profile/:user" component={Profile}/>
        <Router path="/challenges" component={Challenges} onLeave={ask}/>
        <Router path="/results" component={Results}/>
        <Router path="/share" component={Share}/>
    </Router>
</Router>
,document.getElementById('app'));

//TODO: redux dev-tools
//if (process.env.NODE_ENV !== 'production') {
//    const showDevTools = require('./utils/showDevTools');
//    showDevTools(store);
//}