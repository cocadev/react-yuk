import React from 'react';
import { FOODS } from '../../utils/static';

function FoodItem(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 m-t-10">
      <div className="foodImg" style={{ backgroundImage: `url(${props.item.image})` }}></div>
      <div className="bgpurple p-l-10 p-t-10 p-b-10 p-r-10">
        <p className="txt39">{props.item.title}</p>
        <div>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
        </div>
        <p className="txt40">{props.item.description.split('\n').map(function (item) { return (<span>{item}<br /></span>) })}</p>

        <hr />

        <p className="txt43">{'Speaking on:'}</p>
        <p className="txt40">{props.item.speakingon}</p>

        <div>
          <i className="fab fa-facebook c-white m-l-5" aria-hidden="true"></i>
          <i className="fab fa-twitter c-white m-l-10" aria-hidden="true"></i>
        </div>

      </div>
    </div>
  )
}

export default class Food extends React.Component {
  render() {
    return (
      <div className="content-intro bg-white p-b-70 m-l-100 m-r-100">
        <div className="container-fluid">
          <div className="row">
            {
              FOODS.map((item, key) => (
                <FoodItem
                  key={key}
                  item={item}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}