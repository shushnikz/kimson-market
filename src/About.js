import React from 'react'

function About() {
    return (
        <div>
            <div className='about'>
                <h4>ABOUT US</h4>
                <div>

                    <div class="card-group">
                        <div className="card m-3">
                            <img src="http://img1.wsimg.com/isteam/stock/lrbjn7j/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Our History</h5>
                                <p className="card-text">I'm your About section. Click to edit and tell your visitors about how you started your business and what makes it special. What was the moments inspired you to open this store? Is there a tradition that you are keeping alive?</p>
                            </div>
                        </div>
                        <div className="card m-3">
                            <img src="http://img1.wsimg.com/isteam/stock/11123/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Find New Products</h5>
                                <p className="card-text">I'm your About section. Click to edit and tell your visitors about how you started your business and what makes it special. What was the moments inspired you to open this store? Is there a tradition that you are keeping alive?</p>
                            </div>
                        </div>
                        <div className="card m-3">
                            <img src="http://img1.wsimg.com/isteam/stock/ZVNqBAO/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Stres-Free Delivery</h5>
                                <p className="card-text">I'm your About section. Click to edit and tell your visitors about how you started your business and what makes it special. What was the moments inspired you to open this store? Is there a tradition that you are keeping alive?</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-between email row row-cols-1 row-cols-md-3 g-4'>
                    <div>
                        <h3>Join Our Mailing List</h3>
                    </div>
                    <div>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-lg btn-outline-dark">S I G N  U P</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About