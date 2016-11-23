import React, { Component } from 'react';

const ResultTest = React.createClass({
    componentWillMount () {
        if (!this.props.iaAddResult) {
            this.props.addPoints();
        }
    },

    render() {
        const { userAnswers } = this.props;
        let countTrue = 0;
        userAnswers.forEach(item => item.answer && countTrue++);

        return (
            <div>
                <h2>Результат: {countTrue}/{userAnswers.length}</h2>
            </div>
        )
    }
});

export default ResultTest;