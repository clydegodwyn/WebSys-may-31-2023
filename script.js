const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });

        function auth(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var getEmail = localStorage.getItem('userEmail');
	      var getPwd = localStorage.getItem('userPwd');

          if(email == "clydeadmin@gmail.com" && password == "admin123"){
            window.location.href = "https://clydegodwyn.github.io/WebSystems_Act3/Homepage.html";
            alert("Login Successfully");
             var email2 = document.getElementById("eml").value;
            var password2 = document.getElementById("pwd").value;

            localStorage.setItem('userEmail',email2);
	          localStorage.setItem('userPwd',password2);
          }
          
          if(email == getEmail){
            if(password == getPwd){
              window.location.href = "https://clydegodwyn.github.io/WebSystems_Act3/Homepage.html";
              alert("Login Successfully");
              var email2 = document.getElementById("eml").value;
              var password2 = document.getElementById("pwd").value;
  
              localStorage.setItem('userEmail',email2);
                localStorage.setItem('userPwd',password2);
            }
            else alert("Wrong password")
          }
        }

        function addData(){
            var email2 = document.getElementById("eml").value;
            var password2 = document.getElementById("pwd").value;

            localStorage.setItem('userEmail',email2);
	          localStorage.setItem('userPwd',password2);

            
        }
