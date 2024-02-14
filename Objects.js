const sara = {
  firstName: "Sara",
  lastName: "Miller",
  mass: 70,
  height: 1.55,
  calcBMI: function () {
    this.bmi = (this.mass / (this.height * 2)).toFixed(2);
    return (this.mass / (this.height * 2)).toFixed(2);
  },
};
const malka = {
  firstName: "Malka",
  lastName: "Smith",
  mass: 92,
  height: 1.85,
  calcBMI: function () {
    this.bmi = (this.mass / (this.height * 2)).toFixed(2);
    return (this.mass / (this.height * 2)).toFixed(2);
  },
};
if (sara.calcBMI() > malka.calcBMI())
  console.log(
    `${sara.firstName} ${sara.lastName}'s BMI ${sara.bmi} is greater then ${malka.firstName} ${malka.lastName}'s BMI ${malka.bmi}.`
  );
else
  console.log(
    `${malka.firstName} ${malka.lastName}'s BMI ${malka.bmi} is greater then ${sara.firstName} ${sara.lastName}'s BMI ${sara.bmi}.`
  );
