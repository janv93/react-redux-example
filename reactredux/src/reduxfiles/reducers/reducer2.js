export default function reducer(state = 10, action) {       // auf 10 initialisieren

    switch (action.type) {
        case "MUL": {
            return state * action.payload;
        }
        case "DIV": {
            return state / action.payload;
        }
        default:{
            return state;
        }
    }
}