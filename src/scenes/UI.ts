//Escena de tutorial
import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class UI extends Phaser.Scene
{
	private starsLabel!: Phaser.GameObjects.Text
	private starsCollected = 0
	private graphics!: Phaser.GameObjects.Graphics

	private lastHealth = 100

	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
		this.starsCollected = 0
	}
	preload() {

	 this.load.image('botiquin', 'assets/botiquin.png')
	 this.load.image('cerrar', 'assets/cerrar.png')
	}
	create()
	{
		this.graphics = this.add.graphics()
		this.setHealthBar(100)

		//this.starsLabel = this.add.text(10, 35, 'Basura: 0', {
		//	fontSize: '32px'
		//})

		events.on('star-collected', this.handleStarCollected, this)
		events.on('health-changed', this.handleHealthChanged, this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			events.off('star-collected', this.handleStarCollected, this)
		})
		const boton = this.add.image(100, 500, 'botiquin').setInteractive()
		//.on('pointerdown', () => this.player() );
		const botonn = this.add.image(1210, 30, 'cerrar').setInteractive()
		.on('pointerdown', () => this.pausa() );
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

	private handleStarCollected()
	{
		this.scene.stop('game')
		this.scene.start('nivel1');
		++this.starsCollected
		//this.starsLabel.text = `Stars: ${this.starsCollected}`
		
	}
	private pausa(){
		this.scene.pause('game')
		this.scene.pause('ui')
		this.scene.start('scene4');
	}
}





