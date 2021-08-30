import React from 'react'
import './BackButton.scss'
import { BiArrowBack } from 'react-icons/bi'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

const BackButton = () => {
  const mode = useSelector(state => state.mode.lightMode)
    const history = useHistory()
    return (
      <>
        <button
          className={!mode ? "btn dark-theme" : "btn"}
          onClick={() => history.push("/")}
        >
          <BiArrowBack className="btn-icon" /> Back
        </button>
      </>
    );
}

export default BackButton
