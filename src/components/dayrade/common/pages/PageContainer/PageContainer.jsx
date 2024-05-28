const PageContainer = ({ children, classNames, style }) => {
  return (
    <div
      className={`page-container ${classNames !== undefined && classNames}`}
      style={style !== undefined ? style : {}}
    >
      {children}
    </div>
  );
};

export default PageContainer;
