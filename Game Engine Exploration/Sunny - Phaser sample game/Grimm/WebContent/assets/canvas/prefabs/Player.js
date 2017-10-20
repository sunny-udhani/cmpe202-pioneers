// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Player.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function Player(aGame, aX, aY, aKey, aFrame) {
	
	var pKey = aKey === undefined? 'player' : aKey;
	var pFrame = aFrame === undefined? 5 : aFrame;
	
	Phaser.Sprite.call(this, aGame, aX, aY, pKey, pFrame);
	this.anchor.setTo(0.5, 0.0);
	this.animations.add('walk', [0, 1, 2, 1], 4, true);
	this.animations.add('jump', [4], 60, false);
	this.animations.add('stay', [5], 60, false);
	this.animations.add('die', [7], 2, false);
	this.game.physics.arcade.enable(this);
	
}

/** @type Phaser.Sprite */
var Player_proto = Object.create(Phaser.Sprite.prototype);
Player.prototype = Player_proto;
Player.prototype.constructor = Player;

/* --- end generated code --- */
// -- user code here --