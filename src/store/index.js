import { reactive } from "vue";
import { defineStore } from "pinia";

export const pageConfig = defineStore("pageConfig", () => {
  let state = reactive({
    showPage: "",
    selectedKey: ["0"],
  });
  function changePage(newPage) {
    if (newPage === "캐릭터") {
      state.selectedKey = ["1"];
    } else if (newPage === "세계관") {
      state.selectedKey = ["2"];
    } else if (newPage === "갤러리") {
      state.selectedKey = ["3"];
    } else if (newPage === "작가진") {
      state.selectedKey = ["4"];
    } else if (newPage === "Goods" || newPage === "Goods (상세 페이지)") {
      state.selectedKey = ["5"];
    } else if (newPage === "미니게임") {
      state.selectedKey = ["6"];
    } else if (newPage === "Contect") {
      state.selectedKey = ["7"];
    } else if (newPage === "" || newPage === "관리자") {
      state.selectedKey = ["0"];
    }
    state.showPage = newPage;
    console.log(state.showPage);
  }
  return { state, changePage };
});
