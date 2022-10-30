const details = {
  name: "Sachin",
  surName: "K",
  dept: "Web",
};

const { name, surName, dept } = details;
console.log(`${name} ${surName} belongs to ${dept} department`); //Sachin K belongs to Web department

/**************************** */

const saveFile = {
  fileName: "destructure",
  extenstion: ".js",
  size: 2024,
};

function fileSummary({ fileName, extenstion, size },{color}) {
  console.log(`The file ${fileName}${extenstion} has size ${size} with icon color ${color}`); //The file destructure.js has size 2024
}
fileSummary(saveFile,{color:"green"});
