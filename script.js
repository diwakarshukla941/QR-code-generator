const imgBox = document.getElementById('img-box');
const qrImg = document.getElementById('quImage');
const qrtxt = document.getElementById('qrText');
const btn = document.getElementById('Generate');

const generateQR = () =>{
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtxt.value}`;
}

btn.addEventListener('click',()=>{
    generateQR();
})
