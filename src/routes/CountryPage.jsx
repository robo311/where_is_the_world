import React from 'react'
import data from "../data/data.json"
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"

function CountryPage() {
    const params = useParams()
  return (
    <div className='container mx-auto px-12'>
        <div className='mb-12'><button className='flex gap-2 drop-shadow-lg px-8 py-2 rounded-lg dark:bg-[#2B3945] bg-[#FFFFFF]'><span className='mt-1'><BiArrowBack/></span><Link to="/">Back</Link></button></div>
        {data.filter((item)=> {
            return item.name.includes(params.countryName)
        }).map((country)=> (
            <div className='flex gap-10 lg:flex-row flex-col justify-around'>
                <div>
                    <img className='max-w-[500px]' src={country.flag} alt="Flag" />
                </div>
                <div className='mt-8'>
                    <h1 className='text-[24px] mb-4'>{country.name}</h1>
                    <div className='flex flex-col gap-12'>
                        <ul className='flex gap-14 md:flex-row flex-col'>
                            <div className='flex flex-col gap-2'>
                                <li className='flex gap-2'><h2>Native Name: </h2>{country.nativeName}</li>
                                <li className='flex gap-2'><h2>Population: </h2>{country.population.toLocaleString("en-US")}</li>
                                <li className='flex gap-2'><h2>Region: </h2>{country.region}</li>
                                <li className='flex gap-2'><h2>Sub Region: </h2>{country.subregion}</li>
                                <li className='flex gap-2'><h2>Capital: </h2>{country.capital}</li>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <li className='flex gap-2'><h2>Top Level Domain: </h2>{country.topLevelDomain}</li>
                                <li className='flex gap-2'><h2>Currencies: </h2>{country.currencies.map((currency)=>(currency.name))}</li>
                                <li className='flex gap-2'><h2>Languages: </h2>{country.languages.map((language)=>(language.name)).join(", ")}</li>
                            </div>
                        </ul>
                        <div>
                            <p className='mb-4'><h2>Border countries: </h2></p>
                            <div className='grid grid-cols-4 gap-4 drop-shadow-lg'>
                                {country.borders?.map((border)=> (
                                <span className='dark:bg-[#2B3945] bg-[#FFFFFF] py-2 text-center w-full rounded-lg'>{border}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default CountryPage