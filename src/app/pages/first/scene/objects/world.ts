import { World, WorldOptions } from "../../../../../three/world"
import * as CANNON from "cannon-es"

const options: WorldOptions = {
  gravity: new CANNON.Vec3(0, -9.81, 0)
}

const world: World = new World(options)

export {
  world,
}
