import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DarkMode = ({ color }) => {
  return (
    <FontAwesomeIcon
      icon="fa-solid fa-moon"
      size="xl"
      style={{ color: color }}
    />
  );
};
