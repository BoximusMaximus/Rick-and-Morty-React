import Navbar from "./Navbar"

function Homepage(){
    return (
        <>
            <Navbar/>
            <h1>
                Homepage!
            </h1>
            <div>
                <h3>
                    Welcome to the Rick and Morty homepage
                </h3>
            </div>
            <div>
                <p>
                    This project is showing my skills with the REACT ROUTER DOM
                </p>
            </div>
            <div>
                <a href="https://www.hulu.com/series/4e0f6374-fc81-4da2-b7a9-f7f8c29e7acc"> Click me to watch Rick and Morty</a>
            </div>
        </>
    )
}

export default Homepage