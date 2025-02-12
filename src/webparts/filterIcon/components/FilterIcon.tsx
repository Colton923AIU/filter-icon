import * as React from "react";
import styles from "./FilterIcon.module.scss";
import { IFilterIconProps } from "./IFilterIconProps";

const FilterIcon: React.FC<IFilterIconProps> = ({
  icon,
  filterName,
  toggle,
}) => {
  const [active, setActive] = React.useState<boolean | null>(null);

  const handleToggle = () => {
    const newValue = toggle();
    setActive(newValue);
  };

  React.useEffect(() => {
    if (active === null) {
      setTimeout(() => {
        handleToggle();
      }, 1000);
    }
  }, []);

  if (!filterName) return null;
  if (active === null) return null;
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handleToggle();
      }}
      className={
        active
          ? `${styles.filterIconBase} ${styles.active}`
          : styles.filterIconBase
      }
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
      id={filterName}
      role="button"
      tabIndex={0}
    />
  );
};

export default FilterIcon;
