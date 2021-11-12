import Phaser from 'phaser'
import ObstaclesController from './ObstaclesController'
import PlayerController from './PlayerController'
import SnowmanController from './SnowmanController'

export default class nivel2 extends Phaser.Scene
{
	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys

	private penquin?: Phaser.Physics.Matter.Sprite
	private playerController?: PlayerController
	private obstacles!: ObstaclesController
	private snowmen: SnowmanController[] = []

	constructor()
	{
		super('nivel2')
	}

	init()
	{
		this.cursors = this.input.keyboard.createCursorKeys()
		this.obstacles = new ObstaclesController()
		this.snowmen = []

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.destroy()
		})
	}

	preload()
	{
		this.load.atlas('penquin', 'assets/penquin.png', 'assets/penquin.json')

		this.load.image('tiles', 'assets/sheet.png')
		this.load.image('tiles', 'assets/grupo.png')
		this.load.tilemapTiledJSON('nivel2', 'assets/nivel2.json')

		this.load.image('star', 'assets/star.png')
		this.load.image('health', 'assets/health.png')
		this.load.image('botiquin', 'assets/botiquin.png')
		this.load.atlas('snowman', 'assets/snowman.png', 'assets/snowman.json')
		this.load.image('creditos', 'assets/creditos.png')
		this.load.image('opciones', 'assets/opciones.png')
		this.load.image('Jugar', 'assets/Jugar.png') 
		this.load.image('jugador', 'assets/jugador.png')
	}

	create()
	{
		this.scene.launch('UI3')
        //var fondo = this.add.image(680, 500, 'jugador')

		
		const map = this.make.tilemap({ key: 'nivel2' })
		const tileset = map.addTilesetImage('iceworld', 'tiles')
        
		const ground = map.createLayer('ground', tileset)
		ground.setCollisionByProperty({ collides: true })

		map.createLayer('obstacles', tileset)

		const objectsLayer = map.getObjectLayer('objects')

		 objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'penquin-spawn':
				{
					this.penquin = this.matter.add.sprite(x + (width * 0.5), y, 'penquin')
						.setFixedRotation()
						

					 this.playerController = new PlayerController(
						this,
						this.penquin,
						this.cursors,
						this.obstacles
					)
					//camara
					//camara
					this.cameras.main.setBounds(10, 10, map.widthInPixels, map.heightInPixels);
                    this.cameras.main.startFollow(this.penquin);
					this.cameras.main.setZoom(1.3);
					//this.cameras.main.y=150
					//this.cameras.main.followOffset.y=150
					break
				}

				
				case 'snowman':
				{
					const snowman = this.matter.add.sprite(x, y, 'snowman')
						.setFixedRotation()

					this.snowmen.push(new SnowmanController(this, snowman))
					this.obstacles.add('snowman', snowman.body as MatterJS.BodyType)
					break
				}

				case 'star':
				{
					const star = this.matter.add.sprite(x, y, 'star', undefined, {
						isStatic: true,
						isSensor: true
					})

					star.setData('type', 'star')
					break
				}
				case 'botiquin':
					{
						const botiquin = this.matter.add.sprite(x, y, 'botiquin', undefined, {
							isStatic: true,
							isSensor: true
						})
	
						botiquin.setData('type', 'botiquin')
						break
					}
				case 'health':
				{
					const health = this.matter.add.sprite(x, y, 'health', undefined, {
						isStatic: true,
						isSensor: true
					})

					health.setData('type', 'health')
					health.setData('healthPoints', 10)
					break
				}

				case 'spikes':
				{
					const spike = this.matter.add.rectangle(x + (width * 0.5), y + (height * 0.5), width, height, {
						isStatic: true
					})
					this.obstacles.add('spikes', spike)
					break
				}
			}
		 })

		this.matter.world.convertTilemapLayer(ground)
	}

	destroy()
	{
		this.scene.stop('ui3')
		this.snowmen.forEach(snowman => snowman.destroy())
	}

	update(t: number, dt: number)
	{
		this.playerController?.update(dt)

		this.snowmen.forEach(snowman => snowman.update(dt))
	}
}
