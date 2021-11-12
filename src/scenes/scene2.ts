import Phaser from 'phaser'


export default class scene2 extends Phaser.Scene
{
	
	constructor()
	{
		super('scene2')
	}
    preload(){
		this.load.image('fondo', 'assets/fondo.png')
	}
	create()
	{
        var fondo = this.add.image(650, 300, 'fondo').setScale(0.5)
		const { width, height } = this.scale
		
        const button = this.add.rectangle(width * 0.5, height * 0.55, 150, 75, 0xff0000)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            this.scene.start('nivel1')
        })

    this.add.text(button.x, button.y, 'Jugar', {
        color: '#000000'
    })
    .setOrigin(0.5)
		

		this.add.text(510, 230, 'RECOLECCION DE BASURAA', { fontFamily: 'Arial black', color: '#FF0000' })
	}


	
}
