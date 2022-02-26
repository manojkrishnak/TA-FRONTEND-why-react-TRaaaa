function Header() {
    return (
        <>
        <header className="header">
            <div className="container flex justify-bt align-ct">
                <a className="brand" href="#">
                    <h1>XYZ</h1>
                </a>

                <nav>
                    <ul className="flex justify-bt">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}


export default Header;