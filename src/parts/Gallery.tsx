import galleryIcon from '../assets/gallery.svg';
import Image1 from '../assets/gallery/1.png';
import Image2 from '../assets/gallery/2.png';
import Image3 from '../assets/gallery/3.png';
import Image4 from '../assets/gallery/4.png';
import Image5 from '../assets/gallery/5.png';

const GalleryPage: React.FC = () => (
  <div
    id='detail'
    className='relative max-w-[400px] w-100 h-screen mx-auto flex flex-col items-center'
  >
    <img src={galleryIcon} className='w-12 my-8' />

    <div className="relative flex flex-col px-6 gap-2">
      <div className='w-100'>
        <img src={Image1} alt='Image 1' className='rounded-sm h-[200px] w-full object-cover' />
      </div>

      <div className="flex flex-row gap-2">
        <div className="w-[40%]">
          <img src={Image3} className='h-[160px] w-full object-cover rounded-sm' />
        </div>
        <div className="w-[60%]">
        <img src={Image2} className='h-[160px] w-full object-cover rounded-sm' />
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="w-[60%]">
          <img src={Image4} className='h-[160px] w-full object-cover rounded-sm' />
        </div>
        <div className="w-[40%]">
          <img src={Image5} className='h-[160px] w-full object-cover rounded-sm' />
        </div>
      </div>
    </div>

    <div className="absolute p-4 bottom-0 left-0 w-full h-[100px] background-flowers flex flex-col items-center justify-end gap-1 text-gray-600">
      <span className='text-center text-[10px] text-gray-500'>
        Scroll ke bawah
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
      </svg>
    </div>
  </div>
);

export default GalleryPage;
