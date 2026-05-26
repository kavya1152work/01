import React from 'react'


function Header({ setSearchTerm }) {

  return (
    <div>
      <div className="header  text-black p-4 flex justify-between items-center border-b-2 border-gray-600">
        <h1 className="text-2xl font-bold">My HK APP</h1>
        
        <div className="search-bar mt-4 rotate-0 border-2 border-zinc-900 rounded flex items-center gap-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded" 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
