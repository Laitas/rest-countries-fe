import React from 'react'
import './BackButton.scss'
import { BiArrowBack } from 'react-icons/bi'
import { useHistory } from 'react-router'

const BackButton = () => {
    const history = useHistory()
    return (
        <>
          <button className="btn" onClick={()=> history.push('/')}><BiArrowBack className='btn-icon'/> Back</button>  
        </>
    )
}

export default BackButton
