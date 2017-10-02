import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as WHS from 'whs/build/whs';
import * as THREE from 'whs/node_modules/three';

@Component({
  templateUrl: 'dice-dialog.component.html',
  styleUrls: ['dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  private static TEXTURE_TABLE = 'assets/textures/walnut-tabletop.jpg';

  private app: WHS.App;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  public ngAfterViewInit() {
    this.createWHSApp();
    this.setupScenery();
  }

  public onRethrow(): void {
    console.log('Rethrowing');

    this.app.start();
  }

  private createWHSApp(): void {
    this.app = new WHS.App([
      new WHS.ElementModule(this.canvasRef.nativeElement),
      new WHS.SceneModule(),
      new WHS.CameraModule({
        position: {
          y: 10,
          z: 50
        }
      }),
      new WHS.RenderingModule({
        bgColor: 0x162129,
        renderer: {
          antialias: true,
          shadowmap: {
            type: THREE.PCFSoftShadowMap,
          },
        }
      }),
      new WHS.ResizeModule(),
      new WHS.OrbitControlsModule()
    ]);
  }

  public setupScenery() {
    // this.addSphere();
    // this.AddDie();
    // this.addPlane();
    // this.addPointLight();
    this.addLight();

    this.app.start();
  }

  private addSphere(): void {
    const sphere = new WHS.Sphere({
      geometry: {
        radius: 5,
        widthSegments: 32,
        heightSegments: 32
      },

      material: new THREE.MeshPhongMaterial({
        color: 0xF2F2F2
      }),

      position: new THREE.Vector3(0, 5, 0)
    });
    sphere.addTo(this.app);
  }

  private AddDie(): void {
    const box = new WHS.Box({
      geometry: [10, 10, 10],

      // material: new THREE.MeshPhongMaterial({
      //   color: UTILS.$colors.mesh
      // }),

      // shadow,

      // modules: [
      //   new WHS.TextureModule({
      //     url: `${process.assetsPath}/textures/box.jpg`
      //   })
      // ],

      position: [-15, 0, 0]
    });

    box.addTo(this.app);
  }

  // private addPlane(): void {
  //   new WHS.Plane({
  //     geometry: {
  //       width: 100,
  //       height: 100
  //     },
  //
  //     // material: new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(DiceDialogComponent.TEXTURE_TABLE)}),
  //
  //     material: new THREE.MeshPhongMaterial({color: 0x447F8B}),
  //
  //     rotation: {
  //       x: -Math.PI / 2
  //     }
  //   }).addTo(this.app);
  // }

  private addPointLight(): void {
    new WHS.PointLight({
      light: {
        intensity: 0.5,
        distance: 100
      },

      shadow: {
        fov: 90
      },

      position: new THREE.Vector3(0, 10, 10)
    }).addTo(this.app);
  }

  private addLight(): void {
    new WHS.AmbientLight({
      light: {
        intensity: 0.4
      }
    }).addTo(this.app);
  }
}
