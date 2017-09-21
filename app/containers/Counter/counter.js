import React from 'react';

import styles from './style.css';

function Counter(props) {
    const { increase, decrease } = props;
    return (
        <p>
            {' '}
            <button onClick={() => increase(1)} className={styles.countbtn}>+1 按钮</button>
            {' '}
            <button onClick={() => decrease(1)} className={styles.countbtn}>-1 按钮</button>
        </p>
    );
}

Counter.propTypes = {
    increase: React.PropTypes.func,
    decrease: React.PropTypes.func,
};

export default Counter;
