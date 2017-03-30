import {Component, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import Scene = THREE.Scene;
import PerspectiveCamera = THREE.PerspectiveCamera;


@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements OnInit {

  private scene: Scene;
  private camera: PerspectiveCamera;

  @ViewChild('diceView') diceView;

  ngOnInit(): void {
    this.createWorld();
  }

  private createWorld(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.diceView.innerWidth / this.diceView.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.diceView.innerWidth, this.diceView.innerHeight);
    this.diceView.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;

    const render = function () {
      requestAnimationFrame(render);

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(this.scene, this.camera);
    };

    render();
  }
}
