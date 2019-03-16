<template>
    <div class="signUp">
        <div style="width: 600px;" class="uk-container-large uk-position-center">
            <div id="windowSignUp" class="uk-card-secondary uk-animation-slide-top">
                <h1 style="background-color: rgb(40,40,40)" class="uk-text-primary">Sign Up</h1>

                <div style="width:100%" class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" style="text-align:left" type="text" placeholder="Login"><br>
                </div>

                <div style="width:100%" class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: mail"></span>
                    <input class="uk-input" style="text-align:left" type="text" placeholder="Email"><br>
                </div>

                <div style="width:100%" class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input class="uk-input" style="text-align:left" type="password" placeholder="Password"><br>
                </div>                                
                
                <button class="uk-button-primary">SIGN UP</button>
                <h2 style="font-size: 15px; color: white; margin: 20px">Have account ? <router-link to="login" style="color: yellow">Login</router-link></h2>

                <router-link :to="{name: 'home'}">
                    <button type="button" class="uk-button-danger uk-margin-remove uk-padding-remove">CLOSE</button>
                </router-link>                  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signUp',
    data() {
        return {};
    },
    methods: {}
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        font-size: 25px;
        border: 0px;
    }
    button {
        margin-top: 20px;
        padding: 10px;
        font-size: 25px;
        width: 100%;
        cursor: pointer;
    }
    #windowSignUp {
        padding: 1px;
        border: 1px;
        border-style: solid;
        border-color: white;
    }
</style>
