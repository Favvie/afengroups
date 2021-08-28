import React, { useEffect } from "react";
import "./Blog.css";
import Navbar from "../../molecules/Navbar/Navbar";
import afenblog from "../../../img/afenblog.png";
import Footer from "../../molecules/Footer/Footer";
// import afenblog1 from "../../../img/afenblog1.png";
// import afenblog2 from "../../../img/afenblog2.png";
// import afenblog3 from "../../../img/afenblog3.png";
// import afenblog4 from "../../../img/afenblog4.png";
// import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import useAdminCred from "../../../hooks/adminPostApi";
import moment from "moment";

const Blog = () => {
  const { postsData, fetchPosts } = useAdminCred();
  const {  data } = postsData;
  console.log(data);
  useEffect(() => {
    fetchPosts({});
  }, []);

  return (
    <div className="background-img">
      <Navbar />

      <div className="blog-hero-section">
        <img src={afenblog} alt="" />
      </div>

      <div className="blog-section">
        {data?.map((postData, idx) => (
          <div className="blog-post" key={idx}>
            <img src={postData.image} alt="" />
            <div className="blog-content">
              <h4>{moment(postData.createdAt).format("lll")}</h4>
              <h2 className="blog-title">{postData.title}</h2>
              <p>{postData.post}</p>
              <a className="link" href={postData.medium_link}>
                Read More
                <FiChevronsRight />
              </a>
            </div>
          </div>
        ))}

        {/* <div className="blog-post blog-post-2">
          <div className="blog-content-2">
            <h4>24 July, 2021</h4>
            <h2 className="blog-title">
              DEVELOPMENT UPDATE #7 : JUNE AND GENERAL UPDATES.
            </h2>
            <p>
              Sit vulputate maecenas neque, nisi, nisl commodo elementum etiam
              massa. Viverra imperdiet pretium, morbi curabitur ac. Ut dolor ut
              malesuada in. Aliquam aliquam et accumsan, dui, auctor facilisis
              nibh. Elementum lectus nisl, eu lectus ac diam in ridiculus netus.
              Neque, placerat eget ut pharetra. Enim fringilla faucibus.
            </p>
            <Link className="link">
              Read More
              <FiChevronsRight />
            </Link>
          </div>
          <img src={afenblog2} alt="" />
        </div>
        <div className="blog-post">
          <img src={afenblog3} alt="" />
          <div className="blog-content">
            <h4>06 August, 2021</h4>
            <h2 className="blog-title">
              AFEN TRENDS: 5 Things you should know about the new NFT euphoria.
            </h2>
            <p>
              Est urna id arcu et. Id fringilla quam et in ullamcorper hac eget
              volutpat quis. Sed sem augue eget morbi accumsan proin. Mauris
              morbi laoreet tortor a adipiscing. Volutpat diam ut cras amet, eu.
              Faucibus enim in eu at sem nec morbi. Hac suspendisse sollicitudin
              enim tristique imperdiet dui quam posuere. Odio in.
            </p>
            <Link className="link">
              Read More
              <FiChevronsRight />
            </Link>
          </div>
        </div>
        <div className="blog-post blog-post-2">
          <div className="blog-content-2">
            <h4>06 August 2021</h4>
            <h2 className="blog-title">
              AFEN TRENDS: 5 Things you should know about the new NFT euphoria.
            </h2>
            <p>
              Lorem lacus integer fermentum donec. Imperdiet pellentesque tortor
              commodo vitae. Eget vitae purus est laoreet phasellus. Tristique
              nullam interdum amet, elementum amet posuere. Nisl viverra elit
              adipiscing dolor, etiam risus, elementum tortor urna. Amet, massa
              eleifend velit, volutpat. Nisl mi sem volutpat arcu.
            </p>
            <Link className="link">
              Read More
              <FiChevronsRight />
            </Link>
          </div>
          <img src={afenblog4} alt="" />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
