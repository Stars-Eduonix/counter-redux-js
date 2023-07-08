import store from "./store.js"; 
import { increment,decrement,reset } from "./actions/actionCreators.js";


// current value of store: 
console.log("initial value",store.getState()) // 0

// subscribe to store changes
store.subscribe(()=>{
    console.log("store changed",store.getState())
})


store.dispatch(increment())
store.dispatch(increment(10))
store.dispatch(increment(100)) 
store.dispatch(decrement())
store.dispatch(reset())
