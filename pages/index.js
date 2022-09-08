// import Head from 'next/head'
// import Image from 'next/image'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
//import styles from '../styles/Home.module.css'
import CustomLayout from '../layout/CustomLayout'
import SectionOne from '../components/SectionOne'

export default function Home() {
  return (
    <CustomLayout>
      <SectionOne/>
    </CustomLayout>
  )
}
