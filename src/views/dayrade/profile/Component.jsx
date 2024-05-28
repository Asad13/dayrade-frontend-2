import Head from '../../../components/dayrade/common/Head';
import PageContainer from '../../../components/dayrade/common/pages/PageContainer';
import PageHeading from '../../../components/dayrade/common/pages/PageHeading';

const title = 'Profile';

export const Component = () => {
  return (
    <>
      <Head title={title} />
      <PageContainer>
        <PageHeading title={title} />
      </PageContainer>
    </>
  );
};

Component.displayName = 'Profile';
