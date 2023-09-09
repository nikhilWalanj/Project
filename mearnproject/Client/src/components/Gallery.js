import React from "react"
import Header from "./Header"
import Logo from "./Logo"
import Bottom from "./Bottom"
const Gallery = () => {
    return (
        <React.Fragment>
            <body>
            <Header />
            <section class="page-title">
                <div class="container">
                              <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            <h3>Gallery</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="heading text-center text-capitalize font-weight-bold py-5">
                              <h1>Our Memories</h1>  
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g1.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g2.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g3.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g4.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g5.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g6.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g7.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g8.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top img-fluid w-100" src="/images/gallery/g9.jpg"  alt="Card image cap"/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Logo/>
            <Bottom/>
            </body>
        </React.Fragment>
    )
}

export default Gallery;