import Card from '@/Components/Widget/Card'
import Footer from '@/Components/Widget/Footer'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon-32x32.ico" type="image/x-icon" />
        <meta name="description" content="Yusufva Solution made to the Frontend-Mentor challenge : QR Code Components. It is build with NextJS and Tailwind CSS" />
        <title>QR Code Components</title>
      </Head>

      <div>
        <main className='w-full h-screen flex justify-center items-center bg-[#d5e1ef]'>
        <Card/>
        </main>
        <Footer/>
      </div>

    </>
  )
}
