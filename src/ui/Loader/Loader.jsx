import Head from '../../components/dayrade/common/Head';

const Loader = ({ fullPage = true, title }) => {
  return (
    <>
      {title !== undefined && <Head title={title} />}
      <div className={`${!fullPage ? 'not-full-page' : ''}`}>
        <div className={`loader-container ${fullPage ? 'full-page' : ''}`}>
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
