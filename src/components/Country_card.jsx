import React from 'react'
import data from "../data/data.json"
import { Link } from 'react-router-dom'


function Country_card({ search, filter }) {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-12 mt-12 grid-cols-1 gap-10'>
    {data.filter((item) => {
        if(search !== ''){
            return item.name.toLowerCase().includes(search)
        }else if(filter !== '') { 
            return item.region.includes(filter)
        }else{ return item }
        
    }).map((country) => ( 
        <div key={country.name} className='dark:bg-[#2B3945] bg-[#FFFFFF] rounded-lg drop-shadow-lg cursor-pointer hover:dark:bg-[#36495a] hover:bg-[#f3f3f3] transition-all duration-150 ease-in-out'>
            <Link to={`/country/${country.name}`}>
                <div>
                    <img className='rounded-t-lg w-full' src={country.flag} alt="" />
                </div>
                <div className='text-[14px] p-4 flex flex-col gap-1'>
                    <h1 className='text-[18px] mb-4'>{country.name}</h1>
                    <span className='flex gap-1'><h2 className=''>Population: </h2>{country.population.toLocaleString('en-US')}</span>
                    <span className='flex gap-1'><h2 className=''>Region: </h2>{country.region}</span>
                    <span className='flex gap-1'><h2 className=''>Capital: </h2>{country.capital}</span>
                </div>
                </Link>
            </div>
    ))}
        
    </div>
  )
}

export default Country_card