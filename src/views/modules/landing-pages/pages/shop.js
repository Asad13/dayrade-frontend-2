import React, { Fragment, memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShopCard from "../components/widgets/shop-card";
import SubHeader from "../components/widgets/sub-header";

// image
import image1 from "../../../../assets/modules/landing-pages/images/shop/01.webp";
import image2 from "../../../../assets/modules/landing-pages/images/shop/02.webp";
import image3 from "../../../../assets/modules/landing-pages/images/shop/03.webp";
import image4 from "../../../../assets/modules/landing-pages/images/shop/04.webp";
import image5 from "../../../../assets/modules/landing-pages/images/shop/05.webp";
import image6 from "../../../../assets/modules/landing-pages/images/shop/06.webp";
import image7 from "../../../../assets/modules/landing-pages/images/shop/07.webp";
import image8 from "../../../../assets/modules/landing-pages/images/shop/08.webp";
import image9 from "../../../../assets/modules/landing-pages/images/shop/09.webp";
import image10 from "../../../../assets/modules/landing-pages/images/shop/10.webp";
import image11 from "../../../../assets/modules/landing-pages/images/shop/11.webp";

const Shop = memo(() => {
  return (
    <Fragment>
      <SubHeader title={"Shop"} />
      <div className="section-padding">
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
            <Col>
              <ShopCard
                productName="Casual Shoes"
                productImage={image1}
                productRating="0"
                productPrice="$15.00"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Biker's Jacket"
                productImage={image2}
                productRating="3.5"
                productPrice="$18.00"
                statusDetails="Sale!"
                statusColor="success"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Knitted Shrug"
                productImage={image3}
                productRating="3.5"
                productPrice="$18.00"
                statusDetails="New"
                statusColor="primary"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Blue Handbag"
                productImage={image4}
                productRating="0"
                productPrice="$55.00"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Sweater"
                productImage={image5}
                productRating="0"
                productPrice="$16.00"
                statusDetails="Sold"
                statusColor="warning"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image6}
                productRating="0"
                productPrice="$42.00"
                statusColor="success"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image7}
                productRating="0"
                productPrice="$45.00"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image8}
                productRating="0"
                productPrice="$45.00"
                statusDetails="Sale!"
                statusColor="success"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image9}
                productRating="0"
                productPrice="$45.00"
                statusColor="success"
                className="mb-lg-0"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image10}
                productRating="0"
                productPrice="$18.00"
                statusDetails="Sale!"
                statusColor="success"
                className="mb-lg-0"
              />
            </Col>
            <Col>
              <ShopCard
                productName="Pink Handbag"
                productImage={image11}
                productRating="0"
                productPrice="$25.00"
                statusColor="success"
                className=" mb-lg-0"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

export default Shop;
