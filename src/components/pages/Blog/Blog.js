import React from 'react'
import './Blog.css'
import Navbar from "../../molecules/Navbar/Navbar";
import  afenblog  from '../../../img/afenblog.png';

import  afenblog1  from '../../../img/afenblog1.png';
import  afenblog2  from '../../../img/afenblog2.png';
import  afenblog3  from '../../../img/afenblog3.png';
import  afenblog4  from '../../../img/afenblog4.png';
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";


const Blog = () => {
    return (
        <div className='background-img'>
        <Navbar />

        <div className="blog-hero-section">
            <img src={afenblog} alt="" />
        </div>


        <div className="blog-section">
            <div className='blog-post'>
                <img src={afenblog1} alt="" />
                <div className='blog-content'>
                    <h4>06 August, 2021</h4>
                    <h2 className='blog-title'>AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h2>
                    <p>Est urna id arcu et. Id fringilla quam et in ullamcorper hac eget volutpat quis. Sed sem augue eget morbi accumsan proin. Mauris morbi laoreet tortor a adipiscing. Volutpat diam ut cras amet, eu. Faucibus enim in eu at sem nec morbi. Hac suspendisse sollicitudin enim tristique imperdiet dui quam posuere. Odio in.</p>
                    <Link className='link'>Read More<FiChevronsRight/></Link>
                </div>
                
            </div>
            <div className='blog-post'>
            <div className='blog-content-2'>
                    <h4>24 July, 2021</h4>
                    <h2 className='blog-title'>DEVELOPMENT UPDATE #7 : JUNE AND GENERAL UPDATES.</h2>
                    <p>Sit vulputate maecenas neque, nisi, nisl commodo elementum etiam massa. Viverra imperdiet pretium, morbi curabitur ac. Ut dolor ut malesuada in. Aliquam aliquam et accumsan, dui, auctor facilisis nibh. Elementum lectus nisl, eu lectus ac diam in ridiculus netus. Neque, placerat eget ut pharetra. Enim fringilla faucibus.</p>
                    <Link className='link'>Read More<FiChevronsRight/></Link>
                </div>
                <img src={afenblog2} alt="" />
                
            </div>
            <div className='blog-post'>
                <img src={afenblog3} alt="" />
                <div className='blog-content'>
                    <h4>06 August, 2021</h4>
                    <h2 className='blog-title'>AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h2>
                    <p>Est urna id arcu et. Id fringilla quam et in ullamcorper hac eget volutpat quis. Sed sem augue eget morbi accumsan proin. Mauris morbi laoreet tortor a adipiscing. Volutpat diam ut cras amet, eu. Faucibus enim in eu at sem nec morbi. Hac suspendisse sollicitudin enim tristique imperdiet dui quam posuere. Odio in.</p>
                    <Link className='link'>Read More<FiChevronsRight/></Link>
                </div>
                
            </div>
            <div className='blog-post'>
            <div className='blog-content-2'>
                    <h4>06 August 2021</h4>
                    <h2 className='blog-title'>AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h2>
                    <p>Lorem lacus integer fermentum donec. Imperdiet pellentesque tortor commodo vitae. Eget vitae purus est laoreet phasellus. Tristique nullam interdum amet, elementum amet posuere. Nisl viverra elit adipiscing dolor, etiam risus, elementum tortor urna. Amet, massa eleifend velit, volutpat. Nisl mi sem volutpat arcu.</p>
                    <Link className='link'>Read More<FiChevronsRight/></Link>
                </div>
                <img src={afenblog4} alt="" />
                
                
            </div>
            
        </div>
        </div>
    )
}

export default Blog
