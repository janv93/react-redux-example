export default function reducer (state=0, action){      // auf 0 initialisieren, alternativ auch jeder andere Wert: state={a:[], b=false, c="text"}

    switch(action.type){
        case "INC": {
            return state+action.payload;
        }
        case "DEC": {
            return state-action.payload;
        }
        default:{
            return state;
        }
    }

}