//escena de ganaste tercer nivel
import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class scene17 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100

	constructor()
	{
		super({
			key: 'scene17'
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
		this.load.image('logo', 'assets/logo.png')
	}
	create()
	{
		var click = this.sound.add('click');
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		var fondo = this.add.image(680, 200, 'Jugar').setScale(0.4)
		//var fondo = this.add.image(700, 300, 'opciones').setScale(0.4)
		var fondo = this.add.image(690, 500, 'creditos').setScale(0.4)
		var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		var fondo = this.add.image(168, 500, 'basuraa').setScale(0.7)
		var fondo = this.add.image(699, 350, 'logo').setScale(0.5)
		var fondo = this.add.image(1000, 300, 'personaje1')
		
		 
      
        this.graphics = this.add.graphics()
		const { width, height } = this.scale
		
        this.add.text(640, 190, getPhrase ('CREDITOS'), { fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      
	  this.add.text(650, 481,getPhrase ('VOLVER'), { fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.scene.start('sceneprincipal') && click.play(),); 
	  
     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}


	
}
