// TODO: import module bila dibutuhkan di sini
const  fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {  
  const result = []; 
    fs.readFile(file1,{encoding:'utf8'},(err, dataYangDibaca) => {
        if (err) {
          fnCallback(err,null);
        }else{
          const json = JSON.parse(dataYangDibaca);
          let jsonParse = (json.message.split(' ')[1]);
          result.push(jsonParse);
          fs.readFile(file2,{encoding:'utf8'},(err, dataYangDibaca) => {
            if (err) {
              fnCallback(err,null);
            }else{
              const json = JSON.parse(dataYangDibaca);
              let jsonParse = (json[0].message.split(' ')[1]);
              result.push(jsonParse);
              fs.readFile(file3,{encoding:'utf8'},(err, dataYangDibaca) => {
                if (err) {
                  fnCallback(err,null);
                }else{
                  const json = JSON.parse(dataYangDibaca);
                  let jsonParse = (json[0].data.message.split(' ')[1]);
                  result.push(jsonParse);
                  fnCallback(null,result);
                }
                
              });
            }
          });
        }
      });
   
    
   
    
    
  }





// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
