// class Days {
//   constructor() {
//     this.facts = 0;
//     this.weekends = 0;
//     this.A = 0;
//     this.P = 0;
//     this.vacation = 0;
//     this.b_l = 0;
//   }
// }

// function Days() {
//   return [
//     { rus_title: "Фактические", eng_title: "actual", value: "" },
//     { rus_title: "Выходные", eng_title: "weekends", value: "" },
//     { rus_title: "А", eng_title: "A", value: "" },
//     { rus_title: "П", eng_title: "P", value: "" },
//     { rus_title: "Отпуск", eng_title: "vacation", value: "" },
//     { rus_title: "Командировка", eng_title: "bis_trip", value: "" },
//     { rus_title: "Б/Л", eng_title: "b_l", value: "" },
//   ];
// }

function Days() {
  const obj = {};

  obj.actual = "";
  obj.weekends = "";
  obj.at_your_expence = "";
  obj.absence = "";
  obj.vacation = "";
  obj.bis_trip = "";
  obj.sick = "";

  return obj;
}

export { Days };
