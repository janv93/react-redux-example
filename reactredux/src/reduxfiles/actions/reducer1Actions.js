export function incrementStore(number) {
    return {
        type: "INC",
        payload: number
    }
}

export function decrementStore(number) {
    return {
        type: "DEC",
        payload: number
    }
}