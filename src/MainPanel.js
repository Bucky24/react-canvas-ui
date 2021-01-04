import React from 'react';
import PropTypes from 'prop-types';
import { PositionProps } from './PositionContext';
import Panel from './Panel';

const propTypes = {
    width: PositionProps.width.isRequired,
    height: PositionProps.height.isRequired,
    debug: PropTypes.bool,
};

const MainPanel = ({ width, height, children, ...rest }) => {
    return <Panel x={0} y={0} width={width} height={height} {...rest}>
        { children }
    </Panel>;
}

export default MainPanel;

MainPanel.propTypes = propTypes;
