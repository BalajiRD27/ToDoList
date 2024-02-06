import React from 'react'

const Footer = ({length}) => {
    const year= new Date();
  return (
    <footer>
        <p>List of {length===1?"item":"items"}: {length}</p>
        Copyrights &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer