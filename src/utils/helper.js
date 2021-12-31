export const dateConverter = (addedDate) => {
    const dateConverter = addedDate.toString().split('-').reverse().join('/')
    return dateConverter
}