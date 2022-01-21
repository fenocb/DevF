

const NavBar = ({brand}) => {
  
  return (
    <nav className="nav bar navbar-dark bg-dark">
      <div className='container'>
        <a href="/" className="navbar-brand text-uppercase">{brand}</a>
      </div>
    </nav>
  );
}

export default NavBar;
