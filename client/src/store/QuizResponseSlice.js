import { createSlice } from "@reduxjs/toolkit";

const default_profile_pic_url = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
const initialState = {
    WebScore: 0,
    androidScore: 0,
    androidInterestPercentage: 0,
    webInterestPercentage: 0
}


export const QuizResponseSlice = createSlice({
    name: "QuizResponseSlice",
    initialState,
    reducers: {
      setQuizResponseSlice: (state, action) => {
        state.answer = action.payload.answer;
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setQuizResponseSlice } = QuizResponseSlice.actions;

  export default QuizResponseSlice.reducer;