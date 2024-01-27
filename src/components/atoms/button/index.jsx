export const Button = ({ children, click, className }) => {
  return (
    <button
      role="button"
      title="button-component"
      aria-label="button-component"
      aria-labelledby="button-component"
      className={`w-auto p-2 ${className}`}
      onClick={click}>
      {children}
    </button>
  );
};
