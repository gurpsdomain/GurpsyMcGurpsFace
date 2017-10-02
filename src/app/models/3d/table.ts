// import * as THREE from 'three';
//
// export class Table extends THREE.Mesh {
//
//   private static TEXTURE = 'assets/textures/walnut-tabletop.jpg';
//   private static X = 0;
//   private static Y = -150;
//   private static Z = 0;
//
//   constructor() {
//
//     const tableTexture = new THREE.TextureLoader().load(Table.TEXTURE);
//     const tableMaterial = new THREE.MeshBasicMaterial({map: tableTexture});
//
//     const geometry = new THREE.PlaneGeometry(1024, 512);
//
//     super(geometry, tableMaterial);
//
//     this.position.set(Table.X, Table.Y, Table.Z);
//     this.rotation.x = -Math.PI / 2;
//   }
// }
