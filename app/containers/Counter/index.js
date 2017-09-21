import React from 'react';
import { connect } from 'react-redux';

import Counter from './counter';
import { increase, decrease } from './action';
import styles from './style.css';

class Counters extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={styles.number}>
                <p>当前值: {this.props.number}</p>
                <p>&nbsp;</p>
                <Counter increase={this.props.increase} decrease={this.props.decrease} />
            </div>
        );
    }
}

Counters.propTypes = {
    number: React.PropTypes.number,
    increase: React.PropTypes.func,
    decrease: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
    number: state.counter.number,
});

export default connect(
    mapStateToProps,
    { increase, decrease },
)(Counters);
