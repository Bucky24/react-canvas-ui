import React from 'react';
import { CanvasComponent, Rect } from '@bucky24/react-canvas';
import { PositionContext } from './PositionContext';

class Button extends CanvasComponent {
    render() {
        const { x, y } = this.props;

        return <PositionContext.Consumer>
            {({ parentX, parentY }) => {
                return <Rect
                    x={x + parentX}
                    y={y + parentY}
                    x2={x + parentX + 100}
                    y2={y + parentY + 100}
                    color="#f00"
                    fill
                />
            }}
        </PositionContext.Consumer>
    }
}

export default Button;
