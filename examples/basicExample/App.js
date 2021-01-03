import React from 'react';
import { Canvas, Text } from '@bucky24/react-canvas';
import { Panel, Button } from '@bucky24/react-canvas-ui';

function App() {
    const width = 500;
    const height = 400;
	
    return (<div>
        <Canvas
            width={width}
            height={height}
        >
            <Panel x={50} y={50}>
                <Panel x={25} y={0}>
                    <Button x={25} y={0}>
                        <Text>Foo</Text>
                    </Button>
                </Panel>
            </Panel>
        </Canvas>
    </div>);
}

export default App;