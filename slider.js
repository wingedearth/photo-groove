class RangeSlider extends HTMLElement {
  connectedCallback() {
    console.info("RangeSlider connected");
    var input = document.createElement("input");
    this.appendChild(input);

    var jsr = new JSR(input, {
      max: this.max,
      values: [this.val],
      sliders: 1,
      grid: false,
    });

    var rangeSliderNode = this;

    jsr.addEventListener("update", function (elem, value) {
      var event = new CustomEvent("slide", {
        detail: { newValue: value },
      });

      rangeSliderNode.dispatchEvent(event);
    });
  }
}
window.customElements.define("range-slider", RangeSlider);
