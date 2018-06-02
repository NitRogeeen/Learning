import Root from './components/root';

class Renderer {

  constructor(targetElementId) {
    this.targetElement = document.getElementById(targetElementId);
    this.root = new Root(this.targetElement);
  }
}

window.boilerplate = {
  Renderer
};