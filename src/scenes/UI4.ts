//Escena de nivel 3
import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class UI4 extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics
	private botiquinCollected = 0
    // temporizador // 
    private temporizador: any
    private tiempo?: number 
    private txtTiempo?: Phaser.GameObjects.Text
	private lastHealth = 100

	constructor()
	{
		super({
			key: 'UI4'
		})
	}

	init()
	{
		this.starsCollected = 0
		this.botiquinCollected = 0
	}
	preload() {

		this.load.image('cerrar', 'assets/cerrar.png')
		this.load.image('barra', 'assets/barra_fondo.png')
		this.load.image('lata', 'assets/star.png')
		this.load.image('reloj', 'assets/reloj.png')
		this.load.image('manzana', 'assets/recolectable2.png')
		this.load.audio('basura', 'assets/Sonidos/basura.wav')
		this.load.audio('click', 'assets/Sonidos/click.mp3')
	}
	create()
	{
		this.tiempo = 120

         //temp
	   this.temporizador= this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });
       this.txtTiempo = this.add.text(25, 70, '', { fontSize: '32px'});
	   const reloj = this.add.image(115,85,'reloj').setScale(0.04)
	   const barra = this.add.image(60, 37, 'barra')
	   const lata = this.add.image(155, 40, 'lata')
	   const manzana = this.add.image(65, 39, 'manzana')




		this.graphics = this.add.graphics()
		this.setHealthBar(100)

		this.starsLabel = this.add.text(85, 34, '0', {
			fontSize: '32px'
		}) 
		this.starsLabel = this.add.text(170, 34, '0', {
			fontSize: '32px'
		})

		events.on('star-collected', this.handleStarCollected, this)
		events.on('health-changed', this.handleHealthChanged, this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('star-collected', this.handleStarCollected, this)
		})
		const botonnn = this.add.image(1230, 50, 'cerrar').setInteractive()
		.on('pointerdown', () => this.pausa() );
		events.on('botiquin-collected', this.handlebotiquinCollected, this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('botiquin-collected', this.handlebotiquinCollected, this)
		})
	}
	update(){
		console.log(this.tiempo)
  
  
		this.txtTiempo?.setText('' + this.tiempo )
	  }
	private setHealthBar(value: number)
	{
		const width = 200
		const percent = Phaser.Math.Clamp(value, 0, 100) / 100

		this.graphics.clear()
		this.graphics.fillStyle(0x808080)
		this.graphics.fillRoundedRect(580, 10, width, 20, 5)
		if (percent > 0)
		{
			this.graphics.fillStyle(0x42ab49)
			this.graphics.fillRoundedRect(580, 10, width * percent, 20, 5)
		}
	}

	private handleHealthChanged(value: number)
	{
		this.tweens.addCounter({
			from: this.lastHealth,
			to: value,
			duration: 200,
			ease: Phaser.Math.Easing.Sine.InOut,
			onUpdate: tween => {
				const value = tween.getValue()
				this.setHealthBar(value)
			}
		})

		this.lastHealth = value
	}
	private handlebotiquinCollected()
	{
		
		this.scene.stop('nivel3');
		this.scene.stop('UI4')
		this.scene.start('scene16');
		
		++this.botiquinCollected
		
		
	}

	private handleStarCollected()
	{
		var basura = this.sound.add('basura');
		basura.play();
		++this.starsCollected
		this.starsLabel.text = ` ${this.starsCollected}`
		
	}
	private pausa()
	{
		var click = this.sound.add('click');
		click.play(),
		this.scene.pause('nivel3')
		this.scene.pause('UI4')
		this.scene.start('scene7');
	}
	private cadaSegundo(){
		this.tiempo! -= 1   
		if (this.tiempo! <= 0) {
			
			this.gameOver()
		} 
	}
	gameOver(){
		this.scene.stop('nivel1')
		this.scene.start('game-over')
	}
}
