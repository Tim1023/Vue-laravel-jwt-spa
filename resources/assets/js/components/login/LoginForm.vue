<template>
    <form class="w-1/3"  @submit.prevent="login" >

        <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
        <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg has-error ">
            <div class="mb-4">
                <label class="font-bold text-grey-darker block mb-2" :class="{'has-error' : errors.has('email')}">Email</label>
                <input v-model="email"
                       v-validate="{rules: { required: true, email: true}}"
                       data-vv-rules="required|email" data-vv-as="Email"
                       data-vv-delay="1000"
                       id="email" type="email"  name="email"
                       class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                       placeholder="Your Email" required>
                <span class="help-block " v-show="errors.has('email')" >{{errors.first('email')}}</span>

            </div>
            <div class="mb-4">
                <label class="font-bold text-grey-darker block mb-2" :class="{'has-error' : errors.has('password') || bag.has('password:auth')}">Password</label>
                <input class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                       placeholder="Your Password"
                       v-model="password"
                       v-validate="{rules: { required: true, min: 6}}"
                       data-vv-rules="required|min:6" data-vv-as="Password"
                       data-vv-delay="1000"
                       id="password" type="password" name="password" required
                       @click="clearBagError">
                <span class="help-block" v-show="errors.has('password')" >{{errors.first('password')}}</span>
                <span class="help-block" v-if="bag.has('password')" >{{bag.first('password')}}</span>

            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded">
                    Login
                </button>

                <a class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                   href="#">
                    Forgot Password?
                </a>
            </div>
        </div>
        <div class="text-center">
            <p class="text-grey-dark text-sm">Don't have an account? <a href="#"
                                                                        class="no-underline text-blue font-bold">Create an Account</a>.
            </p>
        </div>
    </form>


</template>
<script>
    import JWTToken from './../../helpers/jwt';
    import { ErrorBag } from 'vee-validate';

    export default {

        data() {
            return {
                password: '',
                email: '',
                bag: new ErrorBag()
            }
        },
        methods: {
            login() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        let formData = {
                            email: this.email,
                            password: this.password
                        };
                        this.$store.dispatch('loginRequest', formData)
                            .then(response => {
                                this.$router.push({name: 'profile'})
                            })
                            .catch(error => {
                                if (error.response.status === 421) {
                                    this.bag.add('password','Password not match','auth')
                                }
                                console.log(error.response)
                            })
                    }

                });
            },
            clearBagError() {
                this.bag.clear();
            }
        }
    }
</script>