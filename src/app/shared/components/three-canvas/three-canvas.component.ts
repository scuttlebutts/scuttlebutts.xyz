import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-three-canvas',
  templateUrl: './three-canvas.component.html',
  styleUrls: ['./three-canvas.component.scss']
})
export class ThreeCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef!: ElementRef<HTMLCanvasElement>;
  fps = 0;
  private material!: THREE.MeshBasicMaterial;
  music!: HTMLAudioElement;
  

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.music = new Audio('/assets/audio.mp3');
    this.music.loop = true;
    this.canvasRef.nativeElement.addEventListener('click', () => {
      this.music.play();
    })
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, this.canvasRef.nativeElement.clientWidth / this.canvasRef.nativeElement.clientHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer({canvas: this.canvasRef.nativeElement, antialias: true});
    renderer.setSize( this.canvasRef.nativeElement.clientWidth, this.canvasRef.nativeElement.clientHeight );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const cube = new THREE.Mesh( geometry, this.material );
    scene.add( cube );
    
    camera.position.z = 5;

    const tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
    const initHeight = window.innerHeight;

    window.addEventListener('resize', (event) => {
      camera.aspect = window.innerWidth / window.innerHeight;
        
      // adjust the FOV
      camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / initHeight ) );
      
      camera.updateProjectionMatrix();
      camera.lookAt( scene.position );

      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.render( scene, camera );
      }, false );
    
    let lastTime = 0;
    let colors = ['red', 'green', 'blue'];
    let colorPtr = 2;
    let colorUpdateFreq = 1000;
    let colorUpdateNextTime = 0;
    
    const animate = () => {
      requestAnimationFrame( animate );
      const time = performance.now();
      const elapsed = time - lastTime;
      lastTime = time;
      if (time >= colorUpdateNextTime) {
        colorPtr = (colorPtr + 1) % 3;
        colorUpdateNextTime = time + colorUpdateFreq;
      }
      let color = colors.at(colorPtr);
      // Calculate the FPS
      this.fps = 1000 / elapsed;
      cube.rotation.x += 0.01;  
      cube.rotation.y += 0.01;
         
      cube.material.color = new THREE.Color( color );
      cube.material.needsUpdate = true;
    
      renderer.render( scene, camera );
    }

    animate();
  }
}