import { Camera } from "../../../../../three/camera";

const camera: Camera = new Camera(50, window.innerWidth / window.innerHeight, .1, 1000)
camera.position.y = 10
camera.rotateX(Math.PI / 2)

export {
  camera,
}
