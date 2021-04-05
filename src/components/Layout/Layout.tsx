import React, { PropsWithChildren } from 'react'
import Footer from '../Footer/Footer'

import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'


type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <header>
      <Navbar />
    </header>
    <main className="container">
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
