import React from 'react'
import {useState,useEffect}  from 'react';
import Doctorcard from './Doctorcard';


function Home({newdoctor}) {
    let [doctors,setDoctors]=useState([])

    let [search,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')
    function fetchdata(){
         let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];
    setDoctors(data)

    }
    useEffect(()=>{
      fetchdata()
    },[])


    useEffect(()=>{
      if(newdoctor){
        setDoctors((prev)=>[...prev,newdoctor])
      }
    },[newdoctor])

  let filtereddoctors=doctors.filter((val)=>{
    return (val.name.toLowerCase().includes(search.toLowerCase())
    &&
    specialization==''  || val.specialization.toLowerCase()==specialization
  )
  })

  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search your doctor' />
      <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
        <option value="">All</option>
        <option value="bones">bones</option>
        <option value="heart">heart</option>
        <option value="muscles">muscles</option>
      </select>

        {filtereddoctors.length>0 ?(
        <div className='doctorcontainer'>
          {filtereddoctors.map((doctor)=><Doctorcard key={doctor.id} name={doctor.name} specialization={doctor.specialization} gender={doctor.gender} />)}
        </div>):<h1>doctors not found</h1>}
    </div>
  )
}

export default Home