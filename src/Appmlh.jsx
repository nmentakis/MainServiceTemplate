import React from 'react';
import imgScroller from './Component/imgScroller';
import './Appmlh.css';
// import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currImage: 'https://i.imgur.com/zM0MQFD.jpg',
      images: [
        'https://i.imgur.com/zM0MQFD.jpg',
        'https://i.imgur.com/R9JVRsP.jpg',
        'https://i.imgur.com/wuuIRSv.jpg',
        'https://i.imgur.com/0i8iBU7.jpg',
        'https://i.imgur.com/9UBZ6bp.jpg',
        'https://i.imgur.com/oZu7p66.jpg'
      ]
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="App">
        <table id='carousel-app'>
          <thead id='main-image'>
            <tr>
              <td id='HeaderImg'>
                <img src={this.state.currImage} alt={this.state.images[0]} className='imgHead'></img>
              </td>
            </tr>
          </thead>
          <tbody id='imgList'>
            <tr id='imgbuttons'>
              <imgScroller.Scroller images={this.state.images}/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
