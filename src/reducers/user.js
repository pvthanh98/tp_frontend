var initState = {};
var myReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_USER":
			return {...action.user};
		default: return {...state};
	}
};

export default myReducer;