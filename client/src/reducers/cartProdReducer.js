import types from "../actions/types";
function cartData(state = null, action) {
  switch (action.type) {
    case types.fetchCartProducts:
      return action.payload || false;
    case types.modifyCart:
      switch (action.payload.operation) {
        case "add":
          return state.map((item, index) => {
            if (item.index !== action.payload.index) {
              return item;
            }
            return {
              ...item,
              count: item.count + 1
            };
          });
        case "subtract":
          return state.map((item, index) => {
            if (item.index !== action.payload.index) {
              return item;
            }
            return {
              ...item,
              count: item.count - 1
            };
          });

          // const index = action.payload.index;
          // let isSingleCount = state[index].count === 1;
          // let chosenIds = state;
          // if (isSingleCount) {
          //   chosenIds = chosenIds.filter(chosenId => chosenId.index != action.payload.index);
          // } else {
          //   chosenIds  = [
          //     ...chosenIds.slice(0, index),
          //     { ...chosenIds[index], count: chosenIds[index].count - 1 },
          //     ...chosenIds.slice(index + 1)
          //   ];
          // }
          // return (
          //   chosenIds
          // )

        case "remove":
          return state.filter(state => state.index !== action.payload.index);
        default:
      }
    default:
      return state;
  }
}

function purchaseStatus(state = null, action){
  debugger;
  switch (action.type) {
    case types.buyNow:
    return action.payload || false;
    default:
      return state;
  }
}

export { cartData, purchaseStatus };
