
import "./indexnav.css";
import CartWidget from "../Cart/cartWidget";
const NavBar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary navflex div-m">
      <div className="container-fluid div-nav">
        <a className="navbar-brand" href="#">NytSports</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
            </li>
            <   li className="nav-item">
            <a className="nav-link" href="#">Offers</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="#">About us</a>
                </li>
            </ul>
        </div>
        <div className="nav-der">
          <CartWidget number={15} />
        </div>
    </div>
    </nav>
</div>
  )
}

export default NavBar;

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>