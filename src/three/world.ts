import * as CANNON from 'cannon-es'
type WorldOptions = ({
  gravity?: CANNON.Vec3 | undefined;
  frictionGravity?: CANNON.Vec3 | undefined;
  allowSleep?: boolean | undefined;
  broadphase?: CANNON.Broadphase | undefined;
  solver?: CANNON.Solver | undefined;
  quatNormalizeFast?: boolean | undefined;
  quatNormalizeSkip?: number | undefined;
} | undefined)

const timeStep: number = 1 / 60
const maxSubSteps: number = 3

class World extends CANNON.World {

  public get TIME_STEP() : number {
    return timeStep
  }
  public get MAX_SUB_STEPS() : number {
    return maxSubSteps
  }

  constructor(options?: WorldOptions) {
    super(options);

  }
}

const options: WorldOptions = {
  gravity: new CANNON.Vec3(0, -9.81, 0)
}

const world: World = new World(options)




export {
  WorldOptions,
  World,
  world,
}
