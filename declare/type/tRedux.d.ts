declare namespace tRedux {
    type reducerHandler = Function

    type actionReturn = { type: string, newValue?: newValue }
    type newValue = { [k: string]: any }
}