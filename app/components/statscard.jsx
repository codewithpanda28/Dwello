import React from 'react'

const statscard = ({ number, label }) => {
  return (
    <div>
           <div className="text-center space-y-2">
        <h3 className="text-4xl font-bold text-[#2D2D2D]">{number}</h3>
        <p className="text-[#4D4D4D]">{label}</p>
      </div>
    </div>
  )
}

export default statscard
