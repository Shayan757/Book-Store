import React from 'react'
import loading from "./loading/transparent-loading.gif"

const Spinner = () => {
  return (
    <div className='text-center'>

  <img className='loading' src= {loading} alt="loading" />

    </div>
  )
}

export default Spinner
