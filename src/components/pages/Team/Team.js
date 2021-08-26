import React from 'react'
import './Team.css'
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import deborah from '../../../img/deborah.png'
import rugi from '../../../img/rugi.png'
import avinash from '../../../img/avinash.png'
import daniel from '../../../img/daniel.png'
import david from '../../../img/david.png'
import excel from '../../../img/excel.png'
import joshua from '../../../img/joshua.png'
import bukola from '../../../img/bukola.png'
 

const Team = () => {
    return (
        <>
            <Navbar />

            <div className="team-hero-section">
                <h1 className='team-heading'>MEET THE TEAM</h1>

                <div className="team-member">
                    <div className='member-img'>
                        <img src={deborah} alt="" className='member-pic' />
                    </div>
                    <div className='data'>
                        <h4 className='name'>Deborah Ojengbede</h4>
                        <p className='role'>Chief Executive Officer</p>
                        <p className='about'>Deborah Ojengbede is a seasoned banker with over 5 years of working experience in the industry and has thrived in roles ranging from Business Analytics, Strategy and Project Management to culminate in leadership roles in Women Empowerment and Banking. By virtue of her experience, both within and outside the Bank, she has also garnered experience in building, scaling and impacting various businesses in the entertainment sector.</p>
                    </div>
                </div>

                <div className="team-member-2">
                    <div className='data-2'>
                        <h4 className='name-2'>Rugi Kavamahanga</h4>
                        <p className='role-2'>Chief Marketing Officer</p>
                        <p className='about-2'>Rugi Kavamahanga is a Blockchain marketing professional with experience in community engagement and strategic messaging development. He has been working in Crypto since 2017 and has had an MBA from Penn State University.</p>
                    </div> 

                    <div className='member-img-2'>
                        <img src={rugi} alt="" className='member-pic-2' />
                    </div>
                    
                </div>
                <div className="team-member">
                    <div className='member-img'>
                        <img src={avinash} alt="" className='member-pic' />
                    </div>
                    <div className='data'>
                        <h4 className='name'>avinash sengar</h4>
                        <p className='role'>Chief Technology Officer</p>
                        <p className='about'>Avinash Sengar is a blockchain enthusiast & tech evangelist with over 11 years industry experience. He has worked on various projects in Blockchain technology such as DeFi/NFTs, SSI, Banking & Healthcare sector. He is currently fulfilling his goal of helping startups build decentralized applications targeted at solving real time problems.</p>
                    </div>
                </div>

                <div className="team-member-2">
                <div className='data-2'>
                        <h4 className='name-2'>david saba</h4>
                        <p className='role-2'>Head Of Designs</p>
                        <p className='about-2'>Saba David is a professional graphic designer with over 4 years of working experience in various design applications. He is focused on creating and developing meaningful human-centred experiences, through visual designs and branding. As a result, he has secured special knowledge in Brand management, Social media management and Content Creation.</p>
                    </div> 

                    <div className='member-img-2'>
                        <img src={david} alt="" className='member-pic-2' />
                    </div>
                    
                </div>
                <div className="team-member">
                    <div className='member-img'>
                        <img src={excel} alt="" className='member-pic' />
                    </div>
                    <div className='data'>
                        <h4 className='name'>oliva- nwoko excel bienose</h4>
                        <p className='role'>Team Lead Corporate Communications and Strategy</p>
                        <p className='about'>Excel Oliva is an enigmatic and enthusiastic communication expert vast in Public relations, content creation, crypto marketing, blockchain technology, and several forms of writing. He has a wealth of experience working in the Real eststae industry as well as the blockchain industry, and is a great addition to the team.</p>
                    </div>
                </div>

                <div className="team-member-2">
                <div className='data-2'>
                        <h4 className='name-2'>BUKOLA AKINPELU</h4>
                        <p className='role-2'>Lead Product Designer/Stratgeic Consultant</p>
                        <p className='about-2'>Bukola is an industry recognized expert in product design, data analysis and blockchain startup marketing. She has over 3 years  of working experinece in various fields in computer science. She combines UI/UX design experience from building blockchain products, website development with product marketing to offer an invaluable mix of service.</p>
                    </div> 

                    <div className='member-img-2'>
                        <img src={bukola} alt="" className='member-pic-2' />
                    </div>
                    
                </div>
                <div className="team-member">
                    <div className='member-img'>
                        <img src={daniel} alt="" className='member-pic' />
                    </div>
                    <div className='data'>
                        <h4 className='name'>JOHNSON DANIEL</h4>
                        <p className='role'>Technical Advisor</p>
                        <p className='about'>Johnson Daniel has over 5 years of working experience in computer programming on various computer languages, and also experience in Blockchain development, building, programming, and maintenance.</p>
                    </div>
                </div>

                <div className="team-member-2">
                <div className='data-2'>
                        <h4 className='name-2'>JOSHUA RAMADAN</h4>
                        <p className='role-2'>Government Advisor</p>
                        <p className='about-2'>Joe Ramadan is a Tourism/Cultural enthusiast, A&R specialist, Africa sound collector/promoter, and the former Special Assistant to the Governor of Plateau State.</p>
                    </div> 

                    <div className='member-img-2'>
                        <img src={joshua} alt="" className='member-pic-2' />
                    </div>
                    
                </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default Team
