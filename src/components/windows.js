import React, { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import $ from "jquery";
import "./windows.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Windows() {
  Aos.init({
    duration: 2000,
  });

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <Paper data-aos={"fade-in"} id={props.id} className={"paper"}>
            <div>
              <h1>{props.text}</h1>
              <audio
                className="audio"
                id={props.id}
                accessKey={props.accesskey}
                src={props.src}
                aria-controls="text"
                loop
              ></audio>
            </div>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="root">
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <FormRow
            text="Rain"
            id={"one"}
            accesskey="01877a46-a904-44df-89ff-8272551b17cb"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Rain-sound-for-sleep.wav?alt=media&token=01877a46-a904-44df-89ff-8272551b17cb"
            autoPlay
          />
          <FormRow
            text="Thunderstorm"
            id={"four"}
            accesskey="c4fce376-35d3-408b-adda-8f3df9f54b31"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Rain-and-thunder-sounds.mp3?alt=media&token=c4fce376-35d3-408b-adda-8f3df9f54b31"
          />
          <FormRow
            text="Ocean Waves"
            id={"three"}
            accesskey="5f45d010-8b08-43d5-b465-015fef026628"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Relaxing-ocean-waves.mp3?alt=media&token=5f45d010-8b08-43d5-b465-015fef026628"
          />
          <FormRow
            text="Forest"
            id={"two"}
            accesskey="dc09888c-c597-4ddf-a9b8-4358d526ba47"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Free-nature-sounds.mp3?alt=media&token=dc09888c-c597-4ddf-a9b8-4358d526ba47"
          />
          <FormRow
            text="Fireplace"
            id={"five"}
            accesskey="bf9ee0e-5a5f-49d6-80a5-2d4ae5ae6bae"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Crackling-fireplace.mp3?alt=media&token=9bf9ee0e-5a5f-49d6-80a5-2d4ae5ae6bae"
          />
          <FormRow
            text="Farm"
            id={"six"}
            accesskey="2d137281-8bbf-47a7-86b3-1932bba9441c"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/Farm-background-noise.mp3?alt=media&token=2d137281-8bbf-47a7-86b3-1932bba9441c"
          />

          <FormRow
            text="Birds"
            id={"seven"}
            accesskey="c3696184-75c7-4b48-b075-17e3f51d546e"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/mixkit-morning-birds-2472.wav?alt=media&token=c3696184-75c7-4b48-b075-17e3f51d546e"
          />

          <FormRow
            text="River"
            id={"eight"}
            accesskey="a5bc8212-dcb3-4a9b-8479-54e476ba871c"
            src="https://firebasestorage.googleapis.com/v0/b/music-f4836.appspot.com/o/mixkit-water-flowing-ambience-loop-3126.wav?alt=media&token=a5bc8212-dcb3-4a9b-8479-54e476ba871c"
          />
        </Grid>
      </Grid>
    </div>
  );
}
$(document).ready(function () {
  var playing = false;
  $(".paper").click(function () {
    var selected = $(this).attr("id");
    var audio = document.querySelector("audio" + "#" + selected);
    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
      $(this).hover(
        function () {
          $(this).css("filter", "grayscale(0)");
        },
        function () {
          $(this).css("filter", "contrast(0.7)");
        }
      );
    } else {
      audio.play();
      $(this).hover(
        function () {
          $(this).css("filter", "contrast(1)");
        },
        function () {
          $(this).css("filter", "contrast(1)");
        }
      );
    }
  });
});
