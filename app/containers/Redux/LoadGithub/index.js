import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadGitAction } from './actions';

class LoadGithub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }
    componentWillMount() {
        // componentWillMount
        // this.props.onLoadGit();
    }
    componentDidMount() {
        // componentDidMount
    }
    onload = () => {
        this.props.onLoadGit();
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.onload}>load</button>
                <ul>
                    {
                        this.props.GitHubData.map((item, index) =>
                            <li key={index.toString()}>{item.description}</li>
                        )
                    }
                </ul>
            </Fragment>
        );
    }
}

LoadGithub.propTypes = {
    GitHubData: PropTypes.array,
    onLoadGit: PropTypes.func,
};

const mapStateToProps = (state) => ({
    GitHubData: state.loadGit.GitHubData,
});

const username = 'user github name';
const mapDispatchToProps = (dispatch) => ({
    onLoadGit: () => {
        dispatch(loadGitAction(username));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoadGithub);
