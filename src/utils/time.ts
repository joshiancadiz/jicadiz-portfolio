/**
 * Returns the current time in the Philippines (Asia/Manila)
 * formatted as a string.
 */
export const getPhilippinesTime = () => {
    return new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(new Date());
};

/**
 * Returns the full date and time in the Philippines
 */
export const getPhilippinesFullDate = () => {
    return new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        dateStyle: 'full',
        timeStyle: 'medium',
    }).format(new Date());
};
