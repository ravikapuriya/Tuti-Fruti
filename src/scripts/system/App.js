import * as PIXI from "pixi.js";
import {Loader} from "./Loader";

class Application {
    run(config) {
        this.config = config;
        this.app = new PIXI.Application();
        this.config.stage = this.app.stage;
        this.app.init({width: window.innerWidth, height: window.innerHeight}).then(() => {
            document.body.appendChild(this.app.canvas);
        });

        this.loader = new Loader(this.config);
        this.loader.preload().then(() => this.start());
    }

    res(key) {
        return this.loader.resources[key];
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    start() {
        this.scene = new this.config["startScene"]();
        this.app.stage.addChild(this.scene.container);
    }
}

export const App = new Application();