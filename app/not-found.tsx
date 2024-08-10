import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <h2 className='font-semibold text-3xl'>Sorry, Page is Not Found</h2>
      <Link href={'/'} className='gradientBg px-4 py-2 mt-7 rounded-md font-medium text-white'>Back to Home</Link>
    </div>
  )
}
