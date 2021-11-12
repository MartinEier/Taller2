import 'regenerator-runtime/runtime'
import Phaser from 'phaser'
import sceneprincipal from './scenes/sceneprincipal'
import scene1 from './scenes/scene1'
import scene2 from './scenes/scene2'
import scene3 from './scenes/scene3'
import scene4 from './scenes/scene4'
import scene5 from './scenes/scene5'
import scene6 from './scenes/scene6'
import scene7 from './scenes/scene7'
import scene10 from './scenes/scene10'
import scene11 from './scenes/scene11'
import scene12 from './scenes/scene12'
import scene13 from './scenes/scene13'
import scene14 from './scenes/scene14'
import scene15 from './scenes/scene15'
import scene16 from './scenes/scene16'
import scene17 from './scenes/scene17'
import scene18 from './scenes/scene18'
import scene19 from './scenes/scene19'
import scene20 from './scenes/scene20'
import nivel1 from './scenes/nivel1'
import nivel2 from './scenes/nivel2'
import nivel3 from './scenes/nivel3'
import Game from './scenes/Game'
import UI from './scenes/UI'
import UI2 from './scenes/UI2'
import UI3 from './scenes/UI3'
import UI4 from './scenes/UI4'
import GameOver from './scenes/GameOver'

localStorage.clear();

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
        
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
		width: window.innerWidth * window.devicePixelRatio,
		height: window.innerHeight * window.devicePixelRatio,
	
	physics: {
		default: 'matter',
		matter: {
			debug: false
		}
	},
	scene: [scene1, scene2, scene3, Game, UI, GameOver, nivel1, nivel2, UI2, UI3, scene4, scene5, scene6, nivel3, scene7, scene10, scene11, scene12, scene13,
	scene14, scene15, scene16, UI4, sceneprincipal, scene17, scene18, scene19, scene20, ]
}

export default new Phaser.Game(config)
 
