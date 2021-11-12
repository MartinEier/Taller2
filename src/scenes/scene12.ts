//seleccion niveles completando el segundo nivel
import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class scene11 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100

	constructor()
	{
		super({
			key: 'scene12'
		})
	}

	init()
	{
		this.starsCollected = 0
		
	}
    preload(){
		this.load.image('fondo', 'assets/fondo.png')
		this.load.image('seleccion', 'assets/seleccion.png')
		this.load.image('nivel1', 'assets/nivel1.png')
		this.load.image('volver', 'assets/volver.png')
		this.load.audio('click', 'assets/Sonidos/click.mp3')
		this.load.image('bloqueado', 'assets/Nivel_Bloqueado.png')
	}
	create()
	{
		var click = this.sound.add('click');
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		var fondo = this.add.image(680, 100, 'Jugar').setScale(0.6)
		this.add.text(610, 95, getPhrase ('NIVELES'), { fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
		var fondo = this.add.image(380, 300, 'nivel1').setInteractive()
		.setScale(0.6).on('pointerdown', () => this.scene.start('nivel1') && click.play(),);
		var fondo = this.add.image(1136, 50, 'volver').setInteractive().setScale(0.6)
		//.on('pointerdown', () => this.scene.start('scene1') && click.play(),);
		var flecha = this.add.image(1185, 30, 'flecha').setInteractive().setScale(0.6)
		.on('pointerdown', () => this.scene.start('scene13') && click.play(),);
		var bloqueado = this.add.image(680, 290, 'nivel1').setScale(0.6).setInteractive()
		.on('pointerdown', () => this.scene.start('nivel2') && click.play(),);
        var bloqueado = this.add.image(968, 290, 'nivel1').setScale(0.6).setInteractive()
		.on('pointerdown', () => this.scene.start('nivel3') && click.play(),);
		this.add.text(365, 295, '1', { fontSize: '50px', fontFamily: 'Arial black', color: '#FFFFFF', })
		this.add.text(670, 290, '2', { fontSize: '50px', fontFamily: 'Arial black', color: '#FFFFFF', })
		this.add.text(960, 290, '3', { fontSize: '50px', fontFamily: 'Arial black', color: '#FFFFFF', })
        this.graphics = this.add.graphics()
		const { width, height } = this.scale
		
        //this.add.text(660, 190, 'Jugar', { fontFamily: 'Arial black', color: '#FFFFFF', })
      //.setInteractive()
      //.on('pointerdown', () => this.scene.start('game') );

     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}


	
}
