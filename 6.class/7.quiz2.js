// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 선생님 풀이
class Employee {
  constructor(name, department, hourPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hourPerMonth = hourPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hourPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, hourPerMonth) {
    super(name, department, hourPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hourPerMonth) {
    super(name, department, hourPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());

//내풀이;
class information {
  constructor(name, team) {
    this.name = name;
    this.team = team;
  }
}
class FulltimeEmployee extends information {
  constructor(name, team, fullourly, monthsPayCheck) {
    super(name, team);
    this.fullourly = fullourly;
    this.monthsPayCheck = monthsPayCheck;
  }
}
class ParttimeEmployee extends information {
  constructor(name, team, partourly, monthsPayCheck) {
    super(name, team);
    this.partourly = partourly;
    this.monthsPayCheck = monthsPayCheck;
  }
}

const fulltimeEmployee = new FulltimeEmployee(
  "Kale",
  "coffepart",
  10000,
  1000 * 12
);
console.log(fulltimeEmployee);

const parttimeEmployee = new ParttimeEmployee(
  "John",
  "sandwichpart",
  8000,
  8000 * 20
);
console.log(parttimeEmployee);
