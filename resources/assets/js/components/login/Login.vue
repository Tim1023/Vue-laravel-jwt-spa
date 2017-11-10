<template>
    <div class="bg-grey-lighter h-screen font-sans">
        <div class="container mx-auto h-full flex justify-center ">
            <login-form></login-form>
        </div>
    </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        components: {
            LoginForm
        }
    }
</script>