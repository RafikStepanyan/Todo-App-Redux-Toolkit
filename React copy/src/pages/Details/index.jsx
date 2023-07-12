import { useNavigate, useParams } from "react-router";
import "./style.scss";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo, editTodo, saveTodo } from "../../features/todo/todoSlice";
import { useState } from "react";

export const Details = () => {
  const params = useParams();
  const data = useSelector((state) =>
    state.todo.arr.filter((e) => e.date === params.id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text,setText] = useState('')

  console.log(data);
  return (
    <div className="details main">
      <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <Button
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            navigate("/");
          }}
          variant="outline-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          Go back
        </Button>{" "}
        <h2>
          {params.id} {`(${data[0].arr.length})`}
        </h2>
      </div>
      <div className="show1">
        {data[0].arr?.map((e) => {
          return (
            <div key={e.id}>
              <div>
                {e.edit ? (
                  <></>
                ) : (
                  <input
                    className="check"
                    onChange={() => {
                      dispatch(checkTodo({ id: e.id, date: e.date }));
                    }}
                    checked={e.completed}
                    type="checkbox"
                    style={{ display: "inline" }}
                  />
                )}

                {e.edit ? (
                  <Form.Control placeholder={e.text} onChange={(e) => {
                    setText(e.currentTarget.value)
                  }} />
                ) : (
                  <h4
                    style={{
                      textDecoration: e.completed ? "line-through" : "none",
                      color: e.completed ? "lightgray" : "black",
                      margin: "0px",
                    }}
                  >
                    {e.text}
                  </h4>
                )}
              </div>
              <div>
                {e.edit ? (
                  <Button onClick={()=>{
                    dispatch(saveTodo({id:e.id,date:e.date,text:text}))
                    setText('')
                  }} variant="outline-primary">Save</Button>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(editTodo({ id: e.id, date: e.date }));
                    }}
                    variant="outline-primary"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  onClick={() => {
                    dispatch(deleteTodo({ id: e.id, date: e.date }));
                  }}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
