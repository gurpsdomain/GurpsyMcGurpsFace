export class DieFactory {

  public static createDie(shadowGenerator: BABYLON.ShadowGenerator, scene: BABYLON.Scene, material: BABYLON.Material): BABYLON.Mesh {
    const die = BABYLON.Mesh.CreateBox('Box0', 3, scene);
    die.position = new BABYLON.Vector3(
      this.createRandomInt(5),
      this.createRandomInt(5, 20),
      this.createRandomInt(5));

    die.rotation.y = this.createRandomInt(20);
    die.rotation.x = this.createRandomInt(20);
    die.rotation.z = this.createRandomInt(20);

    die.subMeshes = [];
    const verticesCount = die.getTotalVertices();
    die.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 6, die));
    die.subMeshes.push(new BABYLON.SubMesh(1, 1, verticesCount, 6, 6, die));
    die.subMeshes.push(new BABYLON.SubMesh(2, 2, verticesCount, 12, 6, die));
    die.subMeshes.push(new BABYLON.SubMesh(3, 3, verticesCount, 18, 6, die));
    die.subMeshes.push(new BABYLON.SubMesh(4, 4, verticesCount, 24, 6, die));
    die.subMeshes.push(new BABYLON.SubMesh(5, 5, verticesCount, 30, 6, die));
    die.material = material;

    shadowGenerator.addShadowCaster(die);

    die.physicsImpostor = new BABYLON.PhysicsImpostor(die, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 6,
      friction: 0.4,
      restitution: 0.3
    }, scene);

    return die;
  }

  private static createRandomInt(delta: number, min: number = 0): number {
    const random = min + Math.floor(Math.random() * Math.floor(delta));
    return random;
  }

  public static reposition(die: BABYLON.Mesh): void {
    die.position = new BABYLON.Vector3(
      this.createRandomInt(5),
      this.createRandomInt(5, 20),
      this.createRandomInt(5));
  }
}
