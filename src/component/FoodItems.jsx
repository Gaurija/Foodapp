import React from 'react'
import FoodCard from './FoodCard'
import FoodData from "../data/FoodData"

const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-2 lg:justify-start mx-6'>
      {FoodData.map((food)=>{
        return <FoodCard 
        key={food.id} 
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        />
      })}
      <FoodCard/>
    </div>
  )
}

export default FoodItems;