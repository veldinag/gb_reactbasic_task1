export const middleware = (state) => (next) => (action) => {
    console.log({state, next: next, action})
    return next(action)
}