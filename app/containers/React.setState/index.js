/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import styles from './style.css';

export default class ReactSetState extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            list: ['State.', 'Should.', 'Be.', 'Synchronous.'],
            selection: '',
        };
    }
    componentWillMount() {
        this.setState({
            num: this.state.num + 1,
        });
        console.log(this.state.num);
        this.setState({
            num: this.state.num + 1,
        });
        console.log(this.state.num);
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1,
            });
            console.log(this.state.num);
        });
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1,
            });
            console.log(this.state.num);
        });
        this.setState({
            selection: this.state.list[0],
        });
    }
    componentDidMount() {
        // 1
    }
    onKeyDown = (e) => {
        const idx = 1;
        if (e.keyCode === 38 && idx > 0) {
            console.log(e);
        }
    }
    onSelect = (item) => {
        this.setState({
            selection: item,
        });
        console.log(this.state.selection);
    }
    render() {
        const list = this.state.list;
        return (
            <div className={styles.box}>
                {/* eslint-disable */}
                <ul onKeyDown={this.onKeyDown}>
                    {
                        list.map((item) => (
                            <li className={item === this.state.selection ? styles.selected : ''} key={item} onClick={() => this.onSelect(item)}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                {/* eslint-enable */}
            </div>
        );
    }
}
