import React, { Component } from 'react';
import Style from './errorCard.module.css'
class errorCard extends Component {
    render() {
        return (
            <div className={Style.error}>
                {this.props.children}
            </div>
        );
    }
}

export default errorCard;