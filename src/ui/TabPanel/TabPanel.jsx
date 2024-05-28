const TabPanel = ({ children, classNames, styles, id, ariaLabelledby }) => {
  return (
    <div
      role="tabpanel"
      id={id}
      className={`${classNames !== undefined && classNames}`}
      style={styles !== undefined ? styles : {}}
      tabIndex={0}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </div>
  );
};

export default TabPanel;
