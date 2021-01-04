import { Rect } from '@bucky24/react-canvas';
import React from 'react';
import PositionProvider, { PositionProps } from './PositionContext';
import Raw from './Raw';

const propTypes = {
    ...PositionProps,
};

const Panel = ({ x, y, width, height, children, debug }) => {
    return <>
        <PositionProvider x={x} y={y} width={width} height={height}>
            {debug && <Raw x={0} y={0} width="100%" height="100%" noDims>
                <Rect color="#0f0" fill={false} />
            </Raw>}
            { children }
        </PositionProvider>
    </>;
}

export default Panel;

Panel.propTypes = propTypes;
