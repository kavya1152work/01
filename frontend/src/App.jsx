import React from 'react'
import Header from './components/header'
import Card from './components/card'
import { useState } from 'react'

function App() {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <Card searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default App
