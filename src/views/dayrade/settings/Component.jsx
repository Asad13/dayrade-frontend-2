import { lazy, useTransition } from 'react';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import Head from '../../../components/dayrade/common/Head';
import PageContainer from '../../../components/dayrade/common/pages/PageContainer';
import SuspenseBoundary from '../../../components/dayrade/utils/SuspenseBoundary';
import { Tab, TabPanel, Select } from '../../../ui';
import { userQuery } from './loader';

const title = 'Settings';

const TabValue = {
  Profile: 'profile',
  Password: 'password',
  'Sterling key': 'sterling_key',
  Notifications: 'notifications',
};

const options = Object.entries(TabValue).map(([key, value]) => ({
  value: value,
  label: key,
}));

const Profile = lazy(() =>
  import('../../../components/dayrade/settings/Profile')
);
const Password = lazy(() =>
  import('../../../components/dayrade/settings/Password')
);
const SterlingKey = lazy(() =>
  import('../../../components/dayrade/settings/SterlingKey')
);
const Notifications = lazy(() =>
  import('../../../components/dayrade/settings/Notifications')
);

export const Component = () => {
  useLoaderData();

  const { data } = useSuspenseQuery(userQuery());

  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const selectedTab = searchParams.get('tab') ?? TabValue.Profile;

  const handleTabSelect = (tab) => {
    startTransition(() => {
      setSearchParams({ tab: tab });
    });
  };

  console.log(data);

  return (
    <>
      <Head title={title} />
      <PageContainer>
        <h1 className="page-heading tw-mb-4 tw-ml-[57px] lg:tw-ml-0">
          Settings
        </h1>
        <div className="settings-page-container">
          <div
            className="tabs-container horizontal-tabs-container"
            aria-label="Settings Tabs"
          >
            {Object.entries(TabValue).map(([key, value]) => (
              <Tab
                key={value}
                classNames={`tab ${selectedTab === value && 'selected-tab'}`}
                id={`tab-${value}`}
                ariaSelected={selectedTab === value}
                ariaControls={`tabpanel-${value}`}
                tabIndex={value === TabValue.Profile ? 0 : -1}
                onClick={() => handleTabSelect(value)}
              >
                {key}
              </Tab>
            ))}
          </div>
          <div
            className="tabs-container tabs-select-container"
            aria-label="Select Settings Tabs"
          >
            <Select
              options={options}
              initialSelectedValuePos={0}
              selectValue={(value) => handleTabSelect(value)}
            />
          </div>
          <div className={`tabpanels-container ${isPending && 'loading'}`}>
            <SuspenseBoundary>
              {(selectedTab === TabValue.Profile || selectedTab === null) && (
                <TabPanel
                  id={`tabpanel-${TabValue.Profile}`}
                  ariaLabelledby={`tab-${TabValue.Profile}`}
                >
                  <Profile data={data?.data} />
                </TabPanel>
              )}
              {selectedTab === TabValue.Password && (
                <TabPanel
                  id={`tabpanel-${TabValue.Password}`}
                  ariaLabelledby={`tab-${TabValue.Password}`}
                >
                  <Password />
                </TabPanel>
              )}
              {selectedTab === TabValue['Sterling key'] && (
                <TabPanel
                  id={`tabpanel-${TabValue['Sterling key']}`}
                  ariaLabelledby={`tab-${TabValue['Sterling key']}`}
                >
                  <SterlingKey />
                </TabPanel>
              )}
              {selectedTab === TabValue.Notifications && (
                <TabPanel
                  id={`tabpanel-${TabValue.Notifications}`}
                  ariaLabelledby={`tab-${TabValue.Notifications}`}
                >
                  <Notifications />
                </TabPanel>
              )}
            </SuspenseBoundary>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

Component.displayName = 'Settings';
