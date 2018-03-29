import React from "react";
import heroData from "./heroData.json";
import Hero from "./Hero";

function SuperheroList() {
  function speak(hero) {
    alert(`${hero.motto}`)
  }
  const herosObj = heroData
    .map(heroObj => 
      <Hero 
        key= {heroObj.img}
        hero= {heroObj}
        handleClick= {speak}
      />
    )
  return (
    <div>
      {herosObj}
    </div>
  )
}

export default SuperheroList;