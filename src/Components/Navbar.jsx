import { Link } from "react-router"


function Navbar(){
    return(
        <>
            <div>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/characters">Characters</Link>
            </div>
        </>
    )
}

export default Navbar