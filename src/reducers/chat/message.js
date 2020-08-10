var initState = [];
var myReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_MESSAGE":
			return [...action.message];

		case "UPDATE_MESSAGES":
			return [...action.messages]
		default: return [...state];
	}
};

export default myReducer;