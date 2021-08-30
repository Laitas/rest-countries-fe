import React from 'react'
import { BsToggleOff , BsToggleOn} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux'
import {toggleMode} from '../../redux/modeSlice'
import './Nav.scss'

const Nav = () => {
    const mode = useSelector(state => state.mode.lightMode)
    const dispatch = useDispatch()
    
    const toggle = () =>{
        console.log(mode);
        dispatch(toggleMode())
    }
    return (
        <nav className={!mode? 'dark-theme' : ''}>
            <div className="nav-title">
                <h1>Where in the world?</h1>
            </div>
            <div className="mode-toggle">
                {mode? 
                <BsToggleOn className='toggle-icon' onClick={toggle}/>
                :
                <BsToggleOff className='toggle-icon' onClick={toggle}/>}
            </div>
        </nav>
    )
}

export default Nav
