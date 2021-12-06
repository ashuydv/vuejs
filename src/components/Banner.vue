<template>
    <div>
        <div class="container">
            <b-container class="banner py-3 px-4">
                <b-row class="align-items-center">
                    <b-col cols lg="9" class="font-weight-bold">
                        <span class="line-1">
                            LIST YOUR BRAND
                        </span> <br/>
                         <span class="line-2">
                            OPEN YOUR PWN STORE IN JUST 5 MINUTES
                        </span><br/>
                         <span class="line-3">
                           START SELLING FROM TODAY
                        </span>
                    </b-col>
                    <b-col cols lg="3" class=" d-flex align-items-center justify-content-center" >
                        <b-button size="lg" class="register" >Register Now</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    .banner {
        background: #A585BC;
        color: black;
    }
    .line-1, .line-2, .line-3 {
        font-size: 23px;
    }
    .line-2 {
        font-size: 35px;
        color: white;
    }
    .line-3 {
        float: right;
    }
    .banner .register {
        background: #7954A1 !important;
        color: white !important;
    }
</style>