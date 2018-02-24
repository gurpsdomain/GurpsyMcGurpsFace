import {MaterialFactory} from '../material/material.factory';

export class DiceTrayFactory {


  public static createDiceTray(scene: BABYLON.Scene): void {

    const groundMat = MaterialFactory.getInstance().getWallnutMaterial(scene);

    const border0 = BABYLON.Mesh.CreateBox('border0', 1, scene);
    border0.scaling = new BABYLON.Vector3(1, 8, 30);
    border0.position.y = -3.0;
    border0.position.x = -15.0;
    border0.checkCollisions = true;
    border0.receiveShadows = true;
    border0.material = groundMat;

    const border1 = BABYLON.Mesh.CreateBox('border1', 1, scene);
    border1.scaling = new BABYLON.Vector3(1, 8, 30);
    border1.position.y = -3.0;
    border1.position.x = 15.0;
    border1.checkCollisions = true;
    border1.receiveShadows = true;
    border1.material = groundMat;

    const border2 = BABYLON.Mesh.CreateBox('border2', 1, scene);
    border2.scaling = new BABYLON.Vector3(30, 8, 1);
    border2.position.y = -3.0;
    border2.position.z = 15.0;
    border2.checkCollisions = true;
    border2.receiveShadows = true;
    border2.material = groundMat;

    const border3 = BABYLON.Mesh.CreateBox('border3', 1, scene);
    border3.scaling = new BABYLON.Vector3(30, 8, 1);
    border3.position.y = -3.0;
    border3.position.z = -15.0;
    border3.checkCollisions = true;
    border3.receiveShadows = true;
    border3.material = groundMat;

    border0.physicsImpostor = new BABYLON.PhysicsImpostor(border0, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    border1.physicsImpostor = new BABYLON.PhysicsImpostor(border1, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    border2.physicsImpostor = new BABYLON.PhysicsImpostor(border2, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    border3.physicsImpostor = new BABYLON.PhysicsImpostor(border3, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
  }
}
