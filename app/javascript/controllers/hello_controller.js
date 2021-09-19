// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "toggle", "password" ]

  connect() {
    //this.outputTarget.textContent = 'Hello, Stimulus!'
    this.toggleTarget.addEventListener("change", (event) =>{
      console.log("select:", this.toggleTarget.value);
      console.log("you've changed", this.passwordTargets);
      this.toggleUi();
    });

    this.toggleUi()
  }

  toggleUi() {
    switch(this.toggleTarget.value) {
      case "on":
        this.showPasswords()
        break;
      case "off":
        this.hidePasswords()
        break;
      default:
        this.showPasswords();
    }
  }

  showPasswords() {
    this.passwordTargets.forEach(element => {
      element.querySelectorAll("input").forEach( e => {
        e.disabled = false;
      })
    });
  }

  hidePasswords() {
    this.passwordTargets.forEach(element => {
      element.querySelectorAll("input").forEach( e => {
        e.disabled = true;
      })
    });
  }
}
