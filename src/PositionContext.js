import React from 'react';

export const PositionContext = React.createContext({});

class PositionProvider extends React.Component {
    render() {
        const { x, y } = this.props;
        return (
            <PositionContext.Consumer>
                {({ parentX, parentY }) => {

                    return <PositionContext.Provider
                        value={{
                            parentX: (x || 0) + (parentX || 0),
                            parentY: (y || 0) + (parentY || 0),
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
