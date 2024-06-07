export const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1)
}

export const bgGenerator = (arr) => {
    let newDay = new Date(Date.now()).getDay() - 1;
    let backgroundColor = arr.map((i, d) => {
        if (d === newDay) {
            return "#aee9ef"
        } else {
            return "#ec775f"
        }
    });
    return backgroundColor;
}