import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); 
  };
  const handleNewClClick = (e) => {
    e.preventDefault();
    navigate("/form"); 
  };

  return (
    <nav className="bg-paletteBlue p-4 w-full flex justify-between ">
      <Logo />
      <div className="flex ">
        <img
          onClick={handleClick}
          className="w-8 cursor-pointer"
          src="/Home.svg"
          alt="Home logo"
        />
        <button
          onClick={handleNewClClick}
          className="bg-paletteYellow font-bold text-white px-4 rounded ml-4 hover:bg-amber-200"
        >
          New Checklist
        </button>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <img className="w-12 cursor-pointer" src="/Logo.svg" alt="Website logo" />
  );
};

export default NavBar;
