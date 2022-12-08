import { useState } from 'react';
import useSound from 'use-sound';
import './App.css';
import musicBg from './assets/youre-the-reason-felix-irwan-cover.mp3';
import BrideAndGroomPage from './parts/BrideAndGroom';
import ClosingPage from './parts/Closing';
import CoverPage from './parts/Cover';
import DetailPage from './parts/Detail';
import GalleryPage from './parts/Gallery';
import OpeningPage from './parts/Opening';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [play] = useSound(musicBg, {
    volume: 0.3,
  });

  const openPage = () => {
    setIsOpen(true);
    play();
  };

  return (
    <div className='App'>
      {!isOpen && (
        <CoverPage
          onOpen={openPage}
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
