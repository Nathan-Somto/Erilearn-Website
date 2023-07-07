import React from 'react'

type Props = {
    dropdownContent:string[]
}

const Dropdown = ({dropdownContent}: Props) => {
  return (
    <div className="absolute -bottom-[100px] text-center hidden">
    {dropdownContent.map((content, index) => (
      <p key={index} className="">
        {content}
      </p>
    ))}
  </div>
  )
}

export default Dropdown