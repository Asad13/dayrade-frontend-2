import React, { useState } from 'react';
import StockUpdate from '../../../components/dayrade/stock-update';

// componets
import Card from '../../../components/bootstrap/card';

//apexcharts
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

import { countries } from '../../../assets/data/countries';

const colors = ['#cdff7b'];

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState(null);

  const user = {
    profile: {
      first_name: 'Frank',
      last_name: 'Whitekar',
      profile_image_path: null,
      twitch_id: 'twitch_id',
      job_title: 'Designer',
      bio: 'Pretium maecenas arcu, euismod velit viverra. Venenatis ultrices senectus pellentesque pulvinar aenean eget.',
      country: 'CA',
    },
  };

  const charts = [
    {
      title: 'USD Balance',
      value: '$2500',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'Total Shares Traded',
      value: '200',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'No. Of Stocks Traded',
      value: '15',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'No. Of Trades',
      value: '367',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'Total Pnl',
      value: '$367',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'Realized Pnl',
      value: '$367',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'Unrealized Pnl',
      value: '$2500',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
    {
      title: 'Total Notional Traded',
      value: '$1,125,100',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
      data: [65, 80, 70, 62, 85, 82, 94],
    },
  ];

  return (
    <>
      <div className="dayrade-dashboard-container">
        <div className="dayrade-dashboard-charts">
          {charts.map((item, index) => (
            <div
              key={index}
              className={`dayrade-chart-container ${
                selectedChart != null &&
                selectedChart !== item.title &&
                'dayrade-not-selected-chart-container'
              } ${
                selectedChart === item.title &&
                'dayrade-selected-chart-container'
              }`}
            >
              <Card
                className="dayrade-chart"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="dayrade-chart-header">
                  <div className="dayrade-chart-header-container">
                    <div className="dayrade-chart-header-texts">
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          if (selectedChart == null) {
                            setSelectedChart(item.title);
                          } else {
                            setSelectedChart(null);
                          }
                        }}
                      >
                        {selectedChart !== item.title ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 6L18 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <Card.Body className={`dayrade-chart-body`}>
                  <Chart
                    options={{
                      chart: {
                        fontFamily:
                          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        toolbar: {
                          show: false,
                        },
                        sparkline: {
                          enabled: false,
                        },
                      },
                      colors: colors,
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3,
                      },
                      yaxis: {
                        show: true,
                        min: 60,
                        max: 100,
                        stepSize: 10,
                        labels: {
                          show: true,
                          minWidth: 19,
                          maxWidth: 19,
                          style: {
                            colors: '#8A92A6',
                          },
                          offsetX: -5,
                        },
                      },
                      legend: {
                        show: false,
                      },
                      xaxis: {
                        labels: {
                          minHeight: 22,
                          maxHeight: 22,
                          show: true,
                          style: {
                            colors: '#8A92A6',
                          },
                        },
                        lines: {
                          show: false,
                        },
                        categories: item.categories,
                      },
                      grid: {
                        show: false,
                      },
                      fill: {
                        type: 'gradient',
                        gradient: {
                          shade: 'dark',
                          type: 'vertical',
                          shadeIntensity: 0,
                          gradientToColors: undefined,
                          inverseColors: true,
                          opacityFrom: 0.4,
                          opacityTo: 0.1,
                          stops: [0, 50, 80],
                          colors: colors,
                        },
                      },
                      tooltip: {
                        enabled: true,
                      },
                    }}
                    series={[
                      {
                        name: item.title,
                        data: item.data,
                      },
                    ]}
                    type="area"
                    height="100%"
                  />
                </Card.Body>
              </Card>
              {/* <Card>
                <Card.Body>
                  <div className="progress-widget mb-2">
                    <div className="progress-detail">
                      <p className="mb-2">Balance</p>
                    </div>
                  </div>
                </Card.Body>
              </Card> */}
            </div>
          ))}
        </div>
        <div
          className="scrollspy-example dayrade-dashboard-profile"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          tabIndex="0"
        >
          <Card className="" data-aos="fade-up" data-aos-delay="800">
            <Card.Header className={`dayrade-dashboard-profile-image-header`}>
              <h3>Profile</h3>
              <Link to="#" className="dayrade-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Card.Header>
            <Card.Body>
              <img
                className={`dayrade-dashboard-profile-image`}
                src={user.profile.profile_image_path ?? '/images/avatar.png'}
                alt={''}
                width={257}
                height={265}
                loading="eager"
              />
            </Card.Body>
          </Card>
          <Card data-aos="fade-up" data-aos-delay="800">
            <Card.Body>
              <p>
                {
                  (user.profile.twitch_id = null
                    ? `@${user.profile.twitch_id}`
                    : 'No Twitch Id')
                }
              </p>
              <h3 className="dayrade-title">
                {user.profile.first_name + ' ' + user.profile.last_name}
              </h3>
              <p>First Tournament</p>
            </Card.Body>
          </Card>
          <Card data-aos="fade-up" data-aos-delay="800">
            <Card.Header className={`dayrade-dashboard-profile-image-header`}>
              <h3>About</h3>
            </Card.Header>
            <Card.Body>
              <div className="dayrade-dashboard-about-info-container">
                <h4 className="dayrade-title dayrade-dashboard-job-title">
                  {user.profile.job_title ?? ''}
                </h4>
                <p>{user.profile.bio ?? ''}</p>
              </div>
              <div>
                <div className="dayrade-dashboard-about-country-container">
                  <span className="flag-country-select-icon-container">
                    <img
                      className="flag-country-select-icon"
                      src={`/flags/${user.profile.country.toLowerCase()}.svg`}
                      alt={countries[user.profile.country]}
                    />
                  </span>
                  <span className="dayrade-dashboard-about-country-name">
                    {countries[user.profile.country]}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <StockUpdate />
      </div>
    </>
  );
};

export default Dashboard;
