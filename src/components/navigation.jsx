const Navigation = ()=> {
    return(
        <nav className="container">
            <div className="logo">
            <img id="logo-image"src="/images/logo.png" alt="logo" />
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>AboutUs</li>
                <li>ContactUs</li>
            </ul>
            <button className='button'>Login Now</button>
            </div>
        </nav>
    )
}
export default Navigation;