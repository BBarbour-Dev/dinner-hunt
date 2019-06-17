import React from 'react'
import pugloader from '../assets/pugloader.gif'

const PugLoader = ({ loading }) => {
  return loading ? (
    <figure>
      <img src={pugloader} alt="Puggy Boi" />
    </figure>
  ) : null
}

export default PugLoader
