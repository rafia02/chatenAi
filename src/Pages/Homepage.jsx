import React from 'react'
import Hero from '../Components/Home/Hero'
import VideoSection from '../Components/Home/VideoSection'
import Spinner from '../Components/Shared/Spinner'
import ContentAi from '../Components/Home/ContentAi'



const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <VideoSection></VideoSection>
      <ContentAi></ContentAi>
     
    </div>
  )
}

export default Homepage