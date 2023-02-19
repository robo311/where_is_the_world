import React, { useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"

function Filter({ search, setSearch, setFilter }) {

    
    const handleSearch = () => {
        setSearch(document.getElementById("search").value.toLowerCase())
    }



  return (
    <div className='flex justify-between md:flex-row flex-col gap-8 '>
        <div className='relative'>
            <span className='absolute bottom-[13px] left-3'>
                <AiOutlineSearch size={30}/>
            </span>
            <input placeholder='Search for country...' onChange={handleSearch} className='dark:bg-[#2B3945] bg-[#FFFFFF] rounded-md py-4 px-5 pl-12 w-[370px]' id='search' type="text" />
        </div>

        <div>
            <select onChange={(e)=> setFilter(e.target.value)} className='dark:bg-[#2B3945] bg-[#FFFFFF] px-4 py-4 w-[200px] rounded-md' name="region_filter" id="region_filter">
                <option value="" defaultValue="default" >Default</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default Filter