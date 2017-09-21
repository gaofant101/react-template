import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

class DataList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                当前计数为: {this.props.number}
                <ul className={styles.list}>
                    {
                        this.props.datalist.map((item, index) =>
                            <li key={`${item.id} ${index}`}>
                                <a href={`${item.link}`} target="_blank">{item.text}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

DataList.propTypes = {
    datalist: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            text: React.PropTypes.string,
        })
    ),
    number: React.PropTypes.number,
};

const mapStateToProps = (state) => ({
    number: state.getDataList.number,
    datalist: state.getDataList.datalist,
});

export default connect(
    mapStateToProps,
)(DataList);
