import Logo from '../assets/Taufiq-May.svg';

const OpeningPage: React.FC = () => (
  <div
    id='opening-page'
    className='relative max-w-[400px] w-100 h-screen mx-auto background-cover bg-cover'
  >
    <div className='absolute top-0 left-0 w-full h-screen bg-black/50 z-10'></div>
    <div className='absolute z-30 w-full h-screen flex flex-col px-4 py-16 items-center justify-center'>
      <span className="the-wedding text-white uppercase text-sm">Undangan Pernikahan</span>
      <img src={Logo} className='my-2 h-[80px]' />
      <span className='text-white text-sm mt-2'>11 . 12 . 2022</span>
    </div>

    <div className="absolute p-4 bottom-0 left-0 w-full h-[100px] flex flex-col items-center justify-end gap-1 text-white">
      <span className='text-center text-[10px]'>
        Scroll ke bawah
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
      </svg>
    </div>
  </div>
);

export default OpeningPage;
