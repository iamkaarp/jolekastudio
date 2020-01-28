<template>
    <div class="absolute w-full min-h-screen transparent-bg top-0 left-0 z-50">
        <div class="w-full h-screen flex justify-center items-center">
            <div class="bg-white w-1/3 rounded flex p-4">
                <div class="w-full md:w-1/2">
                    <img :src="project.image" />
                </div>
                <div class="w-full pl-2 md:w-1/2">
                    <h4 class="keep-calm tracking-ultra-wide">
                        {{ project.title }}
                    </h4>
                    <p>
                        {{ project.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>

</style>
