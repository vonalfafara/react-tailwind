import React from 'react'
import { variants, sizes } from './variants'

const index = ({ variant, size, children, onClick }) => {
  let style = ''
  let btnSize = ''

  if (variant) {
    style = variants[variant]
  } else {
    style = variants.primary
  }

  if (size) {
    btnSize = sizes[size]
  } else {
    btnSize = sizes.md
  }

  return (
    <button className={`${style} ${btnSize} text-white px-4 py-2 rounded-md transition-colors duration-500`} onClick={onClick}>{children}</button>
  )
}

export default index