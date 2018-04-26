import * as Module from './modules';

class App {
  constructor() {
    this.menu = new Module.Menu();
    this.parallax = new Module.Parallax(this.menu);
  }
}

window.onload = () => { var app = new App(); };
