import React from "react"
import Logo from "./Logo"
import Bottom from "./Bottom"
import Header from "./Header"
const About = () => {
    return (
        <React.Fragment>
            <Header />
            <section class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            <h3>About Us</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-img">
                                <img src="/images/about/about.jpg" class="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0">
                            <div class="about-content">
                                <h3 class="font-weight-bold">Introduction</h3>
                                <p>Founded by award-winning entrepreneur Kavita Mhetre in 2018, Utsava Event Planners is one of the most desired event planning and decorating businesses across Pune and neighboring areas.</p>
                                <h3 class="font-weight-bold">How we can help</h3>
                                <p>Utsava Event Planners is an experienced team of professionals who provide event planning, decorating and management services for weddings and other events across Pune and neighboring areas.
                                    Our range of services and planning packages cater to your specific needs by offering combinations of event design, decor, and coordination. 
                                    With 5 years worth of experience, our passionate team is dedicated to making this once in a lifetime event a magical experience for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="heading text-center text-capitalize font-weight-bold my-5 py-2 bg-white">
                                <h2>our team</h2>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src="/images/team/team1.jpg" class="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Parthsarthi Dhulam</h5>
                                        <p class="card-text">Founder / CEO</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src="/images/team/team2.jpg" class="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Kavita Mhetre</h5>
                                        <p class="card-text">Founder / CEO</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src="/images/team/team3.jpg" class="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Amit Kalshetti</h5>
                                        <p class="card-text">Founder / CEO</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src="/images/team/team4.jpg" class="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Priyanka Dilpak</h5>
                                        <p class="card-text">Founder / CEO</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Logo/>
            <Bottom/>
        </React.Fragment>
    )
}

export default About;