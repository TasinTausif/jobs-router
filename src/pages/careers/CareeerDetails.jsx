import { useLoaderData, useParams } from "react-router-dom"

export default function CareeerDetails() {
  //With the following react router hook, all the parameters of the address path can be accessed and destructured as per the name used in the Route 
  //   const {id} = useParams();

  const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting from {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam eius, voluptatibus obcaecati perferendis soluta repudiandae optio qui est debitis ea harum odio praesentium enim explicabo omnis exercitationem! Consequuntur obcaecati nesciunt libero dicta, ratione consequatur est similique, cum eveniet voluptatem nemo ad maiores necessitatibus, pariatur cupiditate assumenda eum vero inventore.</p>
        </div>
    </div>
  )
}

// Here react-router element params will take out all the parameters(all the values starting with a :, ex:id) available in the address.
export const careerDetailsLoader = async({params}) => {
    const {id} = params//Destructuring the params as given in the path
    const res = await fetch('http://localhost:4000/careers/' + id)

    return res.json()
}