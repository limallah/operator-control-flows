Arithmetic Operators we have +, *, /, -, %, **, ++ and --
Assignment Operators we have =, +=, -=, *= and /=
Comparison Operators we have <, >, <=, >=, !=, !==, == and ===
Logical Operators we have &&, ||, (), ?, :
Bitwise Operators we have if else, else if, else switch; case, output, default

Question 2

Arithmetic operators
example 1
a = 126;
b = 4;
let division = (a / b);
console.log(division);

example 2
let c = 32;
let remainder = (a % c);
console.log(remainder);

Assignment Operators
example 1
let profession = 'Frontend Developer';

example 2
let q = q + 10; q += 6;

Comparison Operators
example 1
let e = 15;
console.log(e >= 10);

example 2
let pass = 300;
let fail = 200;
console.log(pass == 300);
console.log(fail ===200);

Logical Operators 
example 1
let votersAge >=25;
let indigine = Nigerial;
console.log('votersAge >=18 && indigine === Nigeria')? console.log('Eligible to vote): console.log(Not eligible);

example 2
let WAEC = GOOD;
let JAMB = PASS;
(WAEC == 'GOOD'|| NECO === 'PASS')? console.log('Adimitted') : console.log(Not Admitted);

Bitwise Operators
example 1
let voterAge = 30;
let eligibleVoterAge = 18;

if (voterAge >= eligibleVoterAge) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
example 2

// if score >= 70, A1
// if score is between 65 & 69 B2
// if score is between 60 & 64 B3
// if score is between 55 & 59 C4
// if score is between 50 & 54 C5
// if score is between 45 & 49 C6
// if score is between 40 & 44 D7
// if score is between 31 & 39 E8
// if score is below 30 F9

// Edge cases

let mathScore = -12;

if (mathScore >= 70 && mathScore <= 100) {
  console.log("A1");
} else if (mathScore >= 65 && mathScore <= 69) {
  console.log("B2");
} else if (mathScore >= 60 && mathScore <= 64) {
  console.log("B3");
} else if (mathScore >= 55 && mathScore <= 59) {
  console.log("C4");
} else if (mathScore >= 50 && mathScore <= 54) {
  console.log("C5");
} else if (mathScore >= 45 && mathScore <= 49) {
  console.log("C6");
} else if (mathScore >= 40 && mathScore <= 44) {
  console.log("D7");
} else if (mathScore >= 31 && mathScore <= 39) {
  console.log("E8");
} else if (mathScore >=0 && mathScore <=30) {
  console.log("F9");
} else {
  console.log('Invalid score')
}

Question 4
for (let i = 1; i < 20; i += 7) {
    console.log(i)
}
ANS
1 8 and 15