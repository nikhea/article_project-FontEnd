import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
    
//     const style = {
//         display: 'felx',
//         alignItems: 'center',
//         justifyContent: 'center'

//   }
    return (
        <div className='landingBackground'>
            <div className='landingh1'>
            <h1 >Welcome To Fortune Articles</h1>
                <hr />
                <Link to='/articlelist'>View Articles</Link>
                </div> 
        </div>
      );
}
 
export default Landing;