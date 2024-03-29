<script setup>
import { ref, onMounted } from "vue";
import Phaser from "phaser";

const game = ref(null);

let startButton;
let platform;
let player;
let cursor;
let bombs;
let gameOver = false;
let restartButton;

const startGame = () => {
  // Phaser 게임 로직 시작
  initGame();

  // HTML 버튼 숨기기
  startButton.style.display = "none";
};
const preload = function () {
  this.load.image(
    "sky",
    require("@/components/gameAsset/background_cat-world_2.png")
  );
  this.load.image(
    "ground",
    require("@/components/gameAsset/background_cat-world_ground.png")
  );
  this.load.image("restart", require("@/images/youtubePlay.png"));
  this.load.image("bomb", require("@/components/gameAsset/bomb.png"));
  this.load.spritesheet("dude", require("@/components/gameAsset/dude.png"), {
    frameWidth: 32,
    frameHeight: 48,
  });
};

const create = function () {
  const bg = this.add.image(640, 360, "sky");
  const scaleX = game.value.config.width / bg.width;
  const scaleY = game.value.config.height / bg.height;
  const scale = Math.max(scaleX, scaleY);
  bg.setScale(scale).setScrollFactor(0);
  platform = this.physics.add.staticGroup();
  player = this.physics.add.sprite(100, 450, "dude");

  bombs = this.physics.add.group();

  this.time.addEvent({
    delay: 2000,
    callback: generateBombs,
    callbackScope: this,
    loop: true,
  });

  restartButton = this.add.sprite(640, 360, "restart").setInteractive();
  restartButton.setVisible(false);

  platform.create(640, 660, "ground").setScale(0.6666).refreshBody();

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300);

  bombs.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.6));
  });
  this.physics.add.collider(player, platform);
  this.physics.add.collider(bombs, platform);
  this.physics.add.collider(player, bombs, hitBomb, null, this);

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

const generateBombs = () => {
  const bomb = bombs.create(Phaser.Math.Between(0, 1280), 16, "bomb");
  bomb.setBounce(1);
  bomb.setCollideWorldBounds(true);
  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  setTimeout(() => {
    bomb.destroy();
  }, 10000);
};
// eslint-disable-next-line no-unused-vars
function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play("turn");

  gameOver = true;

  restartButton.setVisible(true);
  restartButton.removeAllListeners();
  restartButton.on("pointerup", () => {
    // 상태 초기화
    gameOver = false;
    this.scene.restart();
  });
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

const initGame = () => {
  const config = {
    type: Phaser.AUTO,
    parent: "gameBox",
    width: 1280,
    height: 720,
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
};

onMounted(() => {
  startButton = document.getElementById("startButton");
});
</script>

<template>
  <div id="gameContainer">
    <a-button id="startButton" @click="startGame">Start!</a-button>
    <div id="gameBox"></div>
  </div>
</template>

<style scoped>
#gameContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}
#gameBox {
  width: 1280px;
  height: 720px;
  background-color: #ececec;
}
#startButton {
  position: absolute;
}
</style>
