import * as THREE from "three";

class Camera extends THREE.PerspectiveCamera {
  constructor(fov: number = 50, aspect: number = 1, near: number = 0.1, far: number = 2000) {
    super(fov, aspect, near, far)
  }
}



const camera: Camera = new Camera(50, window.innerWidth / window.innerHeight, .1, 1000)
camera.position.z = 10

export {
  Camera,
  camera,
}
