import React from 'react'

const MEMBERSHIPS = [
  {
    name: 'Basic',
    price: '6.99',
    factors: [
      'Basic Listing Submission', 'One Listing', '30 Days Availability', 'Limited Support', 'Accept Reviews', 'Edit Your Listing'
    ]
  },
  {
    name: 'Professional',
    price: '14.99',
    factors: [
      'One Time Fee for One Listing', 'One Listing', 'Unlimited Availability', 'Featured In the Results', 'Post Deals & Promotions', '24/7 Service & Support'
    ]
  }
]

function WelcomeItem(props) {
  return <div className="col-md-6 p-t-30">

    <div className="p-t-35 text-center">
      <p className="ft26">{props.item.name}</p>
      <hr/>
      <p className="ft35">${props.item.price}</p>
      <div className="">
        {
          props.item.factors.map((subItem, index) =>
            <div key={index} className='flex-c'>
              <i className={`fas fa-check-circle fs-13 m-l-2 c-main m-t-4 m-r-3`} ></i>
              <p className='ft13'>{subItem}</p>
            </div>
          )
        }
      </div>
    </div>
  </div>
}

export default class Membership extends React.Component {
  render() {
    return (
      <div className="content-intro bg-white p-t-77 p-b-133">
        <div className="container">
          <div className="row">
            {
              MEMBERSHIPS.map((item, index) => <WelcomeItem key={index} item={item} />)
            }
          </div>
        </div>
      </div>
    )
  }
}