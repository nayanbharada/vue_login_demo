<template>
    <div id="login">
        <h2>Login page</h2>
        <div class="container">
            <p> {{ error }}</p>
        <form  v-on:submit="loginsubmit">
            <div class="mb-3">
                  <label>Username</label>
                  <input type="text" class="form-control" v-model="username">
            </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>

            <button value="Submit">submit</button>
            <button value="Clear">Clear</button>
        </form>
        </div>
    </div>
    
</template>

<script>
export default{
    name: 'Login',
    data() {
        return{
             username: "",
            password: "",
            error: ""
        }
    }, 
    methods: {
        loginsubmit(){
            
            if (this.username != "" && this.password != ""){

                if(this.username == "nayan" && this.password == "Nayan@123"){
                        //  alert("Login successfull");
                            this.$router.push('Dashboard')

                        // this.$router.push({ name: "Dashboard" });
                        //   e.preventDefault()
                        //  this.$router.replace({ name: "Dashboard" });
                }
                else{
                   
                    this.error = "The username and / or password is incorrect";
                }
            }
            else{
                //  e.preventDefault()
                this.error = "A username and password must be present";
            }
              
            
        }

    }
}
</script>
