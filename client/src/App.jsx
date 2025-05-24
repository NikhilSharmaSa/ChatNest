
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginThunk } from './store/slices/user/user.thunk.js'
function App() {
const {isAuthenticated}=useSelector(state=>state.userReducer)
console.log(isAuthenticated)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(loginThunk())
},[])
  return (
    <>

    </>
  )
}

export default App
