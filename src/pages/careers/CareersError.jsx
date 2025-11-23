import { useRouteError, Link } from "react-router-dom"

export default function() {
  // The following hook will bring the error message that was thrown in any career Route
  const error = useRouteError()

  return (
    <div className="careers-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to Homepage</Link>
    </div>
  )
}
