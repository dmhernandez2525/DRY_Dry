import React from "react";
import Footer from "../../Base/Footer";
import Icons from "../../Icons/Icon/Icons";
import Icon from "../../Icons/Icon/Icon";
import "./SinglePage.scss";

const token = process.env.REACT_APP_TOKEN;

class SinglePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalBool: this.props.modalBool
    };
    this.teleRefHome = React.createRef();
    this.teleRef1 = React.createRef();
    this.teleRef2 = React.createRef();
    this.teleRef3 = React.createRef();
    this.teleRef4 = React.createRef();
    this.teleRef5 = React.createRef();
    this.teleRef6 = React.createRef();
    this.teleRef7 = React.createRef();
    this.teleRef8 = React.createRef();
    this.teleRef9 = React.createRef();
    this.teleRef10 = React.createRef();
    this.teleRefContact = React.createRef();
    // this.teleRefSocal = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.setStateModalCB = this.setStateModalCB.bind(this);
  }

  executeScroll = ref => window.scrollTo(0, ref.current.offsetTop);

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // document.getElementById("favicon").href = `${favicon}`;
    // document.getElementById("site-title").innerText = `Dark Spark Games`;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    // document.getElementById("favicon").href = `${companyLogo}`;
    // document.getElementById("site-title").innerText = `Comfort Order`;
  }

  handleScroll(event) {
    let scrollHeight = event.currentTarget.scrollY;
    if (scrollHeight >= 500) {
      document.getElementById("navbar").classList.add("navbar-bg");
    } else {
      document.getElementById("navbar").classList.remove("navbar-bg");
    }
  }

  setStateModalCB(modalBool) {
    // is invoked in HOC to cause React re-render
    // passed to child component so it can pass to HOC to then invoke
    this.setState({ modalBool });
  }
  render() {
    let allFeatures = this.props.features;
    let css = ["container feature-display black", "container feature-display"];

    let nav = Object.keys(allFeatures).map((feature, i) => {
      return (
        <li key={`${allFeatures[feature].type}${i}`}>
          <a onClick={() => this.executeScroll(this[`teleRef${i + 1}`])}>
            {allFeatures[feature].type}
          </a>
        </li>
      );
    });

    nav.unshift(
      <li key={`addOn1`}>
        <a onClick={() => this.executeScroll(this.teleRefHome)}>Home</a>
      </li>
    );
    nav.push(
      <li key={`addOn2`}>
        <a onClick={() => this.executeScroll(this.teleRefContact)}>Contact</a>
      </li>
    );
    nav.push(
      <li key={`addOn3`}>
        {/* <a onClick={() => this.executeScroll(this.teleRefSocal)}>Socal</a> */}
      </li>
    );
    nav.push(
    <li key={`addOn4`}> {/* <Link to="/login">Login</Link> */}</li>
    );
    nav.push(
      <li key={`addOn5`}>{/* <Link to="/register">Register</Link> */}</li>
    );

    let display = Object.keys(allFeatures).map((currentFeature, i) => {
      return (
        <div
          key={`${i}${allFeatures[currentFeature].type}${i}`}
          id={`teleport-option${i}`}
          className="feature"
          ref={this[`teleRef${i + 1}`]}
        >
          <div className={css[i % 2]}>
            <h2 className="hero-title">{allFeatures[currentFeature].type}</h2>
            {allFeatures[currentFeature].feature}
          </div>
        </div>
      );
    });

    return (
      <div className="restaurant template">
        <Icons />
        <header className="restaurant-nav">
          <div id="navbar" className="navbar" role="navigation">
            <div className="container nav-input-wrapper">
              <ul id="top-menu" className="navbar-nav navbar-right">
                {nav}
              </ul>
            </div>
          </div>
        </header>
        <div id="teleport-Home" className="" ref={this.teleRefHome}>
          <section id="restaurant-hero-section">
            <div className="hero-photo-sizing">
              <div className="landing-photo-container">
                <img src={this.props.businessData.hero} />
                <div className="top-hero-content">
                  <span className="small-hero-title">Welcome To</span>
                  <h2 className="hero-title-1">
                    {this.props.businessData.name}
                  </h2>
                  <p>{this.props.businessData.slogan}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {display}

        <div
          id="teleport-Contact"
          className="feature"
          ref={this.teleRefContact}
        >
          <div id="map-directions-button" className="container">
            <a
              href={`https://www.google.com/maps/dir//${this.props.businessData.address}?hl=en-US`}
            >
              Click Here For Directions Help
            </a>
          </div>
          <div className="map-wrapper">
            <iframe
              src={`https://maps.google.com/maps?q=${this.props.businessData.address}&t=m&z=10&output=embed&iwloc=near`}
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>

            <div className="dry-singlePage__icon-wrapper">
              <a
                href={`https://www.google.com/maps/dir//${this.props.businessData.address}?hl=en-US`}
              >
                <Icon icon="directions-dry" />
              </a> 
              <a href="tel:217-508-4048">
                <Icon icon="phone2" />
              </a>
            </div>
          </div>
        </div>

        <div id="teleport-footer" className="feature" ref={this.teleRefSocal}>
          <div className="dry-singlePage__socal-icon-wrapper">
            {/* TO DO Add DRY typography to this  */}
            <h3>Socal Links</h3>
            <div className="dry-singlePage__icon-wrapper">
              <Icon icon="facebook2" />
              <Icon icon="instagram" />
              <Icon icon="youtube" />
              <Icon icon="twitter" />
            </div>
          </div>

          <footer id="restaurant-footer">
            <Footer key={"mainFooter"} />
          </footer>
        </div>
      </div>
    );
  }
}

export default SinglePage;
