<script setup>
import filteres from './components/filteres.vue';
import character from './components/character.vue';
import {getDataCharacter } from "./api";
import {onMounted, defineEmits, ref} from 'vue';

let characters = ref(Array());
let data_query = {
            method: 'GET',
            type: 'character',
            url: 'https://rickandmortyapi.com/api/',
            isParams: false,
        }
    getDataCharacter(data_query).then(res => {
      characters.value = res;
      // console.log(res);
    });
onMounted(() => {
  console.log(1);
})
function receiving(data)
{
  characters.value = data;
  console.log(characters.value);
  
}
</script>

<template>
  <div class="app__conteiner">
    <header>
      <filteres @sendDataCharacter="receiving"/>
    </header>
    <main>
      <!-- <div class="main__pagination pagination-block"></div> -->
      <character v-for="el of characters" :key="el" :char_el="el"/>
    </main>
  </div>
  
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  padding: 50px;
  margin: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main{
width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
