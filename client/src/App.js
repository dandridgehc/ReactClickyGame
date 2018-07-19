import React, { Component } from 'react';
import image1 from './images/artificial-intelligence.png';
import image2 from './images/brain.png';
import image3 from './images/robot-2.png';
import image4 from './images/robot.png';
import image5 from './images/roboto-logo.png';
import image6 from './images/vacuum.png';
import './App.css';

var imagesArray = [
  {
    id: 1,
    url: image1,
    hasBeenClicked: false
  } ,
  {
    id: 2,
    url: image2,
    hasBeenClicked: false
  } ,
  {
    id: 3,
    url: image3,
    hasBeenClicked: false
  } ,
  {
    id: 4,
    url: image4,
    hasBeenClicked: false
  } ,
  {
    id: 5,
    url: image5,
    hasBeenClicked: false
  } , 
  {
    id: 6,
    url: image6,
    hasBeenClicked: false
  }
]



class App extends Component {
 
  constructor(){
    super()
    this.state = {
      images: imagesArray
    }
  }

  handleImageClick = (id) => {
    console.log(id)
  }


  render() {

    var displayImages = this.state.images.map((eachItem,index)=>
      <img src={eachItem.url} alt={index} key={index} onClick={()=>this.handleImageClick(eachItem.id)}/>
      )  

    return (
      <div className="App">
        <div className="header">
            <div>CLICKY GAME</div>
            <div>CLICK ANY IMAGE TO BEGIN</div>
            <div>SCORE:</div>
        </div>
        <div className="images-container"> {displayImages} </div>
      </div>
    );
  }
}

export default App;
