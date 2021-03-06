import Products from "./product";
import "./App.css";
import "./style.css";
import React from "react";
import Womens from "./women";
import Characters from './character'
import { useState } from "react";



const data = [];
// womens data list api extracted using async fetch function
const womensData = async function () {
  const response = await fetch(
    "https://randomuser.me/api/?gender=female&results=10"
  );
  const womenNames = await response.json();
  return womenNames;
};

womensData().then((womenNames) => {
  womenNames.results.map((women) => {
    data.push({
      name: women.name.first + " " + women.name.last,
      womenImg: women.picture.medium,
    });
  });
});

// products array
const products = [
  {
    id: 1,
    img:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    productName: "apple",
  },
  {
    id: 2,
    img:
      "https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY=",
    productName: "orange",
  },
  {
    id: 3,
    img:
      "https://media.istockphoto.com/photos/whole-kiwi-fruit-and-half-kiwi-fruit-on-white-picture-id834807852?k=6&m=834807852&s=612x612&w=0&h=qyouQR9CrIlrPo8FG72PCt1eBV_lTVtnuwVlo9hWZY8=",
    productName: "kiwi",
  },
  {
    id: 4,
    img:
      "https://media.istockphoto.com/photos/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-picture-id803721418?k=6&m=803721418&s=612x612&w=0&h=GZQOV8_-d6e7XtFKPdLdgFs2nFYpaiYZwpQOUlkxeSI=",
    productName: "grapes",
  },
  {
    id: 5,
    img:
      "https://www.healthifyme.com/blog/wp-content/uploads/2020/02/mangoes-cover-1.jpg",
    productName: "mango",
  },
  {
    id: 6,
    img:
      "https://www.thespruceeats.com/thmb/l2OovjN5Xrs7khn4IHcWcSQsMiI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-157685468-fb148317607a47c1b4696f79b66016c4.jpg",
    productName: "pomegranate",
  },
  {
    id: 7,
    img:
      "https://www.healthifyme.com/blog/wp-content/uploads/2016/02/mosambi.jpg",
    productName: "mosambi",
  },
  {
    id: 8,
    img:
      "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-155145025_hero-1024x575.jpg?w=1155&h=1528",
    productName: "apricot",
  },
  {
    id: 9,
    img:
      "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/09/jackfruit-sliced.jpg?fit=1200%2C879&ssl=1",
    productName: "jackfriut",
  },
  {
    id: 10,
    img:
      "data:image/jpeg;base64,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",
    productName: "strawberry",
  },
];

class App extends React.Component {
  constructor(){
    super()
  };
  state = {
    showFruits: false,
    showChar:false,
    showWomens:false,
    characters : []
  }

componentDidMount(){
  fetch(
    "https://hp-api.herokuapp.com/api/characters"
  )
  .then(response => response.json())
  .then(data => this.setState({characters: data}))

  
}

  render (){
  return(
    <>
      {/* <div dangerouslySetInnerHTML = {{__html:html}}>

    </div> */}
      <button
        onClick={() => {
          this.setState({showFruits:!this.state.showFruits})
          this.setState({showChar : false});
          this.setState({showWomens : false});
        }}
      >
        Toggle Products
      </button>
      <button
        onClick={() => {
          // value ? setValue(false):setValue(true)
          this.setState({showWomens:!this.state.showWomens})
          this.setState({showFruits : false});
          this.setState({showChar : false});
        }}
      >
        Toggle womenslist
      </button>
      <button
        onClick={() => {
          // value ? setValue(false):setValue(true)
          this.setState({showChar:!this.state.showFruits})
          this.setState({showFruits : false});
          this.setState({showWomens : false});
          // setValue(!value);
        }}
      >
        Toggle characters
      </button>
      <div className="app">
        {this.state.showFruits
          ? products.map((product) => {
              return (
                <React.Fragment key={Math.random()}>
                  <Products product={product} />
                </React.Fragment>
              );
            })
          : null}
        {this.state.showWomens
          ? data.map((data) => {
              return (
                <React.Fragment key={Math.random()}>
                  <Womens womendata={data} />
                </React.Fragment>
              );
            })
          : null}
          {this.state.showChar
          ? this.state.characters.map((character) => {
              return (
                <React.Fragment key={Math.random()}>
                  <Characters characterlist={character} />
                </React.Fragment>
              );
            })
          : null}
      </div>
    </>
  )};
};

export default App;
