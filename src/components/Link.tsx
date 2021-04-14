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