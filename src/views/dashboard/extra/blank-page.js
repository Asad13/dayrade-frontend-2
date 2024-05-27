/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Fragment } from "react";

import Card from "../../../components/bootstrap/card";
//ShrimmerComponent as loader
import ShimmerComponent from "./ShimmerComponent";
// react-router
import { Link } from "react-router-dom";
import { Row, Col, Button, Collapse } from "react-bootstrap";
import FilterRating from "../../modules/e-commerce/components/filter-rating";
import FilterOptions from "../../modules/e-commerce/components/filter-options";
import RangeSlider from "../../modules/e-commerce/components/range-slider";

const BlankPage = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(true);
  const [tofilter, setFilter] = useState("");
  
//   const boxStyle = {
//     height: '200px',
//     width: '200px',
//     backgroundColor: 'rgb(0, 191, 255)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '30px',
//     cursor: 'pointer',
//  };
  const fetchData = async () => {
    const response = await fetch(
      "https://api.envato.com/v1/discovery/search/search/item?username=iqonicdesign&site=themeforest.net&sort_by=date",
      {
        headers: {
          Authorization: "Bearer AsQ2PEQdLiWsdtEYTpnEQvI4cZo0Jx2b",
        },
      }
    );
    const apiData = await response.json();
    const fetchedData = apiData.matches;
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const FilterData = () => {
    return data.filter((info) =>
      info.name.toLowerCase().includes(tofilter.toLowerCase())
    );
  };

  return (
    <>
      <Row>
        <Col lg="3">
          <Card className="iq-filter-card">
            <Card.Header className="border-bottom px-0 py-4 mx-4">
              <h4 className="list-main mb-0">Filters</h4>
            </Card.Header>
            <Card.Body>
              <li className="nav-item dropdown d-xl-block">
                <div className="form-group input-group mb-0 search-input ">
                  <input
                    type="text"
                    value={tofilter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search..."
                  />
                </div>
              </li>
              <br />
              <Button
                href="#"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                bsPrefix="bg-transparent iq-custom-collapse w-100 d-flex justify-content-between pb-3"
              >
                <h5 className="mb-0">Categories</h5>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </i>
              </Button>
              <Collapse in={open}>
                <div id="iq-product-filter-01">
                  <div className="mt-2">
                    <span>Price</span>
                    <RangeSlider />
                    <div className="product-ratings mt-2">
                      <h5 className="py-3 mb-0">Avg. Customer Review</h5>
                      <div>
                        <FilterRating id="01" count={5} count1={0} />
                        <FilterRating id="02" count={4} count1={1} />
                        <FilterRating id="03" count={3} count1={2} />
                        <FilterRating id="04" count={2} count1={3} />
                        <FilterRating id="05" count={1} count1={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
              <Link
                className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3"
                data-bs-toggle="collapse"
                to="#iq-product-filter-02"
                role="button"
                aria-expanded="true"
                aria-controls="iq-product-filter-02"
              >
                <h5 className="mb-0">Type</h5>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </i>
              </Link>
              <div className="collapse show" id="iq-product-filter-02">
                <FilterOptions
                  uniqueName="type"
                  id="01"
                  productName="Accessories"
                />
                <FilterOptions uniqueName="type" id="02" productName="Bags" />
                <FilterOptions
                  uniqueName="type"
                  id="03"
                  productName="Men's Fashion"
                />
                <FilterOptions
                  uniqueName="type"
                  id="04"
                  productName="Women's Fashion"
                />
                <FilterOptions
                  uniqueName="type"
                  id="05"
                  productName="Fashion"
                />
              </div>
              <Link
                className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3"
                data-bs-toggle="collapse"
                to="#iq-product-filter-03"
                role="button"
                aria-expanded="true"
                aria-controls="iq-product-filter-03"
              >
                <h5 className="mb-0">Discount</h5>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </i>
              </Link>
              <div className="collapse show" id="iq-product-filter-03">
                <FilterOptions
                  uniqueName="discount"
                  id="01"
                  productName="80% Off"
                />
                <FilterOptions
                  uniqueName="discount"
                  id="02"
                  productName="50% Off"
                />
                <FilterOptions
                  uniqueName="discount"
                  id="03"
                  productName="40% Off"
                />
                <FilterOptions
                  uniqueName="discount"
                  id="04"
                  productName="30% Off"
                />
                <FilterOptions
                  uniqueName="discount"
                  id="05"
                  productName="20% Off"
                />
                <FilterOptions
                  uniqueName="discount"
                  id="06"
                  productName="10% Off"
                  productChecked="Checked"
                />
              </div>
              <Link
                className="bg-transparent d-flex justify-content-between iq-custom-collapse pt-3"
                data-bs-toggle="collapse"
                to="#iq-product-filter-04"
                role="button"
                aria-expanded="true"
                aria-controls="iq-product-filter-04"
              >
                <h5 className="mb-0">Sellers</h5>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </i>
              </Link>
              <div className="collapse show mt-3" id="iq-product-filter-04">
                <FilterOptions uniqueName="sellers" id="01" productName="Max" />
                <FilterOptions
                  uniqueName="sellers"
                  id="02"
                  productName="Ajio"
                />
                <FilterOptions
                  uniqueName="sellers"
                  id="03"
                  productName="Levi's"
                />
                <FilterOptions
                  uniqueName="sellers"
                  id="04"
                  productName="Woodie"
                />
                <FilterOptions
                  uniqueName="sellers"
                  id="05"
                  productName="Denim"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {data ? (
          <Col>
            {FilterData().map((item, index) => (
              <Card key={index} className="iq-product-custom-card">
                <Card.Body>
                  <div className="d-flex justify-content-evenly">
                    <div style={{ width: 350 }}>
                      <img
                        loading="lazy-load"
                        src={item.previews.landscape_preview.landscape_url}
                        height={180}
                        width={330}                     
                      />
                      <Button
                        className="opacity-25"
                        style={{
                          position : "absolute",
                          bottom : "30px",
                          left : "200px",
                        }}
                        href={item.classification_url}
                      >
                        Live Preview
                      </Button>
                    </div>
                     
                    <div style={{ width: 430 }}>
                      <Link to={"/dashboard"}>
                        <h5>{item.name}</h5>
                      </Link>
                      <div>
                        <h6>
                          {" "}
                          by,
                          <Link className="ms-1" to={item.author_url}>
                            {item.author_username}
                          </Link>{" "}
                          with-
                          <Link to={item.classification_url}>
                            {item.classification}
                          </Link>{" "}
                        </h6>
                      </div>
                      <ul>
                        {JSON.stringify(item.key_features)
                          .slice(1, -1)
                          .split(",")
                          .map((feature, index) => (
                            <li key={index}>{feature.trim()}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="vr"></div>
                    <div style={{ width: 120 }}>
                      <div className="d-flex align-items-center flex-column">
                        <h2>
                          ${JSON.stringify(item.price_cents).slice(0, -2)}
                        </h2>
                        <h6> Rating: {item.rating.rating} </h6>
                        <h6> {item.number_of_sales}k Sales</h6>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        ) : (
          <Col>
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
            <ShimmerComponent />
          </Col>
        )}
      </Row>
    </>
  );
};
export default BlankPage;
