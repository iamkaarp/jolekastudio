<template>
    <div class="container mx-auto">
        <div class="mt-16">
            <Logo />
        </div>
        <div class="w-full mt-12">
            <Grid />
        </div>
        <div class="w-full mt-10">
            <Info />
        </div>
        <div class="w-full mt-10">
            <Social />
        </div>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import Grid from './Grid.vue';
import Info from './Info.vue';
import Social from './Social.vue';

export default {
    components: {
        Logo,
        Grid,
        Info,
        Social,
    },
};
</script>

<style>

</style>
