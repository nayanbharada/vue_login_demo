<template>
    
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
    name: "TutorialsLists",
    data(){
        return{
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
            title: ""
        };
    },
    methods:{
        retriveTutorials(){
             TutorialDataService.getAll()
             .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

        },

    },
    mounted(){
        this.retriveTutorials();
    }
}
</script>
