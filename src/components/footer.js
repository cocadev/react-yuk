import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer className="bgsky0 p-l-50 p-r-30">
                    <div className="container-fluid p-t-40 p-b-70">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 p-t-10">
                                <h4 className="txt38 m-b-33 ">
                                    BLAQ
                                </h4>
                                <h4 className="txt13 m-b-32">
                                    blaqcheck is the fun and easy way to find, review and talk about what's great and not so great -in your area #blackexpreince
					            </h4>
                            </div>

                            <div className="col-sm-6 col-md-3 p-t-10">
                                <h4 className="txt38 m-b-33">Address</h4>
                                <AddresItem title={'212-641-0542'} icon={'fa fa-twitter'} />
                                <AddresItem title={'blaqcheck.com'} icon={'fa fa-twitter'} />
                                <AddresItem title={'hello@blaqcheck.com'} icon={'fa fa-twitter'} />
                                <AddresItem title={'350 west broadway'} icon={'fa fa-twitter'} />
                                <AddresItem title={'new york. NY'} icon={'fa fa-twitter'} />
                            </div>

                            <div className="col-sm-6 col-md-3 p-t-10">
                                <h4 className="txt38 m-b-33">
                                    quick links
                                </h4>
                                <h4 className="txt13 m-b-32">

                                </h4>
                            </div>

                            <div className="col-sm-6 col-md-3 p-t-10">
                                <h4 className="txt38 m-b-33">
                                    tweets
                                </h4>
                                <h4 className="txt13 m-b-32">
                                    enter your name enter your name enter your name enter your name enter your name enter your name
					            </h4>
                            </div>
                        </div>
                    </div>

                    <div className="end-footer bgsky0 p-t-220">
                        <div className="container">
                            <div className="flex-c p-t-22 p-b-22">
                                 <div className="txt31 p-t-5 p-b-5">
                                   <i className="fa fa-copyright m-r-80" aria-hidden="true"></i>
                                    Copyright &copy; 2018 All rights reserved  |  design by wongsang .LP
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


                <div className="btn-back-to-top bg0-hov" id="myBtn">
                    <span className="symbol-btn-back-to-top">
                        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                    </span>
                </div>

                <div id="dropDownSelect1"></div>
            </div>
        )
    }
}

export default Footer

function AddresItem(props) {
    return <div className="">
        <span className="txt13">
            {props.title}
        </span>
    </div>
}