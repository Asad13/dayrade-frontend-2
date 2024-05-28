const Tab = ({
  children,
  classNames,
  styles,
  id,
  ariaSelected,
  ariaControls,
  tabIndex,
  onClick,
}) => {
  return (
    <span
      role="tab"
      id={id}
      className={`tw-cursor-pointer ${classNames !== undefined && classNames}`}
      style={styles !== undefined ? styles : {}}
      aria-selected={ariaSelected}
      aria-controls={ariaControls}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tab;
