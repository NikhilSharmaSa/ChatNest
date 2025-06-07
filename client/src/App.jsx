import "./App.css";
import {Toaster} from 'react-hot-toast'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginThunk } from "./store/slices/user/user.thunk.js";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
