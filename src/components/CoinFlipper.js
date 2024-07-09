import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './CoinFlipper.css';

const CoinFlipper = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    setIsFlipping(true);
    setResult(null);
    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? 'heads' : 'tails';
      setResult(newResult);
      setIsFlipping(false);
    }, 2000);
  };

  const connect = () => {
    console.log('connect');
  };

  useEffect(() => {
    if (result) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result]);

  return (
    <>
      <button
        className="fixed-button"
        onClick={connect}
      >
        Connect
      </button>
      <div className="coin-flipper">
        <h1 className="comic-title">PUZZLE COIN FLIP</h1>
        <div className="coin-container">
          <div className={`coin ${isFlipping ? 'flipping' : ''}`}>
            <div className="coin-face heads">HEADS</div>
            <div className="coin-face tails">TAILS</div>
          </div>
        </div>
        <button className="comic-button" onClick={flipCoin} disabled={isFlipping}>
          {isFlipping ? 'Flipping...' : 'FLIP COIN'}
        </button>
        {result && <p className="result-text">RESULT: {result.toUpperCase()}</p>}
      </div>
    </>
  );
};

export default CoinFlipper;