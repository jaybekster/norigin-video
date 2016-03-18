export default function fetching({ dispatch, getState }) {
    return (next) => (action) => {
        const { fetching, types, ...rest } = action;

        if (!fetching) {
            next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({...rest, type: REQUEST});

        return fetching
            .then(response => {
                next({ response, ...rest, type: SUCCESS });
            })
            .catch(error => {
                next({ ...rest, error, type: FAILURE });
            });
    };
}
