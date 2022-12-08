import tullip from '../assets/tullip.svg';

const BrideAndGroomPage: React.FC = () => (
  <div
    id='bride-and-groom'
    className='relative max-w-[400px] w-100 h-screen mx-auto flex flex-col'
  >
    <div className='relative h-[100px] min-[376px]:h-[160px] text-white w-full overflow-hidden p-4 min-[376px]:p-0'>
      <div className='fancy-bg z-0'></div>
      <div className="absolute left-0 w-full h-full p-4 flex flex-col gap-4 items-center justify-center">
        <img src={tullip} className='stroke-white w-6 md:w-8' />
        <p className='text-center text-xs md:text-sm'>
          "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)."
        </p>
        <span className='text-xs md:text-sm text-center font-semibold'>
          Az-Zariyat : 49
        </span>
      </div>
    </div>

    <div className="flex flex-col flex-1 items-center justify-center mb-[100px] py-4">
      <div className="font-arabic font-semibold">
      ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
      </div>

      <div className="mt-6 text-center px-4 text-sm font-light">
        Maha Suci Allah SWT yang telah menciptakan makhluknya berpasang-pasangan. 
        Ya Allah, perkenankanlah kami menikahkan putra dan putri kami dalam ikatan suci pernikahan.
      </div>

      <div className="mt-8">
        <h5 className="font-handwriting font-bold text-2xl">Taufiq Rohman</h5>
        <div className="italic font-light text-xs">
          Putra kedua dari Alm. Bapak Sahat dan Ibu Saropah
        </div>
        <div className='mt-1 font-light text-xs'>- Probolinggo -</div>
      </div>

      <div className="mt-4">
        <div className="font-handwriting text-4xl font-grey">&amp;</div>
      </div>

      <div className="mt-4">
        <h5 className="font-handwriting font-bold text-2xl">Siti Maisyaroh</h5>
        <div className="italic font-light text-xs">
          Putri tunggal dari Alm. Bapak Budiono dan Ibu Endang Rahayu
        </div>
        <div className='mt-1 font-light text-xs'>- Kota Malang -</div>
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

export default BrideAndGroomPage;
