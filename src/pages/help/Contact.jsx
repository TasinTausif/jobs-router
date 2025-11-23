import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  // The following hook will hold the form data
  const data = useActionData()

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {/* Error will be shown bellow for failure of frontend validation */}
        {data && data.error && <p style={{ color: "red" }}>{data.error}</p>}
      </Form>
    </div>
  )
}

// Action Function for the form Submission
export const contactAction = async({request}) => {
  const data = await request.formData()

  const submittedData = {
    email: data.get('email'),
    message: data.get('message')
  }

  // Frontend validation
  if(submittedData.message.length > 10){
    return {error: 'Message must not be more than 10 characters'}
  }

  // Instead of console.log, data will be sent to an API from here
  console.log(submittedData)

  return redirect('/')
}