function getEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = b/4;
  const e = b%4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19*a + b - d - g + 15) % 30;
  const i = Math.floor(c/4);
  const k = c%4;
  const l = (32 + 2*e + 2*i - h - k) % 7;
  const m = Math.floor((a + 11*h + 22*l) / 451);
  const z = h + l - 7*m + 114;
  const month = Math.floor(z/31);
  const date = z%31 + 1;
  return new Date(year, month-1, date);
}




export default function(year) {
  const easter = getEaster(year);

  const holidays = [];
  holidays.push(new Date(year, 0, 1)) // Nytårsdag
  holidays.push(new Date(year, 11, 24)) // Juledag
  holidays.push(new Date(year, 11, 26)) // Anden juledag
  holidays.push(new Date(easter).addDays(-7)) // Palmesøndag
  holidays.push(new Date(easter).addDays(-3)) // Skærtorsdag
  holidays.push(new Date(easter).addDays(-2)) // Langfredag
  holidays.push(easter) // Påskedag
  holidays.push(new Date(easter).addDays(1)) // Anden påskedag
  holidays.push(new Date(easter).addDays(5 + 7*4)) // Store bededag
  holidays.push(new Date(easter).addDays(39)) // Kristi Himmelfartsdag
  holidays.push(new Date(easter).addDays(7*7)) // Pinsedag
  holidays.push(new Date(easter).addDays(7*7+1)) // Anden pinsedag
  holidays.push(new Date(year, 5, 5)) // Grundlovsdag

  return holidays;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}