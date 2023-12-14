import React, { Component } from "react";
import Particles from "react-particles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default class ParticlesContainer extends Component {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  render() {
    const options = {
      /* custom options */
    };

    return <Particles options={options} init={this.customInit} />;
  }
}