/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/About.css'
import img1 from './img/01.png'
import img2 from './img/02.png'
import img3 from './img/03.png'
import img4 from './img/04.png'

function About() {
    return (
        <div>
            <div>
                <section className="team">
                    <div className="center">
                        <h1>Our Team</h1>
                    </div>
                    <div className="team-content">
                        <div className="box">
                            <img src={img1} alt='Person' />
                            <h3>Niketan Swami</h3>
                            <h5>Developer</h5>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/niketan-swami-b74491152/" target='_blank' rel="noreferrer"><i className="ri-linkedin-fill" /></a>
                                <a href="https://github.com/Niketan1604" target='_blank' rel="noreferrer"><i className="ri-github-fill" /></a>
                                <a href="https://www.instagram.com/_nik0091/" target='_blank' rel="noreferrer"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img2} alt='Person' />
                            <h3>Prakhar Kori</h3>
                            <h5>Developer</h5>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/prakhar-kori-45b119158/" target='_blank' rel="noreferrer"><i className="ri-linkedin-fill" /></a>
                                <a href="#" target='_blank'><i className="ri-github-fill" /></a>
                                <a href="https://www.instagram.com/prakhar_kori/" target='_blank' rel="noreferrer"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img3} alt='Person' />
                            <h3>Bhuwanesh Choudhary</h3>
                            <h5>Developer</h5>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/bhuwanesh-choudhary-4bb87521a/" target='_blank' rel="noreferrer"><i className="ri-linkedin-fill" /></a>
                                <a href="https://github.com/bhuwanesh75" target='_blank' rel="noreferrer"><i className="ri-github-fill" /></a>
                                <a href="https://www.instagram.com/bhuwanesh_75/" target='_blank' rel="noreferrer"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img4} alt='Person' />
                            <h3>Anshu Ranjan</h3>
                            <h5>Developer</h5>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/anshuranjann/" target='_blank' rel="noreferrer"><i className="ri-linkedin-fill" /></a>
                                <a href="https://github.com/ranshu1601" target='_blank' rel="noreferrer"><i className="ri-github-fill" /></a>
                                <a href="https://www.instagram.com/__periple__/" target='_blank' rel="noreferrer"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About
