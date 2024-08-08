import React from 'react'
import Hero from '../Components/Home/Hero'
import VideoSection from '../Components/Home/VideoSection'
import Spinner from '../Components/Shared/Spinner'
import ContentAi from '../Components/Home/ContentAi'
import Pricing from '../Components/Home/Pricing'



const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <VideoSection></VideoSection>
      <ContentAi></ContentAi>
      <Pricing></Pricing>
     
    </div>
  )
}

export default Homepage