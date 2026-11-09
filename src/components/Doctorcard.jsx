import react from 'react';

function Doctorcard({name, age, specialization, gender, image}) {
    return (
        <div>
            <div>
            <img src={image} alt="" />
            </div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{specialization}</p>
            <p>{gender}</p>
            <button>View details</button>
        </div>
    )
}
export default Doctorcard