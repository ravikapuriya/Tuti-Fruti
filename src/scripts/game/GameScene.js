import * as PIXI from "pixi.js";
import {App} from "../system/App";
import {Field} from "./Field";

export class GameScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBG();

        const field = new Field(1, 1);
        this.container.addChild(field.sprite);
    }

    createBG() {
        this.bg = App.sprite("bg");
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);


    }

}