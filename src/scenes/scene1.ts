import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

import { EN_US, ES_AR, PT_BR } from '~/enums/languages'
import { FETCHED, FETCHING, READY, TODO } from '~/enums/status'
import { getTranslations, getPhrase } from '~/services/translations'
export default class scene1 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100
	private textSpanish
    private textGerman
    private textEnglish
    private textPortuguese

    private updatedTextInScene
    private updatedString = 'Siguiente'
    private wasChangedLanguage = TODO
	constructor()
	{
		super({
			key: 'scene1'
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
		this.load.image('brasil', 'assets/Brasil.png')
		this.load.image('eeuu', 'assets/eeuu.png')
		this.load.image('arg', 'assets/arg.png')
	}
	create()
	{
		var click = this.sound.add('click');
		var fondo = this.add.image(680, 300, 'fondo').setScale(0.6)
		//var fondo = this.add.image(680, 200, 'Jugar').setScale(0.4)
		//var fondo = this.add.image(700, 300, 'opciones').setScale(0.4)
		//var fondo = this.add.image(690, 400, 'creditos').setScale(0.4)
		var fondo = this.add.image(650, 130, 'titulo').setScale(0.6)
		var fondo = this.add.image(168, 500, 'basuraa').setScale(0.7)
		//var fondo = this.add.image(1000, 300, 'personaje1')
		const { width, height } = this.scale
	  const buttonSpanish = this.add.image(300, 300, 'arg').setScale(0.2)
	  .setInteractive()
	  .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			this.getTranslations(ES_AR)
	  })

	  


	 const buttonEnglish = this.add.image(1050, 300, 'eeuu').setScale(0.11)
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			this.getTranslations(EN_US)
		})

	  

	 const buttonPortuguese = this.add.image(680, 300, 'brasil').setScale(0.25)
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			this.getTranslations(PT_BR)
		})

	  

	 const buttonUpdate = this.add.rectangle(width * 0.53, height * 0.75, 150, 75, 0x44d27e)
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			this.scene.start('sceneprincipal')
		})

	 this.updatedTextInScene = this.add.text(buttonUpdate.x,buttonUpdate.y, getPhrase(this.updatedString), {
		color: '#000000'
	 })
	 .setOrigin(0.5)

      
        this.graphics = this.add.graphics()
		
		
         
	  
     //this.add.text(button.x, button.y, 'Iniciar tutorial', {
       // color: '#000000'
     //})
     //.setOrigin(0.5)
	  

		//this.add.text(510, 230, 'RECOLECCION DE BASURA', { fontFamily: 'Arial black', color: '#000000' })
	}
	update(){
        // console.log(this.updatedTextInScene)
        if(this.wasChangedLanguage === FETCHED){
            this.wasChangedLanguage = READY;
            this.updatedTextInScene.setText(getPhrase(this.updatedString));
        }
    }

    async getTranslations(language){
        this.wasChangedLanguage = FETCHING
        await getTranslations(language)
        this.wasChangedLanguage = FETCHED
        // si solo se tiene un menu para elegir las opciones de idiomas conviene cargar aca la misma
        //this.scene.start('sceneprincipal')
    }

	
}
