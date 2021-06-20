import React from "react";
import Aos from "aos";
import "./header.css";
import $ from "jquery";
import headphone from "./headphones.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

export default function Header() {
  const [value, setValue] = React.useState(100);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    $(document).ready(function () {
      var audios = $(".audio");
      for (let audio = 0; audio < audios.length; audio++) {
        audios[audio].volume = value / 100;
      }
    });
  };

  Aos.init({
    duration: 300,
  });
  return (
    <div data-aos={"fade-in"} className="header">
      <div className="white">
        <div id="text">
          <h1 id="logo">RLX</h1>
          <div className="slider">
            {" "}
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider
                  id="slider"
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
          </div>
          <p>
            Want to relax for 10 minutes during the day at home or in office?
            <br /> Want to improve brain work? Or may be want to dream about
            beautiful nature landscapes? Increase concentration? <br />
            <br />
            This is the place which you are looking for.
          </p>
          <div>
            <Button className="button">Contact Creator</Button>
            <Button className="button">Visit</Button>
          </div>
        </div>
        <img id="image" src={headphone}></img>
      </div>
    </div>
  );
}
