import * as THREE from "three";


const sides = [5, 2, 3, 4, 6, 1]

const cubeFaces: THREE.MeshLambertMaterial[] = sides.map((item) => {
  const faceTexture = new THREE.TextureLoader().load(`./assets/three/dice/${item}.png`)
  faceTexture.magFilter = THREE.NearestFilter
  const face = new THREE.MeshLambertMaterial({ map: faceTexture })
  return face
})

const dice = new THREE.Mesh(new THREE.BoxGeometry(), cubeFaces)
