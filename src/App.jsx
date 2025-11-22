import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Faq from './pages/help/Faq.jsx';
import Contact from './pages/help/Contact.jsx';
import NotFound from './pages/NotFound.jsx'
import Careers, {careerLoader} from './pages/careers/Careers.jsx'
import CareeerDetails, { careerDetailsLoader } from './pages/careers/CareeerDetails.jsx';

// Layouts
import RootLayout from './layouts/RootLayout.jsx';
import HelpLayout from './layouts/HelpLayout.jsx';
import CareersLayout from './layouts/CareersLayout.jsx';

const route = createBrowserRouter(
  createRoutesFromElements(
    // The element in parent will act as a layout for the child elements
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />{/*By mentioning index inside a path, it is the index of the path related to the parent */}
      <Route path="about" element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq/>}/>  
        <Route path='contact' element={<Contact/>}/>  
      </Route>
      <Route path='careers' element={<CareersLayout/>}>
        <Route 
          index 
          element={<Careers/>}
          loader={careerLoader}// Passing the loader function
          />
          <Route 
            path=':id'//Here, using a colon before the param will convert the path into a variable
            element={<CareeerDetails />}
            loader={careerDetailsLoader}
          />
      </Route>

      {/* The Route below will take to the page that does not match with the route above */}
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (

    // Old Approach
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>Job Portal</h1>
    //       {/* Link or Navlink finds if matched route is found. Then in the Route, it swaps current data with the element */}
    //       <NavLink to='/'>Home</NavLink>
    //       <NavLink to='about'>About</NavLink>{/* In the NavLink, it adds some additional features like adding a class named active automatically that is not available in the Link */}
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route index element={<Home />} />{/* Since it's the index page or root, here index can be used instead of mentioning the path*/}
    //       <Route path="about" element={<About />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>

    // In the first approach, BrowserRouter was created from before and Routes were passed individually. But in this approach, RouteProvider takes router param that takes a self created BrowserRouter
    <RouterProvider router={route}/>
  );
}