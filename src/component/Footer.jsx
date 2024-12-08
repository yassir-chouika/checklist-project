const Footer = () => {
  return (
    <div className="bg-paletteBlue p-4 w-full flex justify-center ">
      <Logo />
    </div>
  );
};
const Logo = () => {
  return (
    <img
      className="w-44 cursor-pointer"
      src="/preflight-logo.svg"
      alt="Website logo"
    />
  );
};

export default Footer;
