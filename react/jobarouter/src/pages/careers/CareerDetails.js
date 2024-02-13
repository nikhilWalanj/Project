import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {

  const {id}=useParams();
  const career=useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for{career.title}</h2>
      <p>Starting salary:{career.salary}</p>
      <p>Location:{career.location}</p>
      <div className='details'>
      <p>It looks like you entered "lorem ipsum 34," which appears to be a combination of the placeholder text "Lorem Ipsum" and the number "34." If you have a specific question or if there's something specific you'd like assistance with, please provide more context or details, and I'll do my best to help!
      </p>
      </div>
    </div>
  )
}

//Loader function
export const careerDetailsLoader=async({params})=>{

  const {id}=params;
  const res=await fetch('http://localhost:4000/careers/'+id)

  if(!res.ok)
    throw Error('Could not find that career')

  return res.json()
}