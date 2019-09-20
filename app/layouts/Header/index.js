import { connect } from 'react-redux';
import { drawerOpenAction, drawerCloseAction } from '@layouts/Menu/action';
import PrimaryAppBar from './component';

const mapStateToProps = (state) => ({
    open: state.drawer.open,
});

const mapDispatchToProps = (dispatch) => ({
    drawerOpen: () => dispatch(drawerOpenAction()),
    drawerClose: () => dispatch(drawerCloseAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PrimaryAppBar);
