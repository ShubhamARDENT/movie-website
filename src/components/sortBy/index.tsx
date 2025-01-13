import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SortBy = () => {

    const pokeball = './images/pokeball.png'
    return (
        <section className='flex justify-center mt-5'>
            <div className='w-[59%]'>
                <ul className='flex justify-between'>
                    {['Type', 'Weaknesses', 'Ability', 'Height', 'Weight'].map((item, index) => (
                        <li key={index} className='text-gray-400
                         rounded-lg 
                         shadow-md 
                         px-3 py-2 flex 
                         justify-between 
                         items-center 
                         gap-10 
                         font-medium'>
                            <img src={pokeball} alt={item} className='w-11 h-11 ' />
                            {item}
                            <button>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default SortBy