<template>
    <form class="w-1/3"  @submit.prevent="login" >

        <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg has-error">
            <div class="mb-4">
                <label class="font-bold text-grey-darker block mb-2" :class="{'has-error' : errors.has('name')}">Name</label>
                <input v-model="name"
                       v-validate="{rules: { required: true, name: true}}"
                       data-vv-rules="required|name" data-vv-as="Email"
                       data-vv-delay="1000"
                       id="name" type="text"  name="name"
                       class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                       placeholder="Your Email" required>
                <span class="help-block " v-show="errors.has('name')" >{{errors.first('name')}}</span>

            </div>
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
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-4 rounded">
                    Update
                </button>

            </div>
        </div>

    </form>


</template>
<script>
    import JWTToken from './../../helpers/jwt';
    import { ErrorBag } from 'vee-validate';

    export default {
        data() {
            return {
                name:'',
                email:''
            }
        }

    }
</script>