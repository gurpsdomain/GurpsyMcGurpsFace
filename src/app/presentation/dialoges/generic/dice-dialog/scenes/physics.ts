import {Engine, HemisphericLight, Light, MeshBuilder, Scene, TargetCamera, Vector3} from 'babylonjs';
import {DieFactory} from './die.factory';
import {DiceTrayFactory} from './dice-tray.factory';

export class Physics {

  private _canvas: HTMLCanvasElement;
  private _engine: Engine;
  private _scene: Scene;

  constructor(canvasElement: string) {
    this._canvas = <HTMLCanvasElement>document.getElementById(canvasElement);
    this._engine = new Engine(this._canvas, true);
  }

  public createScene(): void {
    this._scene = new BABYLON.Scene(this._engine);

    const camera = new BABYLON.FreeCamera('Camera', new BABYLON.Vector3(0, 4, -30), this._scene);
    camera.attachControl(this._canvas, true);
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
    DieFactory.createDie(shadowGenerator, this._scene);
    DieFactory.createDie(shadowGenerator, this._scene);
    DieFactory.createDie(shadowGenerator, this._scene);

    DiceTrayFactory.createDiceTray(this._scene);

    // Playground
    const ground = BABYLON.Mesh.CreateBox('Ground', 1, this._scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;

    const groundMat = new BABYLON.StandardMaterial('groundMat', this._scene);
    groundMat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    groundMat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    groundMat.diffuseTexture = new BABYLON.Texture('/assets/textures/walnut-tabletop.jpg', this._scene);
    groundMat.backFaceCulling = false;
    ground.material = groundMat;

    ground.receiveShadows = true;

    // Physics
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 0,
      friction: 0.5,
      restitution: 0.7
    }, this._scene);
  }

  animate(): void {
    // run the render loop
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
      this._engine.resize();
    });
  }
}
