import React from 'react'
import NavBarRB from '../components/NavBarRB'

const Landing = ({children}) => {
  return (
    <>
    <NavBarRB/>
    {children}
    </>
  )
}

export default Landing