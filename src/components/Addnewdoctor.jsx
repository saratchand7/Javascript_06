import {useState} from 'react'
import Home from './Home'

function Addnewdoctor() {
let [name,setName]=useState('')
let [age,setAge]=useState('')
let [salary,setSalary]=useState('')
let [gender,setGender]=useState('')
let [specialization,setSpecialization]=useState('')

let [newdoctor,setNewdoctor]=useState(null)
function handlesubmit(e){
  e.preventDefault()
  setNewdoctor({name,age,salary,gender,specialization,id:Date.now()})
  console.log(newdoctor)
}

  return (
    <div>
      <h1>Add New Doctor</h1>
      <form action="" className='doctorform' onSubmit={handlesubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name ' />
        <input value={specialization}  onChange={(e)=>setSpecialization(e.target.value)} type="text" placeholder='Enter Specialization' />
        <select value={gender}  onChange={(e)=>setGender(e.target.value)} name="" id="">
          <option value="">select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder='Enter Age' />
        <input value={salary} onChange={(e)=>setSalary(e.target.value)} type="text" placeholder='Enter Salary' />
        <button type='submit'> Add doctor</button>
      </form>
      <Home newdoctor={newdoctor}/>
    </div>
  )
}
export default Addnewdoctor