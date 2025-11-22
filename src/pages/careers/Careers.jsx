import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  // UseLoaderData is a react-router hook that takes loader as prop and resolves the json data found from the response to an usable data
  const careers = useLoaderData().map(career => (//Here, parenthesis is used instead of curly braces because, it is returning jsx
    <Link 
      to={career.id.toString()}//Rest of the address will be inserted from before and here only the param is passed
      key={career.id}>
        <p>{career.title}</p>
        <p>Based in {career.location}</p>
    </Link>
  ))

  return (
    <div className='careers'>
        {careers}
    </div>
  )
}


// Loader Function
export const careerLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json();
}