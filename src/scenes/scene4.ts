import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class scene4 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100

	constructor()
	{
		super({
			key: 'scene4'
		})
	}

	init()
	{
		this.starsCollected = 0
		
	}
    preload(){
		this.load.image('fondo', 'assets/fondo.png')
		this.load.image('creditos', 'assets/creditos.png')
		this.load.image('opciones', 'assets/opciones.png')
		this.load.image('Jugar', 'assets/Jugar.png')
		this.load.image('titulo', 'assets/titulo.png')
		this.load.image('basuraa', 'assets/basuramenu.png')
		this.load.image('personaje1', 'assets/pjmenu.png')
		this.load.audio('click', 'assets/Sonidos/click.mp3')
		this.load.image('Pausa', 'assets/Pausa.png')
	}
	create()
	{
		var click = this.sound.add('click');
		var fondo = this.add.image(680, 300, 'Pausa')
		//var fondo = this.add.image(680, 200, 'Jugar').setScale(0.4)
		//var fondo = this.add.image(700, 300, 'opciones').setScale(0.4)
		//var fondo = this.add.image(700, 400, 'creditos').setScale(0.4)
		//var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		//var fondo = this.add.image(170, 500, 'basuraa').setScale(0.7)
		//var fondo = this.add.image(1000, 300, 'personaje1')


        this.graphics = this.add.graphics()
		const { width, height } = this.scale
		
        this.add.text(660, 190, ('RESUME'), { fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.pausa()); 
	  this.add.text(660, 290, 'Salir', { fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.salir()); 
	  
	  
     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}
	private pausa(){
		var click = this.sound.add('click');
		click.play(),
		this.scene.resume('game')
		this.scene.start('ui')
		this.scene.stop('scene4');
	}
	private salir(){
		var click = this.sound.add('click');
		click.play(),
		this.scene.stop('game')
		this.scene.start('sceneprincipal')
		this.scene.stop('scene4');
	}
}
