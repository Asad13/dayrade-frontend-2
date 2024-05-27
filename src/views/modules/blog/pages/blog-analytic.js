import React, { memo, Fragment, useRef, useEffect, useState } from "react";

// React-bootstrap
import { Row, Col, Button, Dropdown, Image } from "react-bootstrap";

//Apexcharts
import Chart from "react-apexcharts";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//Component
import Card from "../../../../components/bootstrap/card";
import CustomToggle from "../../../../components/dropdowns";
import AnalyticsCard from "../components/analytics-card";
import Blogcard from "../components/blogcard";

//Img
import img1 from "../../../../assets/modules/blog/images/blog-avatar/06.png";
import img2 from "../../../../assets/modules/blog/images/blog-avatar/02.png";
import img3 from "../../../../assets/modules/blog/images/blog-avatar/03.png";
import img4 from "../../../../assets/modules/blog/images/blog-avatar/04.png";
// import img5 from "../../../../assets/modules/blog/images/blog-avatar/05.png";
import img6 from "../../../../assets/modules/blog/images/blog-analytic/24.png";
import img7 from "../../../../assets/modules/blog/images/blog-analytic/27.png";
import img8 from "../../../../assets/modules/blog/images/blog-avatar/02.png";
import img9 from "../../../../assets/modules/blog/images/blog-avatar/03.png";
import img10 from "../../../../assets/modules/blog/images/blog-avatar/04.png";
import img11 from "../../../../assets/modules/blog/images/blog-avatar/05.png";
// import img12 from "../../../../assets/modules/blog/images/blog-avatar/06.png";
// import img13 from "../../../../assets/modules/blog/images/blog-avatar/07.png";

//Hooks
import useDataTable from "../../../../components/hooks/useDatatable";

import $ from "jquery";
// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";
//Data
const tableData = [
  {
    user: {
      img: img2,
      name: "Anne Hathaway",
      email: "anneh@example.com",
    },
    country: "UK",
    number: "19",
    detail: "28",
  },
  {
    user: {
      img: img4,
      name: "Jhon Doe",
      email: "jhondoe@example.com",
    },
    country: "India",
    number: "43",
    detail: "65",
  },
  {
    user: {
      img: img1,
      name: "Oscar Phelps",
      email: "oscarp@example.com",
    },
    country: "USA",
    number: "13",
    detail: "48",
  },
  {
    user: {
      img: img3,
      name: "Willow Smith",
      email: "willows@example.com",
    },
    country: "UK",
    number: "31",
    detail: "25",
  },
];

