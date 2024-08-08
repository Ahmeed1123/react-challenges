import { useContext } from "react";
import { InputContext } from "../../context/FormInputContext";
import { userContext } from "../../context/UserContext";
export default function MyInput() {
  const myContext = useContext(InputContext);
  const userData = useContext(userContext);
  return (
    <>
      <label>
        {userData.name} {myContext.title}
      </label>
      <input
        type="text"
        value={myContext.value}
        onChange={(event) => {
          myContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}
