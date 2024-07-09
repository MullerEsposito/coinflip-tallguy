import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PuzzleWalletProvider
      dAppDescription='A riveting game of chance'
      dAppName='Coin Flip Adventure'
      dAppUrl='coinflip.puzzle.online'
      dAppIconURL='https://upload.wikimedia.org/wikipedia/en/c/c7/Common_face_of_two_euro_coin_%282007%29.jpg'
    >
      <App />
    </PuzzleWalletProvider>
  </React.StrictMode>
);