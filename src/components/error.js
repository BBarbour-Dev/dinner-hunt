import React from 'react'
import styled from 'styled-components'

const Error = ({ error }) => {
  return error ? (
    <ErrorStyle>
      <h2>
        Ut oh, something went wrong.{' '}
        <span role="img" aria-label="cold-sweat">
          😅
        </span>
      </h2>
    </ErrorStyle>
  ) : null
}

const ErrorStyle = styled.div`
  color: #bc340f;
`

export default Error
