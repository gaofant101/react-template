import React from 'react';
import { connect } from 'react-redux';

import { getdata, cleardata } from './action';
import styles from './style.css';

class GetAsyncData extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <button className={styles.databtn} onClick={() => this.props.getdata()}>加载数据</button>
                <button className={styles.databtn} onClick={() => this.props.cleardata()}>清楚数据</button>
                <ul className={styles.list}>
                    {
                        this.props.asyncdata.map((item, index) =>
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

GetAsyncData.propTypes = {
    asyncdata: React.PropTypes.array,
    getdata: React.PropTypes.func,
    cleardata: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
    asyncdata: state.getAsyncData.asyncdata,
});

export const mapDispatchToProps = (dispatch) => ({
    getdata: () => {
        setTimeout(() => {
            const data = [
                {
                    id: 0,
                    text: 'react',
                    link: 'https://facebook.github.io/react/',
                },
                {
                    id: 1,
                    text: 'react-router',
                    link: 'https://react-guide.github.io/react-router-cn/docs/Introduction.html',
                },
                {
                    id: 2,
                    text: 'Ant Design',
                    link: 'https://design.alipay.com/',
                },
                {
                    id: 3,
                    text: 'ECMAScript 6',
                    link: 'http://es6.ruanyifeng.com/',
                },
                {
                    id: 4,
                    text: 'webpack ',
                    link: 'https://doc.webpack-china.org/',
                },
            ];
            dispatch(getdata(data));
        }, 200);
    },
    cleardata: () => {
        dispatch(cleardata());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GetAsyncData);
