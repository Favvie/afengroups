import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../molecules/Navbar/Navbar'
import Footer from '../../molecules/Footer/Footer'
import './PageNotFound.css'
import PageNotFoundimage from '../../../img/PageNotFoundImage.png'

const PageNotFound = () => {
    return (
        <>
            <Navbar />
            <div className="pages">
            <div className='images'>
                <img src={PageNotFoundimage} alt="" className='pagenotfound' />
            </div>
            <Link to='/' className='go-home'>Go Home</Link>
            </div>
            
            <Footer />
        </>
    )
}

export default PageNotFound
