import React, { Component } from 'react';
import classNames from 'classnames';

export default class Tooltip extends Component {
    constructor(props) {
        super(props);
    }

    show() {
        this.refs.container.classList.add('tooltip_visible');
    }

    hide() {
        this.refs.container.classList.remove('tooltip_visible');
    }

    render() {
        return (
            <div className={classNames('tooltip', {'tooltip_visible': this.props.isVisible})} ref={(c) => this.container = c}>
                {this.props.children}
            </div>
        )
    }
}
