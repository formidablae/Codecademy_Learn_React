import React from 'react';
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
    render() {
        return (
            <li>
                Title: <span>
                    {this.props.title}
                </span><br />

                Author: <span>
                    {this.props.author}
                </span><br />

                Weeks: <span>
                    {this.props.weeksOnList}
                </span>
            </li>
        );
    }
}

BestSeller.propTypes = {};
