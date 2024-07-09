import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './CoinFlipper.css';
import { EventType, requestCreateEvent, shortenAddress, useAccount, useConnect } from '@puzzlehq/sdk';

const CoinFlipper = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [event, setEvent] = useState(null);
  const { connect, isConnected, loading } = useConnect()
  const { account } = useAccount();

  const flipCoin = () => {
    setIsFlipping(true);
    setResult(null);
    setEvent(null)
    setTimeout(async () => {
      const newResult = Math.random() < 0.5 ? 'heads' : 'tails';
      const event = await requestCreateEvent({
        fee: 1,
        functionId: 'flip',
        programId: 'puzzle_coinflip.aleo',
        inputs: [newResult === 'heads' ? 'true' : 'false'],
        type: EventType.Execute,
      });
      console.log(event);
      setEvent(event);
      setResult(newResult);
      setIsFlipping(false);
    }, 2000);
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

  const buttonText = (() => {
    if (isConnected && account) {
      console.log(account)
      return shortenAddress(account.address)
    } else if (loading) {
      return 'Connecting...'
    } else {
      return 'Connect'
    }
  })()

  return (
    <>
      <button
        className="fixed-button"
        onClick={connect}
      >s
        {buttonText}
      </button>
      <div className="coin-flipper">
        <h1 className="comic-title">PUZZLE COIN FLIP</h1>
        <div className="coin-container">
          <div className={`coin ${isFlipping ? 'flipping' : ''}`}>
            <div className="coin-face heads">HEADS</div>
            <div className="coin-face tails">TAILS</div>
          </div>
        </div>
        <button className="comic-button" onClick={flipCoin} disabled={isFlipping || !isConnected}>
          {isConnected
            ? isFlipping
              ? 'Flipping...'
              : 'FLIP COIN'
            : 'Connect Wallet'}
        </button>
        {result && <p className="result-text">RESULT: {result.toUpperCase()}</p>}
      </div>
    </>
  );
};

export default CoinFlipper;