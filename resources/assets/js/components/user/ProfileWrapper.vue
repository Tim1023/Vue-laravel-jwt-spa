<template>
    <div class="row">
        <div class="col-md-3">
            <div class="list-group">
                <router-link :to="{name: 'profile'}" @click.native="hideNotification()" class="list-group-item" activeClass="active" exact>Profile</router-link>
                <router-link :to="{name: 'profile.editProfile'}" @click.native="hideNotification()" class="list-group-item" activeClass="active" exact>Update Profile</router-link>
                <router-link :to="{name: 'profile.editPassword'}" @click.native="hideNotification()" class="list-group-item" activeClass="active" exact>Change Password</router-link>

            </div>
        </div>
        <div class="col-md-9">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default{
        name: 'profile-wrapper',

        methods:{
            ...mapActions([
                'hideNotification'

            ])
        }
    }
</script>