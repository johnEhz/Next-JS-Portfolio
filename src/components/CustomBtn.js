import React from 'react'

const CustomBtn = ({ w, children, text, color='bg-yellow-300', handleClick=null, type='button' }) => {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`hover:bg-yellow-200 flex ${color} text-stone-800 w-${w} p-2 rounded-md italic font-normal gap-x-2 text-sm items-center h-8`}>
            {children}
            {text}
        </button>
  )
}

export default CustomBtn;