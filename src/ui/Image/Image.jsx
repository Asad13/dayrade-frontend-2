const Image = ({ src, alt, width, height, loading, classNames, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames !== undefined ? classNames : ''}
      style={style}
      loading={loading ?? 'lazy'}
    />
  );
};

export default Image;
