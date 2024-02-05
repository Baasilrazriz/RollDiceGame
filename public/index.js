const   rembg = require('@remove-background-ai/rembg.js');
const dotenv = require('dotenv');
const img=document.querySelector("#i3");
const img1=document.querySelector("#i2");
const inp=document.querySelector("#inputimg");
var x;
inp.addEventListener('change',(e)=>{
  img.src =URL.createObjectURL(e.target.files[0]);
  x=img.src;
});
document.querySelector("#select").addEventListener('click',()=>{
bgremove(x);
})



function bgremove(img)
{
    
dotenv.config();

const API_KEY = process.env.API_KEY;

const onDownloadProgress = console.log;
const onUploadProgress = console.log;

rembg({
    apiKey: API_KEY,
   
    inputImagePath: img,
    onDownloadProgress,
    onUploadProgress
}).then(({ outputImagePath, cleanup }) => {
 img1.src= URL.createObjectURL(outputImagePath);
  console.log(`✅🎉 background removed and saved under path=${outputImagePath}`);
    
});
}