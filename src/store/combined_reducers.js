import teacher_slice from "./redux-slices/teacher_slice";
import user_slice from "./redux-slices/user_slice";

const rootReducer = {
  user: user_slice,
  teacher: teacher_slice,
};

export default rootReducer;
