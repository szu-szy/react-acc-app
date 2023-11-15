import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  });

  return (
    <section>
      <h1>NOT FOUND 404 EROR</h1>
    </section>
  );
};
