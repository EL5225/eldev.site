export const NavDropDown = ({ children, className, isDropDown }) => {
  return (
    <div
      className={`${className} absolute text-md p-4 z-50 bg-white shadow-md ${
        isDropDown ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
