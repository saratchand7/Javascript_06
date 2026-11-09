import { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";

const initialDoctors = [
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

function Home({ newdoctor }) {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  useEffect(() => {
    if (newdoctor) {
      setDoctors((previousDoctors) => {
        const alreadyAdded = previousDoctors.some(
          (doctor) => doctor.id === newdoctor.id
        );

        return alreadyAdded ? previousDoctors : [...previousDoctors, newdoctor];
      });
    }
  }, [newdoctor]);

let filteredDoctors = doctors.filter((val) => {
    return (val.name.toLowerCase().includes(search.toLowerCase())
    &&
    specialization === '' || val.specialization.toLowerCase() == specialization

)
})

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Search for a doctor"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        aria-label="Specialization"
        value={specialization}
        onChange={(event) => setSpecialization(event.target.value)}
      >
        <option value="">All</option>
        <option value="bones">Bones</option>
        <option value="heart">Heart</option>
        <option value="muscles">Muscles</option>
      </select>

      <h1>Available Doctors</h1>

      {filteredDoctors.length > 0 ? (
        <div className="doctorcontainer">
          {filteredDoctors.map((doctor) => (
            <Doctorcard
              key={doctor.id}
              name={doctor.name}
              age={doctor.age}
              gender={doctor.gender}
              specialization={doctor.specialization}
              salary={doctor.salary}
            />
          ))}
        </div>
      ) : (
        <h2>No Doctors Found</h2>
      )}
    </div>
  );
}

export default Home;