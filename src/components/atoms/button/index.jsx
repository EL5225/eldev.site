export const Button = ({ children, click, className }) => {
  return (
    <button className={`w-auto p-2 ${className}`} onClick={click}>
      {children}
    </button>
  );
};
