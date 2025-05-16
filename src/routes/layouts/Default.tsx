import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
