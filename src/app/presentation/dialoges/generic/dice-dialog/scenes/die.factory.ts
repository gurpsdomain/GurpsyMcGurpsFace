export class DieFactory {

  public static createDie(shadowGenerator: BABYLON.ShadowGenerator, scene: BABYLON.Scene): void {
    const die = BABYLON.Mesh.CreateBox('Box0', 3, scene);
    die.position = new BABYLON.Vector3(
      this.createRandomInt(5),
      this.createRandomInt(5, 20),
      this.createRandomInt(5));

    die.rotation.y = this.createRandomInt(7);
    die.rotation.x = this.createRandomInt(7);
    const materialWood = new BABYLON.StandardMaterial('wood', scene);
    materialWood.diffuseTexture = new BABYLON.Texture('/assets/textures/dice-1.png', scene);
    materialWood.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    die.material = materialWood;

    shadowGenerator.addShadowCaster(die);

    die.physicsImpostor = new BABYLON.PhysicsImpostor(die, BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 6,
      friction: 0.4,
      restitution: 0.3
    }, scene);
  }

  private static createRandomInt(delta: number, min: number = 0): number {
    const random = min + Math.floor(Math.random() * Math.floor(delta));
    return random;
  }
}
