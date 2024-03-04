import { reactive } from "vue";
import { defineStore } from "pinia";

export const pageConfig = defineStore("pageConfig", () => {
  let state = reactive({
    showPage: "",
  });
  function changePage(newPage) {
    state.showPage = newPage;
    console.log(state.showPage);
  }
  return { state, changePage };
});
