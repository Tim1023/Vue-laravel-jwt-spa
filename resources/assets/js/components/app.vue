<template>
    <div>
        <top-menu></top-menu>
        <notification></notification>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu'
    import Notification from './common/Notification'
    import jwtToken from './../helpers/jwt'
    import Cookie from 'js-cookie'
    export default {
        created(){
          if(jwtToken.getToken()){

              this.$store.dispatch('firstLoadAuthUser')

              this.$store.dispatch('setAuthUser')

          }else if(Cookie.get('refresh')) {

              this.$store.dispatch('firstLoadAuthUser')

              this.$store.dispatch('refreshToken')

          }else {
              this.$store.dispatch('unsetAuthUser')
          }
        },
        components: {
            TopMenu,
            Notification
        }
    }
</script>
