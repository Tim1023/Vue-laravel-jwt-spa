<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Logged in</h4>
                    </div>

                    <div class="panel-body">
                        <strong>User name : {{user.name}}</strong>
                        <br/>
                        <strong>User email : {{user.email}}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        }
    }
</script>
