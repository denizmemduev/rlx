import { Component } from "react";
import Aos from "aos";
import "./header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    Aos.init({
      duration: 5000,
    });
    return (
      <div className="header">
        <h1 id="logo">RLX.com </h1>
        <hr />
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
}

export default Header;
