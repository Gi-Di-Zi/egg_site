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
    "background",
    require("@/components/gameAsset/mole_background.png")
  );
  this.load.image(
    "mole",
    require("@/components/gameAsset/algamesource_ddg_along.png")
  );
  this.load.image(
    "hole",
    require("@/components/gameAsset/algamesource_ddg_b.png")
  );
  this.load.image(
    "hide",
    require("@/components/gameAsset/algamesource_ddg_a.png")
  );
};

const create = function () {
  this.add.image(640, 360, "background");
  this.moles = [];
  this.hides = [];
  const positions = [
    { x: 470, y: 350 },
    { x: 800, y: 350 },
    { x: 320, y: 530 },
    { x: 640, y: 530 },
    { x: 960, y: 530 },
    { x: 470, y: 710 },
    { x: 800, y: 710 },
  ];
  for (let i = 0; i < positions.length; i++) {
    this.physics.add.sprite(positions[i].x, positions[i].y - 50, "hole");

    const mole = this.physics.add.sprite(
      positions[i].x,
      positions[i].y,
      "mole"
    );
    mole.setInteractive();
    mole.on("pointerdown", () => hitMole(mole));
    this.moles.push(mole);

    const hide = this.physics.add.sprite(
      positions[i].x,
      positions[i].y - 50,
      "hide"
    );
    this.hides.push(hide);
  }

  this.scoreText = this.add.text(362, 43, score.value, {
    fontFamily: "Arial",
    fontSize: 24,
    color: "#000",
  });
  this.timeText = this.add.text(370, 105, `Time: ${timeLeft.value}`, {
    fontFamily: "Arial",
    fontSize: 24,
    color: "#000",
  });
  setInterval(() => {
    let index = Math.floor(Math.random() * this.moles.length);

    // 두더지 스프라이트의 y 좌표를 위로 움직여 스프라이트가 보이게 합니다.
    this.moles[index].y -= 70;
    this.moles[index].setActive(true);

    setTimeout(() => {
      // 두더지 스프라이트의 y 좌표를 아래로 움직여 스프라이트가 숨게 합니다.
      this.moles[index].y += 70;
      this.moles[index].setActive(false);
    }, 600);
  }, 600);

  const hitMole = function (mole) {
    if (mole.active) {
      mole.setActive(false);
      score.value += 1;
      console.log(score.value);
      this.scoreText.setText(score.value);
      setTimeout(() => {
        // setTimeout 함수 진행 후, y좌표를 원상복귀시키며 두더지를 비활성화
        mole.y -= 70;
        mole.setActive(false);
      }, 600);

      // 두더지를 위로 올리는 동작은 setTimeout 외부에서 별도로 처리
      mole.y += 70;
    }
  }.bind(this);
};

const update = function () {
  timeLeft.value -= 1 / 60;
  this.timeText.setText(Math.round(timeLeft.value));

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
