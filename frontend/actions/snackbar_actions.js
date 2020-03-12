export const FIRE_SNACKBAR = "FIRE_SNACKBAR";
export const CEASE_SNACKBAR = "CEASE_SNACKBAR";

export const fireSnackBar = message => ({
    type: FIRE_SNACKBAR,
    message
});

export const ceaseSnackBar = () => ({
    type: CEASE_SNACKBAR
});

export const snackBarThunk = message => dispatch => {
    dispatch(fireSnackBar(message));
    setTimeout(() => dispatch(ceaseSnackBar()), 3000);
}