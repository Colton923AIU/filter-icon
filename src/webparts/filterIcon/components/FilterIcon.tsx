import * as React from "react";
import styles from "./FilterIcon.module.scss";
import { IFilterIconProps } from "./IFilterIconProps";

const FilterIcon: React.FC<IFilterIconProps> = (props) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    props.toggle(props.name);
    setIsActive(!isActive);
  }, []);
  return (
    <div
      onClick={() => {
        props.toggle(props.name);
        setIsActive(!isActive);
      }}
      style={{
        opacity: isActive ? 1 : 0.7,
        cursor: "pointer",
      }}
      className={styles.filterIconBase}
      dangerouslySetInnerHTML={{
        __html: props.icon, // Render the icon HTML
      }}
      id={props.tagTitle}
    />
  );
};

export default FilterIcon;
