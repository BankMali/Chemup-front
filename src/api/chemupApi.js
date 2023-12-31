import axios from "axios";

const chemupApi = axios.create({
  baseURL: "http://localhost:8888",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  console.log("register obj", input);
  return chemupApi.post("/auth/register", input);
};

export const login = (input) => {
  return chemupApi.post("/auth/login", input);
};

export const getMe = (token) => {
  return chemupApi.get("/auth/getme", addToken(token));
};

//// AllCourse
export const getAllCourse = () => {
  return chemupApi.get("/course/");
};
export const ourse = (id) => {
  return chemupApi.delete(`/course/${id}`);
};

//// course

export const addCourse = (input, lesson, token) => {
  return chemupApi.post(
    "/course/addCourse",
    { input, lesson },
    addToken(token)
  );
};

//// EditCourse
export const getCourseById = (id) => {
  return chemupApi.get(`/course/${id}`);
};
export const getLessonById = (id) => {
  return chemupApi.get(`/lesson/${id}`);
};

export const updateCourse = (id, input) => {
  return chemupApi.put(`/course/${id}`, input);
};

export const updateLesson = (id, input) => {
  return chemupApi.put(`/lesson/${id}`, input);
};

//// order
export const getAllOrder = () => {
  return chemupApi.get(`/order/`);
};
export const getOrderById = (id) => {
  return chemupApi.get(`/order/${id}`);
};

export const addOrder = (input) => {
  return chemupApi.post("/order/addorder", input);
};

export const deleteOrder = (id) => {
  return chemupApi.delete(`/order/${id}`);
};

export const deleteCourse = (token) => {
  return chemupApi.get("/course/deleteCourse", addToken(token));
};
// export const getAllCourse = (token) => {
//     return chemupApi.get('/course/getAllCourse', addToken(token))
// }

// export const addLesson = (input) => {
//     return chemupApi.post('/lesson/addLesson',input)
// }

// router.post('/addLesson',lessonController.addLesson)
// router.delete('/deleteLesson/:id',lessonController.deleteLesson)
// router.get('/getAllLesson',lessonController.getAllLesson)

// router.post('/addCourse',courseController.addCourse)
// router.delete('/deleteCourse/:id',courseController.deleteCourse)
// router.get('/getAllCourse',courseController.getAllCourse)
