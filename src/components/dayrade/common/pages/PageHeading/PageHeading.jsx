const PageHeading = ({
  title,
  containerClassNames,
  containerStyle,
  classNames,
  style,
}) => {
  return (
    <div
      className={`page-heading-container ${
        containerClassNames !== undefined && containerClassNames
      }`}
      style={containerStyle !== undefined ? containerStyle : {}}
    >
      <h1
        className={`page-heading ${classNames !== undefined && classNames}`}
        style={style !== undefined ? style : {}}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
