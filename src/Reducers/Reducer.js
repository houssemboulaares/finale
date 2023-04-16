const initialState = {
    items: [
      {id: 1, name: "Item1", price: 10, selected: false},
      {id: 2, name: "Item2", price: 12, selected: false},
      {id: 3, name: "Item3", price: 13, selected: false},
      {id: 4, name: "Item4", price: 14, selected: false},
      {id: 5, name: "Item5", price: 15, selected: false},
      {id: 6, name: "Item6", price: 16, selected: false},
      {id: 7, name: "Item7", price: 17, selected: false},
      {id: 8, name: "Item8", price: 18, selected: false},
      {id: 9, name: "Item9", price: 19, selected: false},
      {id: 10, name: "Item10", price: 20, selected: false},
  
    ]
  }
  
  export function dummy(state = initialState, action) {
    switch (action.type) {
      case dummyConstants.UPDATE_ITEMS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state
    }
  }