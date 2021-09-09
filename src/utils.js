import { v4 as uuidv4 } from 'uuid';

const currentDate = new Date();

export const getDate = () => {
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    return currentDate.toLocaleString("ru", dateOptions);
};

export const getTime = () => {
       const timeOptions = {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
    };
    return currentDate.toLocaleString("ru", timeOptions);
};

export const getNewId = () => {
    return uuidv4();
};

