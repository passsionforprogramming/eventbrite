export const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

export const fieldsMatch = (email1, email2) => {
    return email1.toLowerCase() === email2.toLowerCase();
}