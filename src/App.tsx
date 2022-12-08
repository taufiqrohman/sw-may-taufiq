import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CoverPage from './parts/Cover';
import BrideAndGroomPage from './parts/BrideAndGroom';
import OpeningPage from './parts/Opening';
import DetailPage from './parts/Detail';
import GalleryPage from './parts/Gallery';
import ClosingPage from './parts/Closing';

function App() {
  const [
    isOpen,
    setIsOpen,
  ] =
    useState<boolean>(false);

  return (
    <div className='App'>
      {!isOpen && (
        <CoverPage
          onOpen={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <>
          <OpeningPage />
          <BrideAndGroomPage />
          <DetailPage />
          <GalleryPage />
          <ClosingPage />
        </>
      )}
    </div>
  );
}

export default App;
