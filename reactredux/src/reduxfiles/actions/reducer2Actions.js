export function multiplyStore(number) {
    return {
        type: "MUL",
        payload: number
    }
}

export function divideStore(number) {
    return {
        type: "DIV",
        payload: number
    }
}