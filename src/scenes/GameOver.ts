import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import scene1 from './scene1'
import sceneprincipal from './sceneprincipal'

export default class GameOver extends Phaser.Scene
{
	constructor()
	{
		super('game-over')
	}
     preload(){
	this.load.audio('derrota', 'assets/Sonidos/derrota.wav')
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
		var derrota = this.sound.add('derrota');
		derrota.play(); 
		this.scene.stop('nivel1')
		this.scene.stop('nivel2')
		this.scene.stop('nivel3')
		this.scene.stop('UI3')
		this.scene.stop('ui2')
		this.scene.stop('UI')
		this.scene.stop('UI4')
		//this.scene.stop('nivel1')
		const { width, height } = this.scale
       var click = this.sound.add('click');
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		var fondo = this.add.image(680, 300, 'Jugar').setScale(0.4)
		//var fondo = this.add.image(700, 300, 'opciones').setScale(0.4)
		//var fondo = this.add.image(690, 400, 'creditos').setScale(0.4)
		var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		var fondo = this.add.image(168, 500, 'basuraa').setScale(0.7)
		var fondo = this.add.image(1000, 300, 'personaje1')
	    //this.add.text(660, 290, ('DERROTA'), { fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
		this.add.text(580, 290, getPhrase ('MENU PRINCIPAL'), { fontSize: '25px', fontFamily: 'Arial black', color: '#FFFFFF', })
		.setInteractive()  
		.on('pointerdown', () => this.scene.start('sceneprincipal'));
		
	}
}
