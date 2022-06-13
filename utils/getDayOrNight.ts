const getDayOrNight = (date: string | Date | number = Date.now()) => {
  const hour = new Date(date.toString()).getHours();

  if (hour > 17 || hour < 7) {
    return 'night';
  }

  return 'day';
}

export {
  getDayOrNight,
}