export const actionTypes = {
    FAILURE: 'FAILURE',
    LOAD_DATA: 'LOAD_DATA',
};

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error,
    };
}

export function loadData() {
    return { type: actionTypes.LOAD_DATA };
}
