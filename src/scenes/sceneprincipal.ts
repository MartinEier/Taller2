import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class sceneprincipal extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics
     private musica1: any
	private lastHealth = 100

	constructor()
	{
		super({
			key: 'sceneprincipal'
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
		
	}
	create()
	{
		
		var click = this.sound.add('click');
		
        
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		var fondo = this.add.image(680, 300, 'Jugar').setScale(0.4)
		//var fondo = this.add.image(700, 300, 'opciones').setScale(0.4)
		var fondo = this.add.image(690, 400, 'creditos').setScale(0.4)
		var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		var fondo = this.add.image(168, 500, 'basuraa').setScale(0.7)
		var fondo = this.add.image(1000, 300, 'personaje1')
		
		 
      
        this.graphics = this.add.graphics()
		const { width, height } = this.scale
		
        this.add.text(655, 290, getPhrase ('JUGAR'), { fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.scene.start('scene3') && click.play(),); 
	  this.add.text(650, 381,getPhrase ('CREDITOS'), { fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.scene.start('scene17') && click.play(),); 
	  
     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}

     

	
}
