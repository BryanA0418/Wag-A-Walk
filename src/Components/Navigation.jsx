import "../ComponentsStyling/Navigation.css"

export default function Navigation(){
    return(
        <div className="nav">
            <i className="fa-solid fa-bars"></i>
            <h1 className="nav-header"><i className="fa-solid fa-paw"></i>Wag-A-Walk</h1>
            <h3 className="nav-header"><i className="fa-solid fa-magnifying-glass"></i>Find a Walker!</h3>
            <h3 className="nav-header">Become a Walker!</h3>
        </div>
    )
}