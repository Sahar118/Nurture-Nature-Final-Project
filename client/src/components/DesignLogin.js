import React from 'react'
import flower1 from '../assest/flower (1).png'
import flower5 from '../assest/flower6.png'
import bird from '../assest/bird.png'

const DesignLogin = () => {
    return (
        <div className='design-login-container'>
            <img src={flower1} alt='img' className='flower1' />
            <img src={flower5} alt='img' className='flower5' />
            <img src={bird} alt='img' className='bird' />
        </div>
    )
}

export default DesignLogin