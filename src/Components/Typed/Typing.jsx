import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Typing() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['developnment', 'UI designing','backends','databases','learning new.'],
            typeSpeed:70,
            backSpeed:20,
            loop:true
        }); 

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <span className='text-main' ref={el}></span>
    );
}

export default Typing