<template>

    <figure class="ct-breadwinner-container">
        <img src="/ct-breadwinner-plain.svg" alt="">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <v-btn v-if="to" :to="to">
            Play
        </v-btn>
    </figure>

</template>

<script>
export default {
    name: "LevelStarter",
    props:{
        title: {
            type: String,
            required: false,
            default: 'Title Property'
        },
        subtitle: {
            type: String,
            required: false,
            default: 'SubTitle Property'
        },
        to: {
            type: [String, Boolean],
            required: false,
            default: false
        }
    },

    methods: {
    },
}
</script>

<style>
.ct-breadwinner-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
}

.ct-breadwinner-container h1, 
.ct-breadwinner-container h2, 
.ct-breadwinner-container .v-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.ct-breadwinner-container h1 {
    top: 30%;
    color: white;
    text-transform: uppercase;
    font-size: 4vmin;
}

.ct-breadwinner-container h2 {
    top: 40%;
    text-transform: uppercase;
    color: #173349;
    font-size: 5vmin;
}

.ct-breadwinner-container .v-btn {
    top: 55%;
}

.ct-breadwinner-container img {
    max-width: 100%;
}

</style>