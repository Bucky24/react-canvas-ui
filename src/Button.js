import React from 'react';
import { CanvasComponent, Rect } from '@bucky24/react-canvas';
import { PositionContext, convertCoords, convertDims, PositionProps } from './PositionContext';

const propTypes = {
    ...PositionProps,
};

class Button extends CanvasComponent {
    render() {
        const { x, y, width, height } = this.props;

        return <PositionContext.Consumer>
            {({ parentX, parentY, parentWidth, parentHeight }) => {
                const [ realWidth, realHeight ] = convertDims(width, height, parentWidth, parentHeight);
                const [ realX, realY ] = convertCoords(x, y, realWidth, realHeight, parentX, parentY);

                return <Rect
                    x={realX}
                    y={realY}
                    x2={realX + realWidth}
                    y2={realY + realHeight}
                    color="#f00"
                    fill
                />
            }}
        </PositionContext.Consumer>
    }
}

export default Button;

Button.propTypes = propTypes;
