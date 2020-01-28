<template>
    <div>
        <p class="keep-calm text-sand text-xl tracking-ultra-wide">
            Projekt
        </p>
        <div class="grid-container">
            <div
                v-for="project in projects"
                :key="project.id"
                class="grid-item"
                :style="'background-image: url(' + project.image + ')'"
            >
                <div class="w-full h-full flex flex-col justify-center items-center">
                    <p class="text-white keep-calm text-xl tracking-ultra-wide">
                        {{ project.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mock from '../mock.js';

export default {
    data() {
        return {
            projects: [],
        };
    },
    mounted() {
        this.loadProjects();
        console.log(this.$store.getters['projects/get']);
    },
    methods: {
        loadProjects() {
            Mock.forEach(element => {
                this.projects.push(element);
            });
        },
    },
};
</script>

<style>

</style>
