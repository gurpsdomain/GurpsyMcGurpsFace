export class MaterialFactory {

  private static _instance: MaterialFactory;
  private _dieMaterial: BABYLON.Material;
  private _wallnnutMaterial: BABYLON.Material;

  public static getInstance(): MaterialFactory {
    if (!this._instance) {
      this._instance = new MaterialFactory();
    }
    return this._instance;
  }

  public getDieMaterial(scene: BABYLON.Scene): BABYLON.Material {
    if (!this._dieMaterial) {
      this._dieMaterial = this.createDieMaterial(scene);
    }
    return this._dieMaterial;
  }

  public getWallnutMaterial(scene: BABYLON.Scene): BABYLON.Material {
    if (!this._wallnnutMaterial) {
      this._wallnnutMaterial = this.createWallnutMaterial(scene);
    }
    return this._wallnnutMaterial;
  }

  private createDieMaterial(scene: BABYLON.Scene): BABYLON.Material {
    const textureFaceOne = new BABYLON.Texture('assets/textures/dice-1.png', scene);
    const materialFaceOne = new BABYLON.StandardMaterial('bone', scene);
    materialFaceOne.diffuseTexture = textureFaceOne;
    materialFaceOne.freeze();

    const textureFaceTwo = new BABYLON.Texture('assets/textures/dice-2.png', scene);
    const materialFaceTwo = new BABYLON.StandardMaterial('bone', scene);
    materialFaceTwo.diffuseTexture = textureFaceTwo;
    materialFaceTwo.freeze();

    const textureFaceThree = new BABYLON.Texture('assets/textures/dice-3.png', scene);
    const materialFaceThree = new BABYLON.StandardMaterial('bone', scene);
    materialFaceThree.diffuseTexture = textureFaceThree;
    materialFaceThree.freeze();

    const textureFaceFour = new BABYLON.Texture('assets/textures/dice-4.png', scene);
    const materialFaceFour = new BABYLON.StandardMaterial('bone', scene);
    materialFaceFour.diffuseTexture = textureFaceFour;
    materialFaceFour.freeze();

    const textureFaceFive = new BABYLON.Texture('assets/textures/dice-5.png', scene);
    const materialFaceFive = new BABYLON.StandardMaterial('bone', scene);
    materialFaceFive.diffuseTexture = textureFaceFive;
    materialFaceFive.freeze();

    const textureFaceSix = new BABYLON.Texture('assets/textures/dice-6.png', scene);
    const materialFaceSix = new BABYLON.StandardMaterial('bone', scene);
    materialFaceSix.diffuseTexture = textureFaceSix;
    materialFaceSix.freeze();

    const multimat = new BABYLON.MultiMaterial('multi', scene);
    multimat.subMaterials.push(materialFaceOne);
    multimat.subMaterials.push(materialFaceTwo);
    multimat.subMaterials.push(materialFaceThree);
    multimat.subMaterials.push(materialFaceFour);
    multimat.subMaterials.push(materialFaceFive);
    multimat.subMaterials.push(materialFaceSix);

    return multimat;
  }

  private createWallnutMaterial(scene: BABYLON.Scene): BABYLON.Material {
    const material = new BABYLON.StandardMaterial('wallnut', scene);
    material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    material.diffuseTexture = new BABYLON.Texture('assets/textures/walnut-tabletop.png', scene);
    material.freeze();

    return material;
  }
}
