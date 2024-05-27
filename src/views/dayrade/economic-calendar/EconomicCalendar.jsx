import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
// react-bootstrap
import { Table } from 'react-bootstrap';
import StockUpdate from '../../../components/dayrade/stock-update';
// componets
import Card from '../../../components/bootstrap/card';

//img
// import shapes1 from '../../../assets/images/shapes/01.png';

const recentEvents = [
  {
    title: 'Cameron Williamson - FED',
    date: '14 DEC 11:40 PM',
  },
  {
    title: 'Brooklyn Simmons - Uk Gov.',
    date: '14 DEC 10:50 PM',
  },
  {
    title: 'Robert Fox - US President',
    date: '14 DEC 10:30 PM',
  },
  {
    title: 'Leslie Alexander - Other Meeting',
    date: '14 DEC 8:10 PM',
  },
  {
    title: 'Jane Cooper - Canada Day',
    date: '14 DEC 7:15 PM',
  },
];

const demoTableData = {
  time: '8:00',
  currency: 'GBP',
  event: 'Goods Trade',
  impact: '',
  actual: '',
  consensus: '£-4.5B',
  previous: '£-4.5B',
  link: '',
};

const table = [];
for (let i = 0; i < 20; i++) {
  table.push(demoTableData);
}

const EconomicCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="dayrade-screensize-page-container">
        <div className="dayrade-ec-container">
          <div className="dayrade-ec-calendar-container">
            <div className="dayrade-ec-calendar-wrapper">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="scrollspy-example dayrade-ec-calendar-scrollcontainer"
                tabIndex="0"
              >
                <Card
                  className="overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Card.Body className="p-0">
                    <Table
                      striped
                      borderless
                      responsive
                      className="mb-0 dayrade-ec-table"
                    >
                      <thead>
                        <tr>
                          <th>TIME</th>
                          <th>CURRENCY</th>
                          <th>EVENT</th>
                          <th>IMPACT</th>
                          <th>ACTUAL</th>
                          <th>CONSENSUS</th>
                          <th>PREVIOUS</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                {/* <div className="d-flex align-items-center">
                                  <img
                                    className="rounded bg-primary-subtle img-fluid avatar-40 me-3"
                                    src={item.image}
                                    alt="profile"
                                  />
                                  <h6>{item.name}</h6>
                                </div> */}
                                {item.time}
                              </td>
                              <td>{item.currency}</td>
                              <td>{item.event}</td>
                              <td>{item.impact === '' ? '-' : item.impact}</td>
                              <td>{item.actual === '' ? '-' : item.actual}</td>
                              <td>{item.consensus}</td>
                              <td>
                                {/* <div className="mb-2 d-flex align-items-center">
                                  <h6>{item.percent}%</h6>
                                </div> */}
                                {item.previous}
                              </td>
                              <td>
                                <Link to={item.link}>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                                      stroke="#D7D7D7"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="dayrade-ec-calendar-pagination-container">
              <div className="bd-example">
                <nav
                  aria-label="Standard pagination example"
                  className="dayrade-ec-pagination-wrapper"
                >
                  <ul className="pagination dayrade-ec-pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example dayrade-ec-aside-container"
            tabIndex="0"
          >
            <Card data-aos="fade-up" data-aos-delay="600">
              <Card.Body>
                <h6>RECENT EVENTS</h6>
              </Card.Body>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="600">
              <Card.Body>
                {recentEvents.map((event, index) => (
                  <div
                    key={`${event.title}-${event.date}-${index}`}
                    className="mb-2 d-flex profile-media align-items-top"
                  >
                    <div
                      className={`mt-1 profile-dots-pills ${
                        index % 2 === 0 ? 'border-primary' : 'border-secondary'
                      }`}
                    ></div>
                    <div className="ms-4">
                      <h6 className="mb-1 ">{event.title}</h6>
                      <span className="mb-0">{event.date}</span>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="600">
              <Card.Header>
                <Card.Header.Title>
                  <h4>Date</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body>
                <div className="course-picker">
                  <Flatpickr
                    className="d-none"
                    options={{ inline: true /* , minDate: "today" */ }}
                    value={date}
                    onChange={([newDate]) => {
                      setDate(newDate);
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <StockUpdate />
      </div>
    </>
  );
};

export default EconomicCalendar;
