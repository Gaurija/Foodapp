import React from 'react'

const CategoryMenu = () => {
  return (
    <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the best Food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden">
            <button className={'px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'}>All</button>
            <button className={'px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'}>BreakeFast</button>
            <button className={'px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'}>Lunch</button>
            <button className={'px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'}>Dinner</button>
            <button className={'px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'}>Snack</button>
        </div>
    </div>
  )
}

export default CategoryMenu;