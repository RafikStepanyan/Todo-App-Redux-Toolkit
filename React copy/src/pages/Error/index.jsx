import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <h1>Error</h1>
      <h3>404</h3>
      <Button onClick={()=>{
        navigate('/')
      }} variant="primary">Go back</Button>
    </div>
  );
};
