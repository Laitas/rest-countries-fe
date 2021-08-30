import React from 'react'
import { BsToggleOff , BsToggleOn} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux'
import {toggleMode} from '../../redux/modeSlice'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    const mode = useSelector(state => state.mode.lightMode)
    const dispatch = useDispatch()
    
    const toggle = () =>{
        dispatch(toggleMode())
    }
    return (
        <nav className={!mode? 'dark-theme' : ''}>
            <div className="nav-title">
                <Link to='/'><h1>Where in the world?</h1></Link>
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
