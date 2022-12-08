import Logo from '../assets/Taufiq-May.svg';

interface CoverPageProps {
  onOpen: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onOpen }) => (
  <div
    className='relative max-w-md w-screen h-screen mx-auto background-cover bg-cover box-border'
  >
    <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'></div>
    <div className='absolute top-0 left-0 z-30 w-full h-full flex flex-col py-16 items-center justify-center'>
      <span className="the-wedding text-white uppercase text-sm">The Wedding of</span>
      <img src={Logo} className='my-2 h-[80px]' />
      <span className='text-white text-sm mt-2'>11.12.2022</span>

      <div className="mt-48 text-white px-8 flex flex-col items-center">
        <p className='text-center text-xs font-light mb-3'>
          Kami mengundang Anda untuk berbagi kebahagiaan pada pernikahan kami
        </p>
        <button
          type='button'
          className='bg-black text-white text-center px-8 py-2 rounded text-xs flex flex-row items-center'
          onClick={onOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
);

export default CoverPage;
