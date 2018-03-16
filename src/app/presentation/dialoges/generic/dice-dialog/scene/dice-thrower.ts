import {Engine, HemisphericLight, Light, MeshBuilder, Scene, TargetCamera, Vector3} from 'babylonjs';
import {MaterialFactory} from './factories/material/material.factory';
import {DieFactory} from './factories/die/die.factory';
import {DiceTrayFactory} from './factories/dice-tray/dice-tray.factory';

export class DiceThrower {


  private _canvas: HTMLCanvasElement;
  private _scene: Scene;
  private _engine: Engine;
  private _dice: BABYLON.Mesh[] = [];

  constructor(canvasElement: string) {
    this._canvas = <HTMLCanvasElement>document.getElementById(canvasElement);
    this._engine = new Engine(this._canvas, true);
  }

  public createScene(): void {
    this._scene = new BABYLON.Scene(this._engine);

    this.createCamera(this._scene);
    const light = this.createLight(this._scene);
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
    this.enablePhysics(this._scene);
    this.createSkybox(this._scene);
    this.createDice(this._scene, shadowGenerator);
    this.createDiceTray(this._scene);
    this.createPlayground(this._scene);
    this.runRenderLoop(this._engine, this._scene);
    this.addResizeHandler(this._engine);
  }

  public retrow(): void {
    for (const die of this._dice) {
      DieFactory.reposition(die);
    }
  }

  public cleanup(): void {
    this._engine.stopRenderLoop();
    this._scene.dispose();
    this._engine.dispose();
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

  private createDice(scene: BABYLON.Scene, shadowGenerator: BABYLON.ShadowGenerator): void {
    const dieMaterial = MaterialFactory.getInstance().getDieMaterial(scene);
    this._dice.push(DieFactory.createDie(shadowGenerator, scene, dieMaterial));
    this._dice.push(DieFactory.createDie(shadowGenerator, scene, dieMaterial));
    this._dice.push(DieFactory.createDie(shadowGenerator, scene, dieMaterial));
  }

  private createDiceTray(scene: BABYLON.Scene): void {
    DiceTrayFactory.createDiceTray(scene);
  }

  private enablePhysics(scene: BABYLON.Scene): void {
    scene.enablePhysics(null, new BABYLON.OimoJSPlugin());
  }

  private createPlayground(scene: BABYLON.Scene): void {
    const groundMat = MaterialFactory.getInstance().getWallnutMaterial(scene);
    const ground = BABYLON.Mesh.CreateBox('Ground', 1, scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;

    ground.material = groundMat;
    ground.receiveShadows = true;

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 0,
      friction: 0.5,
      restitution: 0.7
    }, scene);
  }

  private createSkybox(scene: BABYLON.Scene): void {
    const skybox = BABYLON.Mesh.CreateBox('skyBox', 100.0, scene);
    skybox.material = MaterialFactory.getInstance().getSkyBoxMaterial(scene);
  }

  private createCamera(scene: BABYLON.Scene): void {
    const camera = new BABYLON.FreeCamera('Camera', new BABYLON.Vector3(0, 20, -50), scene);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.attachControl(this._canvas, true);
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));
  }

  private createLight(scene: BABYLON.Scene): BABYLON.DirectionalLight {
    const light = new BABYLON.DirectionalLight('directionalLight', new BABYLON.Vector3(0.2, -1, 0), scene);
    light.position = new BABYLON.Vector3(0, 40, 0);
    return light;
  }
}