const bloganalytic = memo(() => {
  const [show, setShow] = useState(false)
  useSelector(SettingSelector.theme_color);

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}info`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    return {
      primary: color1.trim(),
      info: color2.trim(),
      warning: color4.trim(),
      primary_light: color3.trim(),
    };
  };
  const variableColors = getVariableColor();
  // const colors = [variableColors.primary, variableColors.info];
  const colors = [
    variableColors.primary,
    variableColors.info,
    variableColors.warning,
  ];
  useEffect(() => {
    return () => colors;
  });
  const chart1 = {
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          dynamicAnimation: {
            enabled: true,
            speed: 400,
          },
        },
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      markers: {
        size: 6,
        colors: "#FFFFFF",
        strokeColors: colors,
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 0,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "Mobile",
        data: [10, 82, 75, 68, 47, 60, 49, 91, 108],
      },
    ],
  };
  const chart2 = {
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          dynamicAnimation: {
            enabled: true,
            speed: 400,
          },
        },
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
      },

      markers: {
        size: 6,
        colors: "#FFFFFF",
        strokeColors: colors,
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 0,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
      },
      grid: {
        show: true,
        strokeDashArray: 3,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Desktops",
        data: [20, 51, 65, 21, 39, 42, 62, 51, 18],
      },
      {
        name: "Mobile",
        data: [80, 62, 55, 58, 87, 50, 49, 41, 16],
      },
    ],
  };
  const chart3 = {
    series: [72.5],
    options: {
      // chart: {},
      // colors: ["#ff6600", "#f16a1b"],
      labels: ["Storage"],
      chart: {},
      colors: colors,
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "60%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
            },
            value: {
              fontSize: "24px",
              show: true,
              formatter: function (val) {
                return "+" + val + "%";
              },
            },
          },
        },
      },

      stroke: {
        lineCap: "smooth",
      },
    },
    // series: [70],
  };

  const chart4 = {
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      yaxis: {
        show: true,
        tickAmount: 6,
        min: 0,
        max: 120,
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          columnWidth: "18%",
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Series-1",
        data: [20, 70, 35, 24, 60, 50, 20],
      },
      {
        name: "Series-2",
        data: [60, 20, 70, 80, 20, 43, 30],
      },
    ],
  };
  const chart5 = {
    options: {
      colors: [variableColors.primary,
      variableColors.warning,
      variableColors.info,],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "13px",
              show: true,
            },
            value: {
              fontSize: "16px",
              show: true,
            },
          },
          hollow: {
            size: "25%",
          },
          track: {
            margin: 8,
            strokeWidth: "70%",
          },
        },
      },
      labels: ["Info Blogs", "Food Blogs", "Lifestyle Blogs"],
    },
    series: [65, 70, 78],
  };

  //columns
  const columns = useRef([
    {
      title: "User",
      data: "user",
      render: function (row) {
        return `<div class="d-flex align-items-center">
      <a href=""><div class="d-flex align-items-center gap-3">
      <img class="img-fluid avatar-50 rounded-circle" src="${row.img}" alt="profile" loading="lazy" />
      <div><span class="fw-bold">${row.name}</span>
      <p class="text-body mb-0">${row.email}</p>
      </div></div></a>
      </div>`;
      },
    },
    {
      title: "Country",
      data: "country",
    },
    {
      title: "Contact No.",
      data: "number",
    },
    {
      title: "More Details",
      data: "detail",
    },
  ]);

  const eComtableRef = useRef(null);

  useDataTable({
    tableRef: eComtableRef,
    columns: columns.current,
    data: tableData,
    isFilterColumn: true,
  });

  //   if ($.fn.DataTable.isDataTable('#tableData')) {
  //   $('#tableData').DataTable().destroy();
  // }
  if ($.fn.DataTable.isDataTable("#datatable-ecom")) {
    var datatable = $("#datatable-ecom").DataTable();
    if (datatable.hasOwnProperty("destroy")) {
      datatable.destroy();
    }
  }

  return (
    <Fragment>
      
        <div className="d-flex flex-wrap justify-content-between mb-4">
          <h3 className="mb-0">Analytics Overview</h3>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              onClick={() => setShow(!show)}
              variant={`text-gray dropdown-toggle ${show ? 'show' : ''}`}
              id="dropdownMenuButton22"
            >
              Last 30 Days
            </Dropdown.Toggle>
            <ul className={`dropdown-menu ${show ? 'show' : ''}`} style={{ right: '0rem' }}
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
            </ul>
          </Dropdown>
        </div>
        <Row>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="862.2k"
              content="Last 7 Days Follower Growth"
              number="10%"
              textColor="text-danger"
              content1="Decrease from last week"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="4.1M"
              content="Last 30 Days Follower Growth"
              number="24%"
              textColor="text-danger"
              content1="Decrease from last week"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="143.7k"
              content="Average Daily Growth"
              number="10%"
              textColor="text-success"
              content1="Change"
            />
          </Col>
          <Col lg="6" xl="3" md="6">
            <AnalyticsCard
              count="4.2M"
              content="Average Monthly Growth"
              number="10%"
              textColor="text-danger"
              content1="Change"
            />
          </Col>
          <Col lg="8">
            <Card>
              <Card.Header className="flex-wrap d-flex justify-content-between align-items-center">
                <Card.Header.Title>
                  <h4 className="card-title">Followers</h4>
                </Card.Header.Title>
                <ul
                  className="nav nav-tabs nav-tunnel nav-slider mb-0"
                  data-toggle="slider-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Button
                      bsPrefix="nav-link active d-flex align-items-center"
                      data-bs-toggle="tab"
                      data-bs-target="#blog-chart-1"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Growth
                    </Button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Button
                      bsPrefix="nav-link d-flex align-items-center"
                      data-bs-toggle="tab"
                      data-bs-target="#blog-chart-2"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Fall
                    </Button>
                  </li>
                </ul>
              </Card.Header>
              <Card.Body>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="blog-chart-1"
                    role="tabpanel"
                  >
                    <Chart
                      options={chart1.options}
                      series={chart1.series}
                      type="line"
                      height="350"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="blog-chart-2"
                    role="tabpanel"
                  >
                    <Chart
                      options={chart2.options}
                      series={chart2.series}
                      type="line"
                      height="350"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <h4 className="mb-0 card-title">Users Traffic</h4>
                {/* <Button className="btn btn-sm btn-primary">View All</Button> */}
              </Card.Header>
              <Card.Body className="card-thumbnail px-0">
                <div className="table-responsive custom-table-2">
                  <table
                    id="datatable-ecom"
                    ref={eComtableRef}
                    className="data-tables table custom-table movie_table"
                  ></table>
                </div>
              </Card.Body>
            </Card>
            <div>
              <div className="mb-4">
                <h3 className="mb-0">Trending Blogs</h3>
              </div>
              <div className="overflow-hidden d-slider1 ">
                <Swiper
                  className="p-0 m-0 mb-2 list-inline "
                  slidesPerView={2}
                  spaceBetween={32}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    550: { slidesPerView: 2 },
                    991: { slidesPerView: 2 },
                    1400: { slidesPerView: 2 },
                    1500: { slidesPerView: 2 },
                    1920: { slidesPerView: 2 },
                    2040: { slidesPerView: 2 },
                    2440: { slidesPerView: 2 }
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                >
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img7}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Expierience: Travel Tales From India and Abroad."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img6}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Ultimate Travel Guide: What To Do, See & Eat."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img7}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Expierience: Travel Tales From India and Abroad."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="card-slide">
                    <div>
                      <Blogcard
                        blogImage={img6}
                        class-name="mb-0"
                        blogDate="02 Dec 2021"
                        blogcontent="The Ultimate Travel Guide: What To Do, See & Eat."
                        blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-0 mt-sm-md-0">
            <Card>
              <Card.Header>
                <h4 className="mb-0">New Visitors </h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="7" xl="6" md="6">
                    <Chart
                      options={chart3.options}
                      series={chart3.series}
                      type="radialBar"
                      height="185"
                      width="226"
                    />
                  </Col>
                  <Col
                    lg="5"
                    xl="6"
                    md="6"
                    className="p-0 d-flex align-items-center justify-content-center flex-column"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <h4 className="text-primary mb-0">1,293</h4>
                      <p className="mb-0 ">Daily</p>
                    </div>
                    <div className="d-flex align-items-center gap-3 my-4">
                      <h4 className="text-primary mb-0">10,237</h4>
                      <p className="mb-0 ">Monthly</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <h4 className="text-primary mb-0">11,293</h4>
                      <p className="mb-0 ">Yearly</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-5">
              <Card.Header>
                <h4 className="mb-0">Top Social Media Shared</h4>
              </Card.Header>
              <Card.Body className=" card-thumbnail d-flex flex-column gap-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      className="img-fluid avatar-50 rounded-circle"
                      src={img8}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Facebook</h6>
                    </div>
                  </div>
                  <strong>89k</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      className="img-fluid avatar-50 rounded-circle"
                      src={img9}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Whatsapp</h6>
                    </div>
                  </div>
                  <strong>48k</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      className="img-fluid avatar-50 rounded-circle"
                      src={img10}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">UC Community</h6>
                    </div>
                  </div>
                  <strong>36k</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      className="img-fluid avatar-50 rounded-circle"
                      src={img11}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Twitter</h6>
                    </div>
                  </div>
                  <strong>30k</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      className="img-fluid avatar-50 rounded-circle"
                      src={img11}
                      alt="01"
                    />
                    <div>
                      <h6 className="mb-0">Instagram</h6>
                    </div>
                  </div>
                  <strong>65k</strong>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <h4 className="mb-0">Most Viewed Blogs</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="12" xl="6" md="6">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="radialBar"
                      height="185"
                    />
                  </Col>
                  <Col
                    lg="12"
                    xl="6"
                    md="6"
                    className="p-0 d-flex align-items-center justify-content-center"
                  >
                    <div className="">
                      <p>
                        <svg
                          width="8"
                          className="me-2 text-primary"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="currentColor" />
                        </svg>
                        {" "}Informative Blogs - 75%
                      </p>

                      <p>
                        <svg
                          width="8"
                          className="me-2 text-info"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="currentColor" />
                        </svg>
                        {" "}Food Blogs - 80%
                      </p>

                      <p>
                        <svg
                          width="8"
                          className="me-2 text-warning"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="currentColor" />
                        </svg>
                        {" "}Lifestyle Blogs - 85%
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="align-items-center">
                <h4 className="card-title mb-0">Devices</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    as="svg"
                    width="20"
                    className="icon-20"
                    id="news-dropdown"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="12" r="3" fill="currentcolor" />
                    <circle cx="12" cy="12" r="3" fill="currentcolor" />
                    <circle cx="21" cy="12" r="3" fill="currentcolor" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className=" dropdown-menu-end"
                    aria-labelledby="news-dropdown"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body className="pt-0">
                <Chart
                  className="d-activity"
                  options={chart4.options}
                  series={chart4.series}
                  type="bar"
                  height="350"
                />
                <div className="col-lg-12 p-0 d-flex align-items-center justify-content-center">
                  <div className="text-center d-flex justify-content-between">
                    <p className="mx-2">
                      <svg
                        width="8"
                        className="me-2 text-primary"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="currentColor" />
                      </svg>
                      Mobile - 85%
                    </p>
                    <p className="mx-2">
                      <svg
                        width="8"
                        className="me-2 text-info"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="currentColor" />
                      </svg>
                      Laptop - 50%
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
    </Fragment>
  );
});

bloganalytic.displayName = "bloganalytic";
export default bloganalytic;
