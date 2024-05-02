import * as THREE from "three"
import * as CANNON from "cannon-es"
import { scene } from "./objects/scene";
import { world } from "./objects/world";

//ball
const ballGeometry: THREE.SphereGeometry = new THREE.SphereGeometry()
const ballMaterial: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ff0000')
})
const ballBody: CANNON.Body = new CANNON.Body({
  shape: new CANNON.Sphere(1),
  mass: 1
})
const ball: THREE.Mesh = new THREE.Mesh(ballGeometry, ballMaterial)

// light
const dLight: THREE.DirectionalLight = new THREE.DirectionalLight()
dLight.position.set(2, 2, -1)
dLight.intensity = 5

//ground
const groundGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(10,1,10)
const groundMaterial: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#00ff00'),
  side: THREE.DoubleSide
})
const groundBody: CANNON.Body = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(5, .5, 5)),
  type: CANNON.BODY_TYPES.STATIC
})
const ground: THREE.Mesh = new THREE.Mesh(groundGeometry, groundMaterial)
ground.position.y = -10
groundBody.position.y = -10

function setup() {
  scene.add(dLight)
  scene.add(ball)
  scene.add(ground)
  world.addBody(ballBody)
  world.addBody(groundBody)
}

function loop() {
  ball.position.copy(ballBody.position)
  ground.position.copy(groundBody.position)
}



export {
  loop,
  setup
}
