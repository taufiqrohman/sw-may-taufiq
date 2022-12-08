import React from 'react';
import weddingCalendar from '../assets/wedding-calendar.svg';
import weddingLocation from '../assets/wedding-location.svg';

const DetailPage: React.FC = () => (
  <div
    id='detail'
    className='relative max-w-[400px] w-screen h-screen mx-auto flex flex-col'
  >
    <div className='relative h-[100px] min-[376px]:h-[160px] text-white w-full overflow-hidden'>
      <div className='fancy-bg z-0'></div>
      <div className="left-0 absolute w-full h-full p-4 flex flex-col gap-3 items-center justify-center">
        <h1 className='font-handwriting text-4xl'>Akad Nikah &amp; Resepsi</h1>
      </div>
    </div>

    <div className="flex flex-col flex-1 items-center justify-center mb-[100px] py-4">
      <div className='flex flex-col items-center'>
        <img src={weddingCalendar} className='h-12 mb-1' />
        <div className='font-light text-sm'>Save the Date</div>
        <div className='font-bold text-xl'>11 . 12 . 2022</div>
      </div>
      <div className="flex flex-row w-full mt-8">
        <div className="flex-1 flex flex-col items-center border-r">
          <h3 className='font-sans text-lg font-bold'>Akad Nikah</h3>
          <div className="text-sm">Pukul 08.00</div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <h3 className='font-sans text-base font-bold'>Resepsi</h3>
          <div className="text-sm">Pukul 11.00 - 13.00</div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 mt-12">
      <img src={weddingLocation} className='h-12' />
        <h3 className='font-sans text-lg font-bold'>Lokasi</h3>
        <div className="italic">Aula Institut Teknologi Nasional</div>
        <div className="text-sm">Jl. Sigura-Gura No. 2, Sumbersari, Kec. Lowokwaru, Kota Malang</div>

        <a
          href='https://goo.gl/maps/64XXWSa3Yv287pQ86'
          target='_blank'
          rel='noreferrer'
          role='button'
          className='bg-black rounded-sm text-white px-6 py-2 text-xs mt-4 flex flex-row items-center'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Peta Lokasi
        </a>
      </div>
    </div>

    <div className="absolute p-4 bottom-0 left-0 w-screen h-[100px] background-flowers flex flex-col items-center justify-end gap-1 text-gray-600">
      <span className='text-center text-[10px] text-gray-500'>
        Scroll ke bawah
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
      </svg>
    </div>
  </div>
);

export default DetailPage;
