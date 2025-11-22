import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Job Portal</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                </nav>
            </header>
            <main>
                {/* Outlet matches the parent route's route name with the child's route name and renders the content. Basically if current route is a parent route and it's nested routes content will be showed*/}
                <Outlet/>
            </main>
        </div>
    )
}
