import React from 'react'
import NavigationBar from '../../components/navbar'
import Footer from '../../components/footer'

const LayoutLanding = (props) => {
  return (
    <>
      <NavigationBar/>
        {props.children}
      <Footer />
    </>
  )
}

export default LayoutLanding