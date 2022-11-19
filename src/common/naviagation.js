

const Naviagation = (props) => {
    return <>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {
                        props.titleList.map((item, index) => {
                            return <li className="nav-item active" key={index}>
                                <a className="nav-link" href={item.Uri}>{item.Name} <span className="sr-only"></span></a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    </>
}

export default Naviagation;