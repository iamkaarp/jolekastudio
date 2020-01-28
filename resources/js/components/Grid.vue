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
                <div
                    class="w-full h-full flex flex-col justify-center items-center"
                    @click="clickedProject(project)"
                >
                    <p class="text-white keep-calm text-xl tracking-ultra-wide">
                        {{ project.title }}
                    </p>
                </div>
            </div>
        </div>
        <modal
            v-if="isModalShowing"
            :project="currentProject"
        />
    </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
    components: {
        Modal,
    },
    data() {
        return {
            projects: [],
            currentProject: null,
            isModalShowing: false,
        };
    },
    mounted() {
        this.loadProjects();
    },
    methods: {
        loadProjects() {
            this.projects = this.$store.getters['projects/get'];
            console.log(this.projects);
        },
        clickedProject(project) {
            this.isModalShowing = true;
            this.currentProject = project;
        },
    },
};
</script>

<style>

</style>
