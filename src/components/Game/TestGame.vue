<script setup>
import { ref, onMounted } from "vue";
import Phaser from "phaser";

const game = ref(null);

let platform;
let player;
let cursor;
let stars;
let score = 0;
let scoreText;
let bombs;
let gameOver = false;
const preload = function () {
  this.load.image("sky", require("@/components/gameAsset/sky.png"));
  this.load.image("ground", require("@/components/gameAsset/platform.png"));
  this.load.image("star", require("@/components/gameAsset/star.png"));
  this.load.image("bomb", require("@/components/gameAsset/bomb.png"));
  this.load.spritesheet("dude", require("@/components/gameAsset/dude.png"), {
    frameWidth: 32,
    frameHeight: 48,
  });
};

const create = function () {
  this.add.image(400, 300, "sky");

  platform = this.physics.add.staticGroup();
  player = this.physics.add.sprite(100, 450, "dude");
  scoreText = this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#000",
  });
  stars = this.physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 },
  });
  bombs = this.physics.add.group();

  platform.create(400, 568, "ground").setScale(2).refreshBody();
  platform.create(600, 400, "ground");
  platform.create(50, 250, "ground");
  platform.create(750, 220, "ground");

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300);

  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });
  this.physics.add.collider(player, platform);
  this.physics.add.collider(stars, platform);
  this.physics.add.collider(bombs, platform);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
  this.physics.add.overlap(player, stars, collectStar, null, this);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  cursor = this.input.keyboard.createCursorKeys();
};

function collectStar(player, star) {
  star.disableBody(true, true);

  score += 10;
  scoreText.setText("Score: " + score);

  if (stars.countActive(true) === 0) {
    stars.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }
}

// eslint-disable-next-line no-unused-vars
function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play("turn");

  gameOver = true;
}

const update = function () {
  if (gameOver) {
    return;
  }
  if (cursor.left.isDown) {
    player.setVelocityX(-160);

    player.anims.play("left", true);
  } else if (cursor.right.isDown) {
    player.setVelocityX(160);

    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);

    player.anims.play("turn");
  }

  if (cursor.up.isDown && player.body.touching.down) {
    player.setVelocityY(-500);
  }
};

onMounted(() => {
  const config = {
    type: Phaser.AUTO,
    parent: "gameContainer",
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  game.value = new Phaser.Game(config);
});
</script>

<template>
  <div id="gameContainer"></div>
</template>

<style scoped></style>
