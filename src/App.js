import React, { Component } from 'react';
import {
  Stage,
  Layer,
  Group,
  Rect,
  Line,
  Path,
  Circle,
  Text,
  Wedge,
  Arrow,
  Image
} from 'react-konva';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    // const width = window.innerWidth - 50;
    // const height = window.innerHeight - 50;
    const width = 1000;
    const height = 500;
    const strokeColor = '#D3D3D3';
    const strokeWidth =1;

    const blocksNames = [
      'key-partners',
      'key-activities',
      'key-resources',
      'value-propositon',
      'custumer-relatioship',
      'channels',
      'custumer-segments',
      'cost-structure',
      'revenue-streams'
    ];

    return (
      <div className='App'>
        <Stage
          width={width + 100}
          height={height + 100}>
          <Layer 
            width={width}
            height={height}
          >
            <Group
              x='1'
              y='1'
              width={width}
              height={height}
            >
              <Rect
                name={blocksNames[0]}
                x={1}
                y={1}
                width={width}
                height={height}
                stroke= '#D3D3D325'
              >
                <Rect
                  name={blocksNames[1]}
                  x={1}
                  y={1}
                  width={width * 0.5}
                  height={height * 0.5}
                  strokeColor= 'transparent'
                />
                <Rect
                  name={blocksNames[2]}
                  x={1}
                  y={height * 0.5}
                  width={width * 0.5}
                  height={height * 0.5}
                  fill= '#D3D3D325'
                  strokeColor= 'transparent'
                />
                <Rect
                  name={blocksNames[3]}
                  x={width * 0.5}
                  y={1}
                  width={width * 0.5}
                  height={height * 0.5}
                  fill= '#D3D3D325'
                  strokeColor= 'transparent'
                />
                <Rect
                  name={blocksNames[4]}
                  x={width * 0.5}
                  y={height * 0.5}
                  width={width * 0.5}
                  height={height * 0.5}
                  strokeColor= 'transparent'
                />
              </Rect>
              <Arrow
                name={blocksNames[5]}
                points = {[
                  width * 0.01, height * 1,
                  width * 0.01, height * 0.01
                ]}
                pointerLength = {4}
                pointerWidth = {4}
                fill = 'black'
                stroke = 'black'
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;

//              <Rect
//                name={blocksNames[0]}
//                x={1}
//                y={1}
//                width={width}
//                height={height}
//                stroke= '#D3D3D3'
//                strokeWidth= {strokeWidth}
//              />
//              <Rect
//                name={blocksNames[1]}
//                x={1}
//                y={1}
//                width={width * 0.6}
//                height={height * 0.7}
//                stroke= '#D3D3D3'
//                strokeWidth= {strokeWidth}
//              />
//              <Rect
//                name={blocksNames[2]}
//                x={1}
//                y={height * 0.7}
//                width={width * 0.6}
//                height={height * 0.3}
//                stroke= '#D3D3D3'
//                strokeWidth= {strokeWidth}
//              />
//              <Rect
//                name={blocksNames[3]}
//                x={width * 0.6}
//                y={1}
//                width={width * 0.2}
//                height={height}
//                stroke= '#D3D3D3'
//                strokeWidth= {strokeWidth}
//              />
//              <Rect
//                name={blocksNames[4]}
//                x={width * 0.8}
//                y={1}
//                width={width * 0.2}
//                height={height}
//                stroke= '#D3D3D3'
//                strokeWidth= {strokeWidth}
//              />

              
              // <Line
              //   name={blocksNames[0]}
              //   points={[
              //     width * 0.5, height * 0.3,

              //     width * 0.48, height * 0.22,
              //     width * 0.43, height * 0.17,
              //     width * 0.37, height * 0.19,
              //     width * 0.33, height * 0.28,
              //     width * 0.315, height * 0.4,
              //     width * 0.335, height * 0.5,
              //     width * 0.37, height * 0.585,
              //     width * 0.445, height * 0.73,
              //     width * 0.5, height * 0.8,
              //     width * 0.555, height * 0.73,
              //     width * 0.63, height * 0.585,
              //     width * 0.665, height * 0.5,
              //     width * 0.685, height * 0.4,
              //     width * 0.67, height * 0.28,
              //     width * 0.63, height * 0.19,
              //     width * 0.57, height * 0.17,
              //     width * 0.525, height * 0.22,
              //     ]}
              //   stroke= 'red'
              //   strokeWidth= {10}
              //   lineCap='round'
              //   lineJoin='round'
              //   tension='0.35'
              //   closed
              // />

              // <Path
              //   name={blocksNames[0]}
              //   x= '150'
              //   y= '100'
              //   data= {'M140,20C 73,20 20,74 20,140 20,275 156,310 248,443 336,311 477,270 477,140 477,74 423,20 357,20 309,20 267,48 248,89 229,48 188,20 140,20Z'}
              //  // data= {'M2327.5,4486.4C1457.3,4320.6,736.7,3784.2,366,3019.9c-216.4-444.3-283.2-775.8-262.5-1316.8C128.9,996.3,356.8,478.3,893.2-85.7c847.2-890.9,4044.9-4185.3,4074.8-4196.9c71.4-27.6-142.7-241.7,2253.8,2242.3C8122-1110.2,8966.9-230.7,9105.1-90.3c382.2,400.6,584.8,748.2,722.9,1238.6c46,165.8,59.9,280.9,69.1,570.9c18.4,543.3-46,856.4-271.7,1316.8c-373,764.3-1137.3,1323.8-1977.6,1450.4c-948.5,145-1878.6-202.6-2488.6-932.4c-78.3-94.4-149.6-172.7-158.8-172.7c-9.2,0-66.8,62.2-131.2,138.1c-407.5,488.1-939.3,817.3-1537.9,948.5C3103.3,4516.3,2546.2,4527.8,2327.5,4486.4z M3160.9,4141.1c359.1-66.8,660.7-188.8,953.1-386.8c200.3-135.8,488.1-437.4,633.1-665.3c207.2-326.9,301.6-326.9,506.5,0c566.3,904.8,1701.3,1305.3,2718.9,960c1280-435.1,1926.9-1850.9,1418.2-3096.4c-101.3-250.9-237.1-467.3-405.2-653.8C8815,112.3,5324.9-3506.7,5129.2-3697.8l-128.9-124.3l-151.9,147.4C4625.1-3456.1,1187.9,107.7,1015.3,298.8c-416.7,462.7-640,1141.9-570.9,1756.6c117.4,1059,870.2,1876.3,1922.3,2083.5C2583,4182.5,2930.7,4182.5,3160.9,4141.1z'}
              //   strokeWidth={1}
              //   stroke="1"
              //   fill="transparent"
              // />