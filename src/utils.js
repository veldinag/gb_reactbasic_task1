let getDate = () => {
    const currentDate = new Date();
    let dateString = []
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'

    }
    const timeOptions = {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
    }

    dateString.push(currentDate.toLocaleString("ru", dateOptions))
    dateString.push(currentDate.toLocaleString("ru", timeOptions))
    return dateString;
}

export default getDate;