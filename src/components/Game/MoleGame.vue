<script setup>
import { ref, onMounted } from "vue";
import Phaser from "phaser";

const game = ref(null);

let startButton;
let score = ref(0);
let timeLeft = ref(60);

const startGame = () => {
  // Phaser 게임 로직 시작
  initGame();

  // HTML 버튼 숨기기
  startButton.style.display = "none";
};
const preload = function () {
  this.load.image(
    "mole",
    "https://fmcaxedcftqxqcdrdpfd.supabase.co/storage/v1/object/public/image/easter_egg/easter_egg_profile.png"
  );
};

const create = function () {
  this.moles = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const mole = this.physics.add.sprite(
        150 + i * 320,
        250 + j * 180,
        "mole"
      );
      mole.setInteractive();
      mole.setActive(false).setVisible(false);
      mole.on("pointerdown", () => hitMole(mole));
      this.moles.push(mole);
    }
  }
  this.scoreText = this.add.text(16, 16, `Score: ${score.value}`, {
    fontFamily: "Arial",
    fontSize: 24,
    color: "#fff",
  });
  this.timeText = this.add.text(16, 40, `Time: ${timeLeft.value}`, {
    fontFamily: "Arial",
    fontSize: 24,
    color: "#fff",
  });

  setInterval(() => {
    const mole = this.moles[Math.floor(Math.random() * this.moles.length)];
    mole.y -= 80;
    mole.setActive(true).setVisible(true);
    setTimeout(() => {
      mole.y += 80;
      mole.setActive(false).setVisible(false);
    }, 800);
  }, 800);

  const hitMole = function (mole) {
    if (mole.active) {
      mole.y += 80;
      mole.setActive(false).setVisible(false);
      score.value += 1;
      console.log(score.value);
      this.scoreText.setText(`Score: ${score.value}`);
    }
  }.bind(this);
};

const update = function () {
  timeLeft.value -= 1 / 60;
  this.timeText.setText(`Time: ${Math.round(timeLeft.value)}`);

  //게임 종료
  if (this.timeLeft <= 0) {
    this.timeText.setText("Game Over");
    this.physics.pause();
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
