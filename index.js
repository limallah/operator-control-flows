// QUESTION 3
// SCIENCE SUBJECTS - English, Mathematics, Physics, Chemistry, Biology, Technical Drawing 
// SOCIAL SCIENCE SUBJECTS - English, Mathematics, Accounting, Commerce, Marketing, Geography
// ART SUBJECTS - English, Mathematics, Government, Economics, Literature, History
// GENERAL SUBJECTS - English, Mathematics

let classGroup = 'Social Science'

if (classGroup == 'Science Subjects') {
    console.log('English, Mathematics, Physics, Chemistry, Biology, Technical Drawing');
}else if (classGroup == 'Art Subjects') {
    console.log('English, Mathematics, Government, Economics, Literature, History');
}else if (classGroup == 'Social Science'){
    console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography')
}else {
    console.log('English, Mathematics')
}



// // QUESTION 5
// const sum = 80

function pwrofTwo(num){
    let base = 1;
    if(num < 0){
        num *= -1;
     }

     while(base < num){
        if(num - base < Math.floor(base / 2)){
           return base;
        };
        base *= 2;
     };

     console.log('The number ' + num + ' is the power of 2 nearest ' + base);

}
pwrofTwo(120);


