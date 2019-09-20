import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import debounce from 'lodash/debounce';

const GoLogin = React.forwardRef((props, ref) => <Link innerRef={ref} to="/login" {...props} />);

const Help = () => {
    const [count, setCount] = useState(0);
    const increment = debounce(() => {
        setCount(count + 1);
    }, 2000);

    return (
        <div>
            <Link to="/help">测试</Link>
            Now: Count {count}
            <button type="button" onClick={increment}>
                increment
            </button>
            <Button component={GoLogin}>登录</Button>
        </div>
    );
};

export default Help;
