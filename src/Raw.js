import React from 'react';
import { CanvasComponent } from '@bucky24/react-canvas';
import { PositionContext, convertCoords, convertDims, PositionProps } from './PositionContext';

const propTypes = {
    ...PositionProps,
};

class Raw extends CanvasComponent {
    render() {
        const { x, y, width, height, children, noDims } = this.props;

        return <PositionContext.Consumer>
            {({ parentX, parentY, parentWidth, parentHeight }) => {
                const [ realWidth, realHeight ] = convertDims(width, height, parentWidth, parentHeight);
                const [ realX, realY ] = convertCoords(x, y, realWidth, realHeight, parentX, parentY);

				const props = children.props || {};
				const newProps = {
                    ...props,
                    x: realX,
                    y: realY,
                };
                
                if (noDims) {
                    newProps.x2 = realX + realWidth;
                    newProps.y2 = realY + realHeight;
                } else {
                    newProps.width = realWidth;
                    newProps.height = realHeight;
                }
				return React.cloneElement(children, newProps);
            }}
        </PositionContext.Consumer>
    }
}

export default Raw;

Raw.propTypes = propTypes;
