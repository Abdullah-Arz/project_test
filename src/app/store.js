import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "../features/redux/reduxSlice";

export default configureStore({
  reducer: {
    redux: reduxReducer,
  },
});
