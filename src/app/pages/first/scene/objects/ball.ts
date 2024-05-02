import * as THREE from "three"
import * as CANNON from "cannon-es"

const ballGeometry: THREE.SphereGeometry = new THREE.SphereGeometry()
const ballMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
  color: new THREE.Color('#ff0000')
})
const ballBody: CANNON.Body = new CANNON.Body({
  shape: new CANNON.Sphere(1),
  mass: 1
})
const ball: THREE.Mesh = new THREE.Mesh(ballGeometry, ballMaterial)






export {
  ball
}
