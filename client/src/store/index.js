import { configureStore } from "@reduxjs/toolkit";
import QuizResponseSlice from "./QuizResponseSlice";
import UserDetailsSlice from "./UserDetailsSlice";

export const store = configureStore({
    reducer: {
      UserDetailsSlice,
      QuizResponseSlice
    },
  });
  