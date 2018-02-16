import {Engine, HemisphericLight, Light, MeshBuilder, Scene, TargetCamera, Vector3} from 'babylonjs';

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

    const camera = new BABYLON.FreeCamera('Camera', new BABYLON.Vector3(0, 0, -20), this._scene);
    camera.attachControl(this._canvas, true);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));

    const light = new BABYLON.DirectionalLight('dir02', new BABYLON.Vector3(0.2, -1, 0), this._scene);
    light.position = new BABYLON.Vector3(0, 80, 0);

    // Material
    const materialAmiga = new BABYLON.StandardMaterial('amiga', this._scene);
    materialAmiga.diffuseTexture = new BABYLON.Texture('/assets/textures/walnut-tabletop.jpg', this._scene);
    materialAmiga.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    // materialAmiga.diffuseTexture.uScale = 5;
    // materialAmiga.diffuseTexture.vScale = 5;

    const materialAmiga2 = new BABYLON.StandardMaterial('amiga', this._scene);
    materialAmiga2.diffuseTexture = new BABYLON.Texture('/assets/textures/walnut-tabletop.jpg', this._scene);
    materialAmiga2.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);

    // Shadows
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);

    // Physics
    this._scene.enablePhysics(null, new BABYLON.OimoJSPlugin());

    // Dice
    const box0 = BABYLON.Mesh.CreateBox('Box0', 3, this._scene);
    box0.position = new BABYLON.Vector3(3, 30, 0);


    box0.rotation.y = 4;
    box0.rotation.x = 3;
    const materialWood = new BABYLON.StandardMaterial('wood', this._scene);
    materialWood.diffuseTexture = new BABYLON.Texture('/assets/textures/dice-1.png', this._scene);
    materialWood.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    box0.material = materialWood;

    shadowGenerator.addShadowCaster(box0);

    // Playground
    const ground = BABYLON.Mesh.CreateBox('Ground', 1, this._scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;

    const border0 = BABYLON.Mesh.CreateBox('border0', 1, this._scene);
    border0.scaling = new BABYLON.Vector3(1, 100, 100);
    border0.position.y = -5.0;
    border0.position.x = -50.0;
    border0.checkCollisions = true;

    const border1 = BABYLON.Mesh.CreateBox('border1', 1, this._scene);
    border1.scaling = new BABYLON.Vector3(1, 100, 100);
    border1.position.y = -5.0;
    border1.position.x = 50.0;
    border1.checkCollisions = true;

    const border2 = BABYLON.Mesh.CreateBox('border2', 1, this._scene);
    border2.scaling = new BABYLON.Vector3(100, 100, 1);
    border2.position.y = -5.0;
    border2.position.z = 50.0;
    border2.checkCollisions = true;

    const border3 = BABYLON.Mesh.CreateBox('border3', 1, this._scene);
    border3.scaling = new BABYLON.Vector3(100, 100, 1);
    border3.position.y = -5.0;
    border3.position.z = -50.0;
    border3.checkCollisions = true;

    const groundMat = new BABYLON.StandardMaterial('groundMat', this._scene);
    groundMat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    groundMat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    groundMat.diffuseTexture = new BABYLON.Texture('/assets/textures/walnut-tabletop.jpg', this._scene);
    groundMat.backFaceCulling = false;
    ground.material = groundMat;
    border0.material = groundMat;
    border1.material = groundMat;
    border2.material = groundMat;
    border3.material = groundMat;
    ground.receiveShadows = true;

    // Physics
    box0.physicsImpostor = new BABYLON.PhysicsImpostor(box0, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 6,
      friction: 0.4,
      restitution: 0.3
    }, this._scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 0,
      friction: 0.5,
      restitution: 0.7
    }, this._scene);
    border0.physicsImpostor = new BABYLON.PhysicsImpostor(border0, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, this._scene);
    border1.physicsImpostor = new BABYLON.PhysicsImpostor(border1, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, this._scene);
    border2.physicsImpostor = new BABYLON.PhysicsImpostor(border2, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, this._scene);
    border3.physicsImpostor = new BABYLON.PhysicsImpostor(border3, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, this._scene);
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
