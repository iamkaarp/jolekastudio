<template>
    <div class="w-full">
        <p class="text-sand keep-calm text-xl tracking-ultra-wide">
            Kontakt
        </p>
        <div class="w-1/4 flex text-6xl justify-between text-sand">
            <a
                href="https://www.instagram.com/jolekastudio"
                target="_blank"
                title="Instagram"
            >
                <i class="fab fa-instagram" />
            </a>
            <a
                href="https://www.youtube.com/channel/UCkUEb2uQu-nM6rP_fuNICyQ"
                target="_blank"
                title="YouTube"
            >
                <i class="fab fa-youtube" />
            </a>
            <a
                href="mailto:hello@jolekastudio.se"
                title="E-mail"
            >
                <i class="far fa-envelope" />
            </a>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
a {
    @apply text-sand;
    transition: 1s;
}

a:hover {
    transition: 1s;
    @apply text-white;
}
</style>
