import { useState } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'


const initialDoctors = [
  { name: 'Jack', age: '25', specialization: 'Cardiologist', gender: 'Male', image: 'https://t4.ftcdn.net/jpg/12/53/53/27/360_F_1253532758_zdbL0bMX1Jxl2hSUOTGmnwRq6vQ3kU7m.jpg' },
  { name: 'Jane', age: '30', specialization: 'Dermatologist', gender: 'Female', image: 'https://t4.ftcdn.net/jpg/20/68/04/95/240_F_2068049585_1BYbx5SfMvzm0lYkEP1QzN4AUCNDZltz.jpg' },
  { name: 'Bob', age: '40', specialization: 'Neurologist', gender: 'Male', image: 'https://t4.ftcdn.net/jpg/06/14/96/05/360_F_614960538_tH1wq7P49GQtze75vi7HNyaeo4oaRuKy.jpg' },
  { name: 'Alice', age: '35', specialization: 'Pediatrician', gender: 'Female', image: 'https://t4.ftcdn.net/jpg/10/20/99/43/240_F_1020994326_1BvcoGRDLSHG7vpJYVriaC2ecxSWYvOl.jpg' },
  { name: 'Charlie', age: '50', specialization: 'Orthopedic Surgeon', gender: 'Male', image: 'https://img.magnific.com/free-photo/3d-cartoon-style-character_23-2151034061.jpg' },
  { name: 'Diana', age: '45', specialization: 'Oncologist', gender: 'Female', image: 'https://t3.ftcdn.net/jpg/13/20/45/26/240_F_1320452688_TSAEcm5JtuQmwXvPTUrgv8D8MQPEQIZH.jpg' },
]

function App() {
  const [doctors, setDoctors] = useState(initialDoctors)
  let [count,setCount] = useState(0)

  return (
    <div>
      {count}
      <button
        onClick={() =>{ setCount(count + 1)
        console.log(count)
      }}>inc</button>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        {doctors.map((doctor) => (
          <Doctorcard key={doctor.id ?? doctor.name} {...doctor} />
        ))}
      </div>
      <Addnewdoctor onAddDoctor={(doctor) => setDoctors((currentDoctors) => [...currentDoctors, doctor])} />
    </div>
  )
}

export default App
