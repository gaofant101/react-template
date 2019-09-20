import { connect } from 'react-redux';

import Menu from './component';

const mapstateToProps = (state) => ({
    open: state.drawer.open,
});

export default connect(
    mapstateToProps,
    null,
)(Menu);
