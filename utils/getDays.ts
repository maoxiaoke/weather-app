export const getDays = (date: Date) => {
  const dayNum = new Date(date.toString()).getDay();
  return ['周日','周一','周二','周三','周四','周五','周六'][dayNum];
}
