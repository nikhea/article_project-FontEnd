import React from 'react';

import FortuneReact from '../img/FortuneReacts.jpg'
import FortuneUpload from '../img/fortune upload.jpg'
import Fortune    from '../img/fortune.jpg'

const Image= () => {
    return (  
        <div>
            <img src={FortuneReact}  className='img'/>
            <img src={FortuneUpload} className='img' />
            <img src={Fortune} className='img'/>
        </div>
    );
}
 
export default Image;