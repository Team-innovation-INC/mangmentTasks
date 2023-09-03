const currentDate = new Date();
export const dayOfWeek = currentDate.getDate();
currentDate.setDate(0);
export const daysOfMounth = currentDate.getDate();
