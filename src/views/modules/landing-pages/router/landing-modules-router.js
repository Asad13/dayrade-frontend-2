// layout
import DefaultLayout from "../../landing-pages/layouts/default-layout";

// pages
import Home from "../../landing-pages/pages/home";
import Faq from "../../landing-pages/pages/faq";
import About from "../../landing-pages/pages/about";
import Features from "../../landing-pages/pages/features";
import Pricing from "../../landing-pages/pages/pricing";
import Blog from "../../landing-pages/pages/blog";
import ContactUs from "../../landing-pages/pages/contact-us";
import SoftwareLandingPage from "../../landing-pages/pages/software-landing-page";
import SassMarketingLandingPage from "../../landing-pages/pages/sass-marketing-landing-page";
import StartUpLandingPage from "../../landing-pages/pages/start-up-landing-page";
import BlogDetail from "../../landing-pages/pages/blog-detail";
import Shop from "../../landing-pages/pages/shop";
import ShopDetail from "../../landing-pages/pages/shop-detail";

export const LandingModulesRouter = [
  {
    path: "landing-pages",
    element: <DefaultLayout header2="true" />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "landing-pages",
    element: <DefaultLayout header1="true" />,
    children: [
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "software-landing-page",
        element: <SoftwareLandingPage />,
      },
      {
        path: "sass-marketing-landing-page",
        element: <SassMarketingLandingPage />,
      },
      {
        path: "blog-detail",
        element: <BlogDetail />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop-detail",
        element: <ShopDetail />,
      },
    ],
  },
  {
    path: 'landing-pages',
    element: <DefaultLayout header1="true" footer1="true" />,
    children:[
      {
        path: "start-up-landing-page",
        element: <StartUpLandingPage />,
      },
    ]
  }
];
