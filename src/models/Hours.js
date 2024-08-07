// class Hours {
//   constructor() {
//     this.total_hours = 0;
//     this.night_hours = 0;
//     this.holiday_hours = 0;
//     this.order_hours = 0;
//     this.overtime_hours = 0;
//   }
// }

function Hours() {
  const obj = {};

  obj.total_hours = 0;
  obj.night_hours = 0;
  obj.holiday_hours = 0;
  obj.order_hours = 0;
  obj.overtime_hours = 0;

  return obj;
}

export { Hours };
