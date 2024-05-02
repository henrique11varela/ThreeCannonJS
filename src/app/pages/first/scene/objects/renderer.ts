import { camera } from "./camera";
import { scene } from "./scene";
import { world } from "./world";
import { Renderer } from '../../../../../three/renderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loop } from "../MainScene";

let lastFrameTimeStamp: number = 0
const renderer: Renderer = new Renderer(camera)

function animate(time: number) {
  const deltaTime = (time - lastFrameTimeStamp) / 1000
  loop()
  world.step(world.TIME_STEP, deltaTime, world.MAX_SUB_STEPS)
  renderer.render(scene, camera)
}


renderer.setAnimationLoop(animate)

const controls = new OrbitControls(camera, renderer.domElement)

export {
  renderer,
}
