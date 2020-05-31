import React from "react";

import NonProfit from "./NonProfit";

import {
  Pricing,
  About,
  Hours,
  ImageCarousel,
  SpotlightGallery,
  Team
} from "../../index";
// END OF ALL THE FEATURES

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.formatFeatures = this.formatFeatures.bind(this);
    this.makeFeature = this.makeFeature.bind(this);
    this.features = this.formatFeatures();
  }

  makeFeature(feature, data) {
    switch (feature) {
      case "Pricing":
        return <Pricing {...data[0]} />;
      case "About":
        return <About {...data[0]} />;
      case "Hours":
        return <Hours {...data[0]} />;
      case "ImageCarousel":
        return <ImageCarousel {...data[0]} />;
      case "SpotlightGallery":
        return <SpotlightGallery {...data[0]} />;
      case "Team":
        return <Team {...data[0]} />;

      default:
        return <div></div>;
    }
  }

  formatFeatures() {
    let fe = {};
    Object.keys(this.props.features).map(feature => {
      let key = Object.keys(this.props.features[feature]);
      let value = Object.values(this.props.features[feature]);
      fe[feature] = {
        feature: this.makeFeature(key[0], value[0]),
        type: key[0]
      };
    });
    return fe;
  }

  render() {
    if (this.props.template === "NonProfit") {
      return (
        <NonProfit
          features={this.features}
          businessData={this.props.businessData}
        />
      );
    }
  }
}

export default Index;
