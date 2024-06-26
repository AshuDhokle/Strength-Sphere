import React from 'react'
import {Triangle} from 'react-loader-spinner'
const LoaderComp = () => {
  return (
    <div>
    <Triangle
        visible={true}
        height="80"
        width="80"
        color="#68D2E8"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
  />
    </div>
  )
}

export default LoaderComp