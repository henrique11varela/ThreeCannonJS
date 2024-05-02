import * as THREE from "three";
import { Camera, camera } from "./camera";
import { scene } from "./scene";
import { world } from "./world";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


class Renderer extends THREE.WebGLRenderer {
  constructor(private camera: Camera) {
    super()
    // resize event
    const resize = () => {
      this.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize)
    resize()
  }
}

let lastFrameTimeStamp: number = 0

function animate(time: number) {
  const deltaTime = (time - lastFrameTimeStamp) / 1000
  world.step(world.TIME_STEP, deltaTime, world.MAX_SUB_STEPS)
  renderer.render(scene, camera)
}

const renderer: Renderer = new Renderer(camera)

renderer.setAnimationLoop(animate)

const controls = new OrbitControls(camera, renderer.domElement)

export {
  Renderer,
  renderer,
}
