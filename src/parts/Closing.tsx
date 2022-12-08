import thanksIcon from '../assets/thanks.svg';
import igIcon from '../assets/ig.svg';
import maskIcon from '../assets/mask.svg';
import washIcon from '../assets/wash.svg';
import distanceIcon from '../assets/distance.svg';

const ClosingPage: React.FC = () => (
  <div
    id='detail'
    className='relative max-w-[400px] w-100 h-screen mx-auto flex flex-col items-center justify-center'
  >

    <div className="flex flex-col w-full py-8 px-10">
      <img src={thanksIcon} className='h-8 mb-4' />
      <p className='text-xs'>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir 
        untuk berbagi kebahagiaan dan memberikan do'a restu kepada kedua mempelai
      </p>
    </div>

    <div className="flex flex-col w-full py-8 px-4">
      <h4 className='mb-6 font-semibold'>Protokol Kesehatan</h4>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-col items-center">
          <img src={maskIcon} className='h-8 mb-4' />
          <span className="text-xs text-center">
            Memakai Masker
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center border-x">
          <img src={washIcon} className='h-8 mb-4' />
          <span className="text-xs text-center">
            Mencuci Tangan
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img src={distanceIcon} className='h-8 mb-4' />
          <span className="text-xs text-center">
            Menjaga Jarak
          </span>
        </div>
      </div>
    </div>

    <p className="font-arabic pt-8">
    وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
    </p>

    <div className="absolute p-4 bottom-0 left-0 w-full h-[100px] background-flowers flex flex-row items-center justify-center text-xs gap-1 text-gray-600">
      <a
        target="_blank"
        href="https://www.instagram.com/sharewithyou_id/"
        className='flex flex-row gap-1'
      >
        <img src={igIcon} className='w-4' />
        @sharewithyou_id
      </a>
    </div>
  </div>
);

export default ClosingPage;
