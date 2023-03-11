import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { LandingPage } from './LandingPage';

export const Homepage = () => {
  return (
    <>
          <div className="sticky top-0 bg-white z-10">
        <Navbar/>
      </div>

      <section id="mainArea" className="m-2 w-[98vw]">
        <LandingPage/>
      </section>
    </>
  )
}
