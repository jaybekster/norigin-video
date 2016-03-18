export default function logging() {
    return (next) => (action) => {
        console.log('logMiddleware action received:', action);
        next(action);
    }
}
