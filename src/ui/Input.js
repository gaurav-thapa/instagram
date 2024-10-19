import React from 'react'

const Input = ({type,id, placeholder}) => {
  return (
    <div>
        <input className='p-2 bg-gray-900 text-white w-full mb-4 rounded'name={id} id={id} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input