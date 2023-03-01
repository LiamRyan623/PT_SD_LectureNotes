/* 
  midterm: 3.3,
  project: 4.0,
  final: 3.2
*/

let grades = {
    midterm: {
      grade: 3.3,
      weight: 1,
      // build sub-object
    },
    project: {
      grade: 4.0,
      weight: 1,
      // build sub-object
    },
    final: {
      grade: 3.2,
      weight: 2,
      // build sub-object
    }
  }
  
  function gpa(object) {
    let gradesToWeight = Object.keys(object)
    let gradeSum = 0;
    let weightSum = 0;
    gradesToWeight.forEach(function(key) {
        
      gradeSum += object[key].grade * object[key].weight;
      weightSum += object[key].weight
    })
    

    weightedGrade = gradeSum / weightSum
    // write your code here
}
  
   gpa(grades);
  console.log('The final GPA is ' + weightedGrade);