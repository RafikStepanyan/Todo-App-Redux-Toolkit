import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [
    {
      date: "2023-07-12",
      arr: [
        {
          id: 156453212789,
          text: "Learn Node js",
          date: "2023-07-12",
          completed: false,
          edit: false,
        },
        {
          id: 156412789,
          text: "Learn React js",
          date: "2023-07-12",
          completed: false,
          edit: false,
        },
        {
          id: 1562789,
          text: "Learn GraphQL",
          date: "2023-07-12",
          completed: false,
          edit: false,
        },
      ],
    },
    {
      date: "2023-07-14",
      arr: [
        {
          id: 98657123,
          text: "Read SQL documentation",
          date: "2023-07-14",
          completed: false,
          edit: false,
        },
      ],
    },
    {
      date: "2023-08-15",
      arr: [
        {
          id: 98657123,
          text: "Learn Next js",
          date: "2023-08-15",
          completed: false,
          edit: false,
        },
      ],
    },
  ],
  clone: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      const find = state.arr.findIndex((e) => e.date === action.payload.date);
      if (find >= 0) {
        state.arr[find].arr.push(action.payload);
      } else {
        state.arr.push({ date: action.payload.date, arr: [action.payload] });
      }
    },
    deleteTodo: (state, action) => {
      const find = state.arr.findIndex((e) => e.date == action.payload.date);
      state.arr[find].arr = state.arr[find].arr.filter(
        (e) => e.id != action.payload.id
      );
    },
    checkTodo: (state, action) => {
      const find = state.arr.findIndex((e) => e.date == action.payload.date);
      const findElement = state.arr[find].arr.findIndex(
        (e) => e.id == action.payload.id
      );
      state.arr[find].arr[findElement].completed =
        !state.arr[find].arr[findElement].completed;
    },
    editTodo: (state, action) => {
      const find = state.arr.findIndex((e) => e.date == action.payload.date);
      const findElement = state.arr[find].arr.findIndex(
        (e) => e.id == action.payload.id
      );
      state.arr[find].arr[findElement].edit =
        !state.arr[find].arr[findElement].edit;
    },
    saveTodo: (state, action) => {
      const find = state.arr.findIndex((e) => e.date == action.payload.date);
      const findElement = state.arr[find].arr.findIndex(
        (e) => e.id == action.payload.id
      );
      state.arr[find].arr[findElement].text = action.payload.text;
      state.arr[find].arr[findElement].edit =
        !state.arr[find].arr[findElement].edit;
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, editTodo, saveTodo } =
  todoSlice.actions;
export const selectTodo = (state) => state.todo;
export default todoSlice.reducer;
