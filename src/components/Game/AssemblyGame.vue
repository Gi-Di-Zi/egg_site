<script setup>
import { ref, onMounted } from "vue";
import Phaser from "phaser";

const game = ref(null);

let startButton;

const ingredientsNames = [
  "Butter",
  "Sugar",
  "Eggs",
  "Flour",
  "Baking Powder",
  "Milk",
  "Vanilla Extract",
  "Salt",
  "Cocoa Powder",
  "Chocolate Chips",
];

const startGame = () => {
  // Phaser 게임 로직 시작
  initGame();

  // HTML 버튼 숨기기
  startButton.style.display = "none";
};
const preload = function () {
  this.load.image("plate", require("@/components/gameAsset/sky.png"));
  for (let i = 1; i <= 10; i++) {
    this.load.image(
      ingredientsNames[i - 1],
      require("@/components/gameAsset/star.png")
    ); // 실제 이미지 경로로 변경해야 합니다.
  }
};

const create = function () {
  // 케이크 이미지를 중앙에 만듭니다.
  const plate = this.add.image(640, 360, "plate");

  const buttonsStyle = {
    fontSize: "20px",
    backgroundColor: "#333333",
    color: "#ffffff",
    align: "center",
    padding: {
      top: 5,
      bottom: 5,
    },
  };

  let xPosition = 10;
  let yPosition = 10;

  const ingredientsOnPlate = new Map();

  ingredientsNames.forEach((ingredient, index) => {
    const ingredientButton = this.add.text(
      xPosition,
      yPosition,
      ingredient,
      buttonsStyle
    );

    xPosition += ingredient.length * 18;

    if (xPosition + ingredient.length * 18 > this.sys.game.config.width) {
      xPosition = 10; // x 위치를 초기화합니다.
      yPosition += 40; // y 위치를 증가시켜 다음 행으로 넘어갑니다.
    }

    // 마우스를 올리면 버튼이 확대됩니다.
    ingredientButton.setInteractive();
    ingredientButton.on("pointerover", () => {
      ingredientButton.setScale(1.5);
    });
    ingredientButton.on("pointerout", () => {
      ingredientButton.setScale(1);
    });

    // 각 버튼 클릭 이벤트 핸들러를 설정합니다.
    ingredientButton.on("pointerup", () => {
      if (ingredientsOnPlate.has(index)) {
        // 재료가 이미 플레이트에 있다면 제거
        const ingredientToRemove = ingredientsOnPlate.get(index);
        ingredientToRemove.destroy(); // destroys the Sprite, removing it from the display list
        ingredientsOnPlate.delete(index);
      } else {
        // 그렇지 않다면 재료 추가
        const randomX = Phaser.Math.Between(-10, 10);
        const randomY = Phaser.Math.Between(-10, 10);
        const ingredientSprite = this.add.image(
          plate.x + randomX,
          plate.y + randomY,
          ingredientsNames[index]
        );
        ingredientSprite.setScale(0.5);

        // 맵에 재료 스프라이트 추가
        ingredientsOnPlate.set(index, ingredientSprite);
      }
    });
  });

  const submitButton = this.add.text(640, 680, "Submit", buttonsStyle);
  submitButton.setInteractive();

  submitButton.on("pointerup", () => {
    // 선택된 재료들을 가져옵니다.
    const selectedIngredients = Array.from(ingredientsOnPlate.keys());

    // 1, 3, 4번이 선택되었는지를 확인합니다.
    const isSuccessful =
      selectedIngredients.includes(0) &&
      selectedIngredients.includes(2) &&
      selectedIngredients.includes(3) &&
      selectedIngredients.length === 3;

    if (isSuccessful) {
      // 성공 메시지를 출력합니다.
      alert("Successful!");
    } else {
      // 실패 메시지를 출력합니다.
      alert("Failed...");
    }
  });
};

const update = function () {};

const initGame = () => {
  const config = {
    type: Phaser.AUTO,
    parent: "gameBox",
    width: 1280,
    height: 720,
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
