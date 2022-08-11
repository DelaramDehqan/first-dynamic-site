import React from 'react';
import './BootCamps.css';
import Popup from "reactjs-popup";
import {
  PopupContent,
  PopupText,
  ClosePopup,
} from "./styledcomponents";

class BootCamps extends React.Component {
  state = {
    bootcamps: [
      {
        id: 1,
        name: "Python",
        start: "15-شهریور",
        imageSource: require("./images/cod.jpg"),
      },
      {
        id: 2,
        name: "Java",
        start: "15-شهریور",
        imageSource: require("./images/cod-1.jpg"),
      },
      {
        id: 3,
        name: "React",
        start: "15-شهریور",
        imageSource: require("./images/cod-2.jpg"),
      },
      {
        id: 4,
        name: "C++",
        start: "15-شهریور",
        imageSource: require("./images/cod-5.jpg"),
      },
      {
        id: 5,
        name: "Jquery",
        start:"25- مرداد",
        offer: "Free for 100 entire first",
        imageSource: require("./images/cod-4.jpg"),
      },
      {
        id: 6,
        name: "c#",
        start: "15-شهریور",
        imageSource: require("./images/cod-3.jpg"),
      },
      {
        id: 7,
        name: "Latex",
        start: "15-شهریور",
        imageSource: require("./images/cod-6.jpg"),
      },
      {
        id: 8,
        name: "Julia",
        start: "15-شهریور",
        imageSource: require("./images/cod-7.jpg"),
      },
      {
        id: 9,
        name: "R",
        start: "15-شهریور",
        imageSource: require("./images/cod-8.jpg"),
      },
    ],
  };

  render() {
    return (
      <div className="containerBoot">
        {this.state.bootcamps.map((bootcamp) => (
          <figure key={bootcamp.id} class="bootcampCard">
            <h2>{bootcamp.name}</h2>
            <img src={bootcamp.imageSource} alt="" />
            <figcaption>
            <Popup
                trigger={<button className='btnboot'>جزئیـــات</button>}
                modal
              >
                {(close) => (
                  <PopupContent>
                    <ClosePopup
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      بستن
                    </ClosePopup>
                    <PopupText>{bootcamp.description}</PopupText>
                  </PopupContent>
                )}
              </Popup>
              
              <p>شروع: {bootcamp.start}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
}

export default BootCamps;
