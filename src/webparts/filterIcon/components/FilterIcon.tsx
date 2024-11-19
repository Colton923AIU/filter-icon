import * as React from "react";
import styles from "./FilterIcon.module.scss";
import { IFilterIconProps } from "./IFilterIconProps";

const FilterIcon: React.FC<IFilterIconProps> = (props) => {
  const [isActive, setIsActive] = React.useState<boolean>(
    props.globalStateService.getState(props.name)
  );

  // Effect to subscribe to state changes
  React.useEffect(() => {
    const handleStateChange = (newState: boolean) => {
      setIsActive(newState);
    };

    // Subscribe to global state changes
    props.globalStateService.subscribe(props.name, handleStateChange);

    // Cleanup subscription on unmount
    return () => {
      // NOTE: Implement unsubscribe logic if `GlobalStateService` supports it
    };
  }, [props.globalStateService, props.name]);

  const handleClick = () => {
    // Toggle the state for the given name
    console.log("current state of get state: ");
    console.log(props.globalStateService.getState(props.name));
    props.globalStateService.toggleState(props.name);
  };

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
