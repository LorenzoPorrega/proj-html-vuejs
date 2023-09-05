import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  pageLoading: false,
  navBarClass: "",
  navBarTextColor: "",
});

export function onPageLoad(){
  store.pageLoading = true;

  setTimeout(() => {
    store.pageLoading = false;
  }, 3500);
};