import "./style.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodo } from "../../features/todo/todoSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const Home = () => {
  const { reset, handleSubmit, register } = useForm();
  const data = useSelector(selectTodo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const add = (todo) => {
    dispatch(
      addTodo({ ...todo, completed: false, edit: false, id: Date.now() })
    );
    reset();
  };
  return (
    <div className="home main">
      <h1>To do list</h1>
      <div className="add">
        <h2>New Task</h2>
        <form onSubmit={handleSubmit(add)}>
          <Form.Control
            placeholder="Type here"
            {...register("text", { required: "true" })}
          />
          <Form.Control
            type="date"
            {...register("date", { required: "true" })}
          />
          <Button type="sumbit" variant="primary">
            Add
          </Button>
        </form>
      </div>
      <div className="dates">
        <h2>Dates</h2>
        <div className="show">
          {
          data.arr.map((e) => {
            return (
              <div key={e.id}>
                <h3>{e.date + `(${e.arr.length})`}</h3>
                <svg
                  onClick={() => {
                    navigate(`/details/${e.date}`);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
