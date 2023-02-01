import logo from "../assets/img/calculator.png";
const Header = () => {
  return (
    <header className="row">
      <img className="header__logo" src={logo} alt="" />
      <div className="header__title">
        <h1>React Counter</h1>
      </div>
    </header>
  );
};
export default Header;
