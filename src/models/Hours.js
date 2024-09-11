// class Hours {
//   constructor() {
//     this.total_hours = 0;
//     this.night_hours = 0;
//     this.holiday_hours = 0;
//     this.order_hours = 0;
//     this.overtime_hours = 0;
//   }
// }

// function Hours() {
//   return [
//     { rus_title: "Всего часов", eng_title: "total_hours", value: "" },
//     { rus_title: "Ночные", eng_title: "night_hours", value: "" },
//     { rus_title: "Праздничные", eng_title: "holiday_hours", value: "" },
//     { rus_title: "По приказу", eng_title: "order_hours", value: "" },
//     { rus_title: "Сверхурочка", eng_title: "overtime_hours", value: "" },
//     { rus_title: "Вред-условия", eng_title: "harmful", value: "" },
//   ];
// }

function Hours() {
  const obj = {};

  obj.total_hours = "";
  obj.night_hours = "";
  obj.holiday_hours = "";
  obj.order_hours = "";
  obj.overtime_hours = "";
  obj.harmful = "";

  return obj;
}

export { Hours };
