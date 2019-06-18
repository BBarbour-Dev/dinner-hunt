import React from 'react'
import styled from 'styled-components'
import pugloader from '../assets/pugloader.gif'

const PugLoader = ({ loading }) => {
  return loading ? (
    <PugFigure>
      <img src={pugloader} alt="Puggy Boi" />
    </PugFigure>
  ) : null
}

const PugFigure = styled.figure`
  width: 30rem;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
`

export default PugLoader
