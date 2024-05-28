import { Helmet } from 'react-helmet';
import { APP_NAME } from '../../../../constants/app';

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>
        {APP_NAME} {title !== undefined ? `- ${title}` : ''}
      </title>
    </Helmet>
  );
};

export default Head;
