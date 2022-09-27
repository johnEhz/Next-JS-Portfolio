import React from 'react'

const CustomBtn = ({ w, children, text, color='bg-yellow-300', handleClick }) => {
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`hover:bg-yellow-200 inline-flex ${color} text-stone-800 w-${w} p-2 rounded-md italic font-normal gap-x-2`}>
            {children}
            {text}
        </button>
  )
}

export default CustomBtn;