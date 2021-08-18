let getDate = () => {
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
    };
   return currentDate.toLocaleString("ru", options);
}

export default getDate;