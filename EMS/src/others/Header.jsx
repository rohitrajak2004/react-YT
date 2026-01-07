import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-7">
        <h1 className="text-2xl font-medium">
          Hello <br /> <span className="text-3xl font-semibold">Rohit 👋</span>
        </h1>
        <button className="active:scale-95 text-xl px-4 py-2 rounded-xl bg-[#0C969C]">
          Log Out
        </button>
      </div>
  )
}

export default Header