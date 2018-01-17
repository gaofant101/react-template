import React, { Component } from 'react';
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
        this.props.onLoadGit();
    }
    componentDidMount() {
        // componentDidMount
    }
    render() {
        return (
            <ul>
                {
                    this.props.GitHubData.map((item, index) =>
                        <li key={index.toString()}>{item.description}</li>
                    )
                }
            </ul>
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

const mapDispatchToProps = (dispatch) => ({
    onLoadGit: () => {
        dispatch(loadGitAction('evanhunt'));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoadGithub);
