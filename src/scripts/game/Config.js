import {Tools} from "../system/Tools";
import {GameScene} from "./GameScene";

export const Config = {
    loader: Tools.importAll(require["context"]('./../../sprites', true, /\.(png|mp3)$/)),
    startScene: GameScene
}