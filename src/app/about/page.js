import React from 'react'
import Hero from '../components/Hero'
export const metadata = {
  title: 'MyFlix-About',
  description: 'Read about anime/movie',
}
const Page = () => {
  return (
    <Hero  title={"OUR STORY"} imageUrl={'/about1.svg'}/>
  )
}

export default Page