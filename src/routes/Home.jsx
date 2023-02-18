import React, { useState } from 'react'
import Country_card from '../components/Country_card'
import Filter from '../components/Filter'



function Home() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
  return (
    <div  className="container mx-auto px-12">
        <Filter setFilter={setFilter} search={search} setSearch={setSearch}/>
        <div className='sm:block flex flex-col items-center'>
          <Country_card filter={filter} search={search}/>
        </div>
    </div>
  )
}

export default Home