export const HamburgerIcon = ({ className, theme }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 18L20 18"
        stroke={theme === "dark" ? "#ffff" : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={theme === "dark" ? "#ffff" : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={theme === "dark" ? "#ffff" : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
