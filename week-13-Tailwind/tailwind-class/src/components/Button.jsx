import React from 'react'

function Button({value}) {
  return (
    <div className="button px-7 py-3 bg-green-400 text-white text-2xl text-semibold text-center rounded-2xl">{value}</div>
  )
}

export default Button