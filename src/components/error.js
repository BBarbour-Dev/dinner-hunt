import React from 'react'

const Error = ({ error }) => {
  return error ? (
    <div>
      <h2 style={{ color: 'red' }}>Ut oh, something went wrong</h2>
    </div>
  ) : null
}

export default Error
