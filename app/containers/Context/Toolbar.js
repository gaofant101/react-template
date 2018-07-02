import React from 'react';
import PropTypes from 'prop-types';
import ThemedButton from './ThemedButton';

const Toolbar = (props) => (
    <div>
        <ThemedButton onClick={props.changeTheme} />
    </div>
);

Toolbar.propTypes = {
    changeTheme: PropTypes.func,
};

export default Toolbar;
