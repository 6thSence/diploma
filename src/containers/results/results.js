import React from 'react';
import { connect } from 'react-redux'

import styles from './results.css';

const Results = React.createClass({

    render() {
        const { user } = this.props;
        return (
            <div className={styles.results}>
                <h1 className={styles.title}>Оплата</h1>
        <iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/quickpay/shop-widget?account=410014724351293&quickpay=shop&payment-type-choice=on&mobile-payment-type-choice=on&writer=seller&targets=+%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0+%D0%B7%D0%B0+%D0%BC%D0%B5%D1%81%D1%8F%D1%86+%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F&default-sum=15000&button-text=01&fio=on&mail=on&successURL=" width="450" height="198"></iframe>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Results);

