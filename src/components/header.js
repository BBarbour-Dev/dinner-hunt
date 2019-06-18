import React from 'react'
import styled from 'styled-components'
import { background } from '../assets/background'

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Dinner Hunt</h1>
      <h2>Never wonder what to make for dinner.</h2>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.div`
  background: #594736;
  background-image: url("${background}");
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: #fafafa;

  h1 {
    font-size: 3rem;
  }

  h2 {
    color: #F5F3BB;
    font-weight: 400;
    font-size: 1.5rem;
  }
`
