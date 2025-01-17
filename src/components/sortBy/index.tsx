import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { IPaginationUrl } from '../../interface/interfaces';



const SortBy = ({ prevUrl, nextUrl, handlePrevious, handleNext }: IPaginationUrl) => {



    const pokeball = './images/pokeball.png'



    return (
        <section className='flex justify-center mt-5'>
            <div className='w-[59%]'>
                <ul className='flex justify-between'>
                    <button onClick={handlePrevious} disabled={prevUrl === null} className=" disabled:text-gray-500">
                        <FontAwesomeIcon icon={faChevronLeft} style={{}} />
                    </button>


                    {['Type', 'Weaknesses', 'Ability', 'Height', 'Weight'].map((item, index) => (
                        <li key={index} className='text-gray-400
                         rounded-lg 
                         shadow-md 
                         px-3 py-2 flex 
                         justify-between 
                         items-center 
                         gap-10 
                         font-medium
                         cursor-pointer'
                         >
                            <img src={pokeball} alt={item} className='w-11 h-11 ' />
                            {item}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </li>
                    ))}
                    <button onClick={handleNext} disabled={nextUrl === null} className='disabled:bg-gray-500'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </ul>
            </div>
        </section>

    )
}

export default SortBy