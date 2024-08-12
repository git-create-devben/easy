"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const CanvasComponent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: window.innerHeight
          });
        }
      };
  
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
  
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }, []);
  return (
    <div ref={containerRef} className="w-full h-screen">
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fill="#171311"
            shadowBlur={5}
          />
          <Text
            text="Interactive Canvas"
            x={100}
            y={100}
            fontSize={20}
            fill="gray"
          />
          {/* Placeholder for future interactive elements */}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasComponent;