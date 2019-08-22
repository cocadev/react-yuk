import React from 'react';

const FOODS = [
  { 
    id: 1, 
    title: 'zengo', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  },
  { 
    id: 2, 
    title: 'gold bar', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  },
  { 
    id: 3, 
    title: 'bellyful nyc', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  },
  { 
    id: 4, 
    title: 'wray\'s carribean and seafood', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  },
  { 
    id: 5, 
    title: 'negril in park slope', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  },
  { 
    id: 6, 
    title: 'public hotel', 
    rating: 5, 
    speakingon: 'food, ambiance, events',
    description: 'Zengo, Meaning "Give And Take" In Japanese, Is An Artful Blend Of Latin-Asian Styles And Flavors. Chief-Owner Richard Sandoval, Whose Accolades Include A Bon Appetit Resturant Of The Year. James Beard Finalist For Custanding Restaurateur And Mexicos Toque DORO. Spins Regional Ingredients Into Beautifully Balanced Dishes Designed For Sharing.'
  }
]

function FoodItem(props) {
  return (
    <div className="col-md-4 m-t-10">
      <div className="ab-center" >
        <img src={`images/${props.img}.jpg`} alt="IMG-OUR" className="foodImg" />
      </div>
      <div className="bgpurple p-l-10 p-t-10 p-b-10 p-r-10">
        <p className="txt39">{props.title}</p>
        <div>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
          <i className="fas fa-star c-white fs-5" aria-hidden="true"></i>
        </div>
        <p className="txt40">{props.description}</p>

        <hr/>

        <p className="txt39">{'Speaking on:'}</p>
        <p className="txt40">{props.speakingon}</p>

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
              FOODS.map((item, key)=>(
                <FoodItem key={key} img={item.id} description={item.description} rating={item.rating} title={item.title} speakingon={item.speakingon}/>
              ))
            }
            </div>
        </div>
      </div>
    )
  }
}