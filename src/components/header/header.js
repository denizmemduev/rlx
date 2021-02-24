import React from "react";
import Aos from "aos";
import "./header.css";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Windows from "../windows";
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
    duration: 2000,
  });
  return (
    <div data-aos={"fade-in"} className="header">
      <h1 id="logo">RLX</h1>
      <div className="slider">
        {" "}
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              color={"secondary"}
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
    </div>
  );
}
