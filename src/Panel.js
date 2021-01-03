import React from 'react';
import PositionProvider from './PositionContext';

const Panel = ({ x, y, children }) => {
    return <>
        <PositionProvider x={x} y={y}>
            { children }
        </PositionProvider>
    </>;
}

export default Panel;
