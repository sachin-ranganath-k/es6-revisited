//filter() filters the data from the array or array of objects based on condition

let studentDetails = [
  {
    name: "Sachin",
    dept: "CS",
    marks: 85,
  },
  {
    name: "Ranganath",
    dept: "CS",
    marks: 70,
  },
  {
    name: "Prakash",
    dept: "EE",
    marks: 90,
  },
  {
    name: "Basu",
    dept: "EC",
    marks: 95,
  },
];

//Display CS branch students

//Old approach
filteredStudents = [];
for (let i = 0; i < studentDetails.length; i++) {
  if (studentDetails[i].dept == "CS") {
    filteredStudents.push(studentDetails[i]);
  }
}
console.log(filteredStudents);
/*[
    { name: 'Sachin', dept: 'CS', marks: 80 },
    { name: 'Ranganath', dept: 'CS' }
  ]
*/

//New approach using filter()
let filteredStudentData = studentDetails.filter(function (studentDetail) {
  return studentDetail.dept === "CS";
});

console.log(filteredStudentData);
/*[
    { name: 'Sachin', dept: 'CS', marks: 80 },
    { name: 'Ranganath', dept: 'CS' }
  ]
*/

/****************************** */
//Display student details who got marks greater than 80 from CS dept

let filteredMarksData = studentDetails.filter((studentDetail) => {
  return studentDetail.marks > 80 && studentDetail.dept == "CS";
});
console.log(filteredMarksData); //[ { name: 'Sachin', dept: 'CS', marks: 85 } ]




//**************************** */
//Filter out the comments of post

let post = {
  id: 4,
  title: "New Post",
};

let comments = [
  {
    postId: 4,
    content: "Awesome",
  },
  {
    postId: 4,
    content: "Not good",
  },

  {
    postId: 3,
    content: "Cool..!",
  },
];

let filteredComments = comments.filter((comment) => {
  return post.id == comment.postId;
});

console.log(filteredComments);
//Output

// [
//     { postId: 4, content: 'Awesome' },
//     { postId: 4, content: 'Not good' }
// ]


//Using function
let func=function commentsForPost(post, comment){   //Passing parameters is optional here
    return filteredComments = comments.filter((comment) => {
        return post.id == comment.postId;
      });
}
console.log('rrr',func());