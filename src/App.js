import React from "react";
import { Button, Accordion } from "react-bootstrap";
import cloud from "./cloud.png";
import icon from "../src/icon.png";
import TodayWeatherDetails from "./components/TodayWeatherDetails";

function App() {
  return (
    <div className="container-fluid" id="main-container">
      <div className="row h-100">
        {/* aside */}
        <div className="col-lg-4 px-5  " id="aside">
          <div className=" d-flex justify-content-between py-5">
            <div>
              <Button variant="secondary">Search for places</Button>
            </div>
            <div className=" d-flex justify-content-center align-items-center p-2 bg-secondary rounded-circle">
              <img src={icon} id="location-icon" />
            </div>
          </div>
          <TodayWeatherDetails />
        </div>

        {/* main area */}
        <div
          className="col-lg-8 d-flex flex-column  align-items-center"
          id="main-area"
        >
          {/* tempeture buttons section  */}
          <div className="py-5  w-75 d-flex  justify-content-lg-end  justify-content-sm-center">
            <div className="px-2">
              <Button variant="secondary ">°C</Button>
            </div>
            <div className="px-2">
              <Button variant="secondary">°F</Button>
            </div>
          </div>

          {/* week days weather details cards container  */}
          <div className=" w-75 d-flex flex-wrap justify-content-center  text-center text-white ">
            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>

            {/*  cards  */}
            <div className="weather-details-card py-4 m-2">
              <div className="">
                <p>Friday</p>
                <img src={cloud} className="card-image" />
              </div>
              <div className="d-flex text-center align-item-center justify-content-center mt-5">
                <p>31°C</p>
                <span className="mx-3"></span>
                <p>78°C</p>
              </div>
            </div>
          </div>

          {/* today weather highlight details cards container */}
          <div className="w-75 d-flex flex-column text-center text-white">
            <div className="d-flex flex-wrap justify-content-center ">
              {/* section header  */}
              <h4 className=" col-10 pt-5 m-2 text-start">
                Today's Highlights
              </h4>

              {/*  today's hightlight cards  */}
              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div>
                  <h2 className="fs-1">
                    7<span className="fs-3">mph</span>
                  </h2>
                </div>
                <div>
                  <p>wsw</p>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div className="">
                  <h2>
                    7<span>mph</span>
                  </h2>
                </div>
                <div>
                  <p>wsw</p>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div>
                  <h2 className="fs-1">
                    7<span className="fs-3">mph</span>
                  </h2>
                </div>
              </div>

              <div className="weather-details-card py-4 m-2  col-5">
                <div>
                  <p>Wind status</p>
                </div>
                <div className="">
                  <h2>
                    7<span>mph</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 text-center text-white fw-light">
            Developed by: Boakai Dorbor Kamara
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
