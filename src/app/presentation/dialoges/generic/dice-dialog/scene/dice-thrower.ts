import {Engine, HemisphericLight, Light, MeshBuilder, Scene, TargetCamera, Vector3} from 'babylonjs';
import {MaterialFactory} from './factories/material/material.factory';
import {DieFactory} from './factories/die/die.factory';
import {DiceTrayFactory} from './factories/dice-tray/dice-tray.factory';

export class DiceThrower {

  private _canvas: HTMLCanvasElement;
  private _engine: Engine;
  private _scene: Scene;
  private _dice: BABYLON.Mesh[] = [];

  constructor(canvasElement: string) {
    this._canvas = <HTMLCanvasElement>document.getElementById(canvasElement);
    this._engine = new Engine(this._canvas, true);
  }

  public createScene(): void {
    this._scene = new BABYLON.Scene(this._engine);

    const camera = new BABYLON.FreeCamera('Camera', new BABYLON.Vector3(0, 20, -50), this._scene);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));

    const light = new BABYLON.DirectionalLight('dir02', new BABYLON.Vector3(0.2, -1, 0), this._scene);
    light.position = new BABYLON.Vector3(0, 40, 0);

    // Shadows
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);

    // Physics
    this._scene.enablePhysics(null, new BABYLON.OimoJSPlugin());

    // Dice
    const dieMaterial = MaterialFactory.getInstance().getDieMaterial(this._scene);
    this._dice.push(DieFactory.createDie(shadowGenerator, this._scene, dieMaterial));
    this._dice.push(DieFactory.createDie(shadowGenerator, this._scene, dieMaterial));
    this._dice.push(DieFactory.createDie(shadowGenerator, this._scene, dieMaterial));

    DiceTrayFactory.createDiceTray(this._scene);

    // Playground
    const groundMat = MaterialFactory.getInstance().getWallnutMaterial(this._scene);
    const ground = BABYLON.Mesh.CreateBox('Ground', 1, this._scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;

    ground.material = groundMat;
    ground.receiveShadows = true;

    // Physics
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 0,
      friction: 0.5,
      restitution: 0.7
    }, this._scene);
  }

  public animate(): void {
    this.runRenderLoop(this._engine, this._scene);
    this.addResizeHandler(this._engine);
  }

  public retrow(): void {
    for (const die of this._dice) {
      DieFactory.reposition(die);
    }
  }

  private runRenderLoop(engine: BABYLON.Engine, scene: BABYLON.Scene): void {
    engine.runRenderLoop(() => {
      scene.render();
    });
  }

  private addResizeHandler(engine: BABYLON.Engine): void {
    window.addEventListener('resize', () => {
      engine.resize();
    });
  }
}
