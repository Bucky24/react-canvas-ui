import React from 'react';
import PropTypes from 'prop-types';

export const PositionProps = {
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

const convertDim = (dim, parentDim) => {
    if (dim === undefined || dim === null) {
        return 0;
    }

    if (typeof dim === "number") {
        return dim;
    } else {
        if (dim.endsWith("%")) {
            const intPart = dim.substr(0,dim.length-1);
            const percentNum = parseInt(intPart);
            if (Number.isNaN(percentNum)) {
                console.error(`Percentage dimension expected number, got "${intPart}"`);
            } else {
                return parentDim * (percentNum / 100);
            }
        }
    }

    console.error(`Unexpected or malformed dimension input "${dim}", defaulting to zero`)

    return 0;
}

export const convertDims = (width, height, parentWidth, parentHeight) => {
    let resultWidth = convertDim(width, parentWidth);
    let resultHeight = convertDim(height, parentHeight);

    return [resultWidth, resultHeight];
}

export const convertCoords = (x, y, width, height, parentX, parentY, parentWidth, parentHeight) => {
    const [realWidth, realHeight] = convertDims(width, height, parentWidth, parentHeight);

    return [x + parentX, y + parentY];
}

export const PositionContext = React.createContext({});

const propTypes = {
    ...PositionProps,
};

class PositionProvider extends React.Component {
    render() {
        const { x, y, width, height } = this.props;
        return (
            <PositionContext.Consumer>
                {({ parentX, parentY, parentWidth, parentHeight }) => {
                    const [ realWidth, realHeight ] = convertDims(width, height, parentWidth, parentHeight);
                    const [ realX, realY ] = convertCoords(x, y, realWidth, realHeight, parentX, parentY);

                    return <PositionContext.Provider
                        value={{
                            parentX: (realX || 0),
                            parentY: (realY || 0),
                            parentWidth: realWidth,
                            parentHeight: realHeight,
                        }}
                    >
                        { this.props.children }
                    </PositionContext.Provider>
                }}
            </PositionContext.Consumer>

        )
    }
}

export default PositionProvider;

PositionProvider.propTypes = propTypes;
