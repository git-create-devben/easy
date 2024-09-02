import React from 'react';

interface GameEmbedProps {
  gameUrl: string | null | undefined;
}

const CanvasComponent: React.FC<GameEmbedProps> = ({ gameUrl }) => {
  if (!gameUrl) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className='text-gray-400 text-center'>No game selected. Ask the AI to recommend a game!</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <iframe 
        src={gameUrl} 
        width="100%" 
        height="100%" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default CanvasComponent;