import React from 'react';
import { Canvas, Text } from '@bucky24/react-canvas';
import { Panel, Button, MainPanel } from '@bucky24/react-canvas-ui';

function App() {
    const width = 500;
    const height = 400;
	
    return (<div>
        <Canvas
            width={width}
            height={height}
        >
            <MainPanel width={width} height={height} debug>
                <Panel x={50} y={50} width="50%" height={200} debug>
                    <Panel x={25} y={0} width="50%" height="100%" debug>
                        <Button x={0} y={40} width="100%" height={20}>

                        </Button>
                    </Panel>
                </Panel>
            </MainPanel>
        </Canvas>
    </div>);
}

export default App;

// 50 50 250 200 0 0 50 50
// 75 50 250 200 0 0 75 50