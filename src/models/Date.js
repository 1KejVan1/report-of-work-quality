function DateModel(month = 1, year = 2024) {
  const date = new Date(year, month);
  this.selectedMonth = date.getMonth();
  this.selectedYear = date.getFullYear();
}

export { DateModel };
