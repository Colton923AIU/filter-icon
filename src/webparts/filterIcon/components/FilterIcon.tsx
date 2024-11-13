import * as React from "react";
import styles from "./FilterIcon.module.scss";
import { IFilterIconProps } from "./IFilterIconProps";

const FilterIcon: React.FC<IFilterIconProps> = (props) => {
  const handleClick = () => {
    // Toggle the state for the given name (e.g., "Military")
    props.globalStateService.toggleState(props.name);
  };

  const isActive = props.globalStateService.getState(props.name);

  return (
    <div
      onClick={handleClick}
      style={{
        opacity: isActive ? 1 : 0.7,
        cursor: "pointer",
      }}
      className={styles.filterIconBase}
      dangerouslySetInnerHTML={{
        __html: props.icon,
      }}
    />
  );
};

export default FilterIcon;
