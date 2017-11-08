<template>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/">Vue-Spa</router-link>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><router-link v-if="!user.authenticated" to="register">Register</router-link></li>
                <li><router-link v-if="!user.authenticated" to="login">Login</router-link></li>
                <li><router-link v-if="user.authenticated" to="profile">Profile</router-link></li>
                <li><a @click="logout" v-if="user.authenticated" href="#"  >Logout</a></li>

            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods:{
            logout() {
                this.$store.dispatch('logoutRequest' ).then(response => {
                    this.$router.push({name: 'home'})
                })
            }
        }
    }
</script>
