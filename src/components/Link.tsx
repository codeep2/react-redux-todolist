import React from 'react'

interface LinkProps {
  active: boolean;
  children: string;
  onClick: () => {}
}

const Link = ({ active, children, onClick }: LinkProps) => {
  return (
    <button
      disabled={active}
      className="toggle_btn"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

export default Link