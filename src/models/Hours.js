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
  return [
    { rus_title: "Всего часов", eng_title: "total_hours", value: "" },
    { rus_title: "Ночные", eng_title: "night_hours", value: "" },
    { rus_title: "Праздничные", eng_title: "holiday_hours", value: "" },
    { rus_title: "По приказу", eng_title: "order_hours", value: "" },
    { rus_title: "Сверхурочка", eng_title: "overtime_hours", value: "" },
    { rus_title: "Вред-условия", eng_title: "harmful", value: "" },
  ];
}

// function Hours() {
//   const obj = {};

//   obj.total_hours = 0;
//   obj.night_hours = 0;
//   obj.holiday_hours = 0;
//   obj.order_hours = 0;
//   obj.overtime_hours = 0;

//   return obj;
// }

export { Hours };
