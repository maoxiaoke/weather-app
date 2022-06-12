const getDuodecimalHour = (date: string | Date) => {
  const hour = new Date(date.toString()).getHours();

  if (hour === 0) {
    return '12 pm';
  }

  if (hour > 12) {
    return `${hour - 12} pm`;
  }

  return `${hour} am`;
}

export {
  getDuodecimalHour,
}