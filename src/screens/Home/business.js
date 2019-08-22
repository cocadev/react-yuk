import React from 'react'

function BusinessItem(props) {
  return <div className='flex-row flex-m flex-l m-b-50 size41'>
    <div className="size40 hov-pointer" >
      <div className="flex-c-m sizefull bo-cir bgsky color4 hov1 trans-0-4">
        <i className={`fa ${props.icon} fs-30 m-l-2`} ></i>
      </div>
    </div>
    <span className="txt12 m-l-35">
      {props.title}
    </span>

  </div>
}

export default class Business extends React.Component {
  render() {
    return (
      <section className="section-booking ">
        <div className="container">
          <div className="row">

            <div className="col-lg-12 p-b-30 p-t-18 text-center">
              <p className="txt36"> Why blaq for your business ? </p>
              <p className="txt25"> explore the popular listings around the world </p>
            </div>

            <div className="col-lg-6 p-t-18">
              <div className="wrap-pic-booking size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="images/ios.png" alt="IMG-OUR" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-t-120">
                <center>
                  <BusinessItem title={'Claim Listing'} icon={'fa-map-marker'} />
                  <BusinessItem title={'Paid Listing'} icon={'fa-dollar'} />
                  <BusinessItem title={'Promote Your Business'} icon={'fa-hand-lizard-o'} />
                </center>

                <div className="wrap-btn-booking flex-c-m m-t-6">
                  <button type="submit" className="btn4 flex-c-m size18 txt11 trans-0-4 m-r-5">
                    see our pricing
						    	</button>

                  <button type="submit" className="btn5 flex-c-m size18 txt11 trans-0-4 m-l-5">
                    submit listing
						    	</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid flex-c bg3333 ">
              <div className="section-signup p-t-140 p-b-140">
                <form className="p-l-5 p-r-5">
                  <p className="txt22 t-center"> subscribe to newsletter </p>
                  <p className="txt25"> subscribe to get update and information. don't worry, we wont send spam! </p>
                  <div className='flex-c m-t-50'>
                    <div className="wrap-input-signup size17 bo2 bo-rad-16 bgwhite pos-relative txt10">
                      <input className="bo-rad-16 sizefull txt10 p-l-20" type="text" name="email-address" placeholder="Enter your Email" />
                      <i className="fa fa-envelope ab-r-m m-r-18" aria-hidden="true"></i>
                    </div>

                    <button type="submit" className="flex-c-m btn111 txt11 ">
                      Submit
			              </button>
                  </div>

                </form>
              </div>
            </div>
      </section>
    )
  }
}