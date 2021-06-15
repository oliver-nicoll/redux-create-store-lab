// // write your createStore function here

export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action)
    render()
  }
  function candyReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_CANDY':
        return [...state, action.candy];
      default:
        return state;
    }
  }
  
  function render() {
    let container = document.getElementById('container');
    if(store.getState()) {
      container.textContent = store.getState().join(' ')
    } else {
      throw new Error("the store's state has not been defined yet")
    }
  };
  
  function getState(){
    return state;
  }
  dispatch({type: '@@INIT'})
  return {dispatch: dispatch, getState: getState}
}

function render(){
  let container = document.getElementById('container')
}


// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.