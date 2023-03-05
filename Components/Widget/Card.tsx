import React from 'react'

export default function Card() {
  return (
    <div className='w-[320px] rounded-2xl bg-white grid'>
        <aside className='mx-auto mt-[12px] '>
            <img src='image-qr-code.png' className='w-[288px] h-[288px] rounded-2xl ' alt="Front mentor QR Code" />
        </aside>
        <article className=' grid gap-y-[16px] mt-[32px] mx-[21px] justify-self-center'>
            <h1 className='font-bold text-xl flex text-center'>
                Improve your front-ends skills by building projects
            </h1>
            <p className=' text-gray-400 flex text-center mb-[32px] '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </article>

    </div>
  )
}
