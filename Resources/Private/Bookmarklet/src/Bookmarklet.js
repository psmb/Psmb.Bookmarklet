import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {$get, $transform} from 'plow-js';
import {Icon} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';

@connect($transform({
    workspaceName: $get('cr.workspaces.personalWorkspace.name')
}))
export default class Bookmarklet extends Component {
    static propTypes = {
        workspaceName: PropTypes.string.isRequired
    };

    render() {
        const link = `javascript:(function()%7Bwindow.location %3D '%2Fneos!%3Fnode%3D' %2B document.querySelector('%5Bdata-neos-node%5D').dataset.neosNode.replace('%40live'%2C '%40${this.props.workspaceName}')%7D)()`;
        return (
            <div style={{display: 'inline-block', marginTop: '9px'}}>
                <a
                    title="Drag this link to the browser toolbar to open current page in backend in one click"
                    href={link}
                    title="Neos">
                    <Icon icon="neos" size="1x" />
                    <span style={{display: 'none'}}>Neos</span>
                </a>
            </div>
        );
    }
}
