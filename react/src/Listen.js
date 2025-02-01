import React from 'react';
import { jumpToMusic } from './Jump';

function Listen() {
  const handleClick = () => {
    jumpToMusic();
  };

  return (
    <div className="listen-btn" style={{
      position: 'fixed',
      bottom: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100
    }}>
      <button
        onClick={handleClick}
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#C20C0C',
          color: 'white',
          border: 'none',
          borderRadius: '25px', 
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        随机一首歌
      </button>
    </div>
  );
}

export default Listen;