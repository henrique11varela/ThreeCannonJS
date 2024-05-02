import * as THREE from "three";

class Scene extends THREE.Scene {
  constructor() {
    super()
  }
}

const scene: Scene = new Scene()

// scene.add(cube)

const dLight: THREE.DirectionalLight = new THREE.DirectionalLight()
scene.add(dLight)
dLight.position.set(2, 2, 1)
dLight.intensity = 5

const dLight2: THREE.DirectionalLight = new THREE.DirectionalLight()
scene.add(dLight2)
dLight2.position.set(1, -1, -1)
dLight2.intensity = 1

const aLight: THREE.AmbientLight = new THREE.AmbientLight()
scene.add(aLight)



export {
  Scene,
  scene,
}
