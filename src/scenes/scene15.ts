//escena de ganaste segundo nivel
import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class scene15 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100

	constructor()
	{
		super({
			key: 'scene15'
		})
	}

	init()
	{
		this.starsCollected = 0
		
	}
    preload(){
		this.load.image('fondo', 'assets/fondo.png')
		this.load.image('creditos', 'assets/creditos.png')
		this.load.image('Menu principal', 'assets/opciones.png')
		this.load.image('Siguiente Nivel', 'assets/Jugar.png')
		this.load.image('titulo', 'assets/titulo.png')
		this.load.image('basuraa', 'assets/basuramenu.png')
		this.load.image('personaje1', 'assets/pjmenu.png')
		this.load.audio('click', 'assets/Sonidos/click.mp3')
		this.load.audio('victoria', 'assets/Sonidos/victoria2.wav')
		this.load.image('tacho2', 'assets/tacho2.png')
		this.load.image('tacho1', 'assets/tacho1.png')
	}
	create()
	{
		var victoria = this.sound.add('victoria');
		victoria.play();
		var click = this.sound.add('click');
		
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		var fondo = this.add.image(700, 300, 'Siguiente Nivel').setScale(0.4)
		var fondo = this.add.image(700, 400, 'Menu principal').setScale(0.4)
		//var fondo = this.add.image(700, 400, 'creditos').setScale(0.4)
		var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		var fondo = this.add.image(168, 500, 'basuraa').setScale(0.7)
		//var fondo = this.add.image(1000, 300, 'personaje1')
		
		 
      
        this.graphics = this.add.graphics()
		const { width, height } = this.scale
		this.add.text(645, 190, getPhrase ('VICTORIA'), {fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
		this.add.text(646, 190, getPhrase ('VICTORIA'), {fontSize: '25px', fontFamily: 'Arial black', color: '#008f39', })
        this.add.text(620, 290, getPhrase ('SIGUIENTE NIVEL'), {fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.scene.start('nivel3') && click.play(),);
	  this.add.text(630, 390, getPhrase ('MENU PRINCIPAL'), {fontSize: '20px', fontFamily: 'Arial black', color: '#FFFFFF', })
      .setInteractive()  
      .on('pointerdown', () => this.scene.start('scene13') && click.play(),);
	  var fondo = this.add.image(1000, 300, 'tacho1').setScale(0.6)
		var fondo = this.add.image(1100, 300, 'tacho2').setScale(0.6)
		this.add.text(920, 190, getPhrase ('HAY QUE RECICLAR'), {fontSize: '25px', fontFamily: 'Arial black', color: '#000000', })
		this.add.text(922, 190, getPhrase ('HAY QUE RECICLAR'), {fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}


	
}
