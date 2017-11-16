<template>
    <form class="form-horizontal" @submit.prevent="register">


        <div class="form-group" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-md-3 control-label">Password</label>

            <div class="col-md-7">
                <input v-model="password"
                       v-validate="{rules: { required: true, min: 6}}"
                       data-vv-rules="required|min:6" data-vv-as="Password"
                       data-vv-delay="1000"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')" >{{errors.first('password')}}</span>

            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('password_confirmation')}">
            <label for="password-confirm" class="col-md-3 control-label">Confirm Password</label>

            <div class="col-md-7">
                <input id="password-confirm"
                       v-validate="confirmPasswordRules"
                       data-vv-as="Confirmed password"
                       @keyup="passwordConfirmKeyUp = true"
                       data-vv-delay="1000"
                       type="password" class="form-control" name="password_confirmation" >
                <span class="help-block" v-show=" errors.has('password_confirmation')" >{{errors.first('password_confirmation')}}</span>

            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Update Password
                </button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {

        data() {
            return {
                password: '',
                passwordConfirmKeyUp: false
            }
        },
        computed: {
            confirmPasswordRules: function () {
                if(this.passwordConfirmKeyUp){
                    return {rules: { required: true, confirmed: 'password'}}
                }
                else return ""
            }
        },
        methods: {

        }
    }
</script>