/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "/node_modules/react-toastify/dist/ReactToastify.css"
import "../styles/assets/css/common.css"
import "../styles/assets/css/responsive.css"
import "swiper/swiper-bundle.css"
import * as React from "react"
import PropTypes from "prop-types"
import { ToastContainer, Zoom } from "react-toastify"
import "swiper/css/pagination"

import Header from "./common/header"
import Footer from "./common/footer"
import ScrollToTop from "./common/scroll-button"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer draggable={false} transition={Zoom} theme="dark" />
      <ScrollToTop />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
