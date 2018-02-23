export class MaterialFactory {

  static createDieMaterial(scene: BABYLON.Scene): BABYLON.Material {
    const textureFaceOne = new BABYLON.Texture('/assets/textures/dice-1.png', scene);
    const materialFaceOne = new BABYLON.StandardMaterial('bone', scene);
    materialFaceOne.diffuseTexture = textureFaceOne;

    const textureFaceTwo = new BABYLON.Texture('/assets/textures/dice-2.png', scene);
    const materialFaceTwo = new BABYLON.StandardMaterial('bone', scene);
    materialFaceTwo.diffuseTexture = textureFaceTwo;

    const textureFaceThree = new BABYLON.Texture('/assets/textures/dice-3.png', scene);
    const materialFaceThree = new BABYLON.StandardMaterial('bone', scene);
    materialFaceThree.diffuseTexture = textureFaceThree;

    const textureFaceFour = new BABYLON.Texture('/assets/textures/dice-4.png', scene);
    const materialFaceFour = new BABYLON.StandardMaterial('bone', scene);
    materialFaceFour.diffuseTexture = textureFaceFour;

    const textureFaceFive = new BABYLON.Texture('/assets/textures/dice-5.png', scene);
    const materialFaceFive = new BABYLON.StandardMaterial('bone', scene);
    materialFaceFive.diffuseTexture = textureFaceFive;

    const textureFaceSix = new BABYLON.Texture('/assets/textures/dice-6.png', scene);
    const materialFaceSix = new BABYLON.StandardMaterial('bone', scene);
    materialFaceSix.diffuseTexture = textureFaceSix;

    const multimat = new BABYLON.MultiMaterial('multi', scene);
    multimat.subMaterials.push(materialFaceOne);
    multimat.subMaterials.push(materialFaceTwo);
    multimat.subMaterials.push(materialFaceThree);
    multimat.subMaterials.push(materialFaceFour);
    multimat.subMaterials.push(materialFaceFive);
    multimat.subMaterials.push(materialFaceSix);

    return multimat;
  }
}
