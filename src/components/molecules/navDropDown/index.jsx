export const NavDropDown = ({ children, className, isDropDown }) => {
  return (
    <div
      className={`${className} absolute text-md  z-50 bg-white shadow-md ${
        isDropDown ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
