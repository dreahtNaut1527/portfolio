<template>
    <v-app id="inspire">
        <Headers />
        <router-view />
        <Footers />
    </v-app>
</template>

<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
    data() {
        return {
            
        }
    },
    components: {
        Headers,
        Footers
    }
}
</script>