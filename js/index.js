


let password = document.getElementById("password");

function genPassword() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = +document.getElementById('input__passLenght').value;
   let password = "";
   if (passwordLength < 1) {
      alert('Введите длину пароля!')
   } else {
      for (let i = 1; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * chars.length);
         password += chars.substring(randomNumber, randomNumber + 1);
      }
   }


   document.getElementById('password').value = password;
}

function copyPassword() {
   let copyText = document.getElementById("password");
   copyText.select();
   document.execCommand("copy");
}




