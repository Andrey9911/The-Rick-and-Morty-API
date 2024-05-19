<template>
  <div class="main_content-block character-card">
    <div class="character-card__avatar"><img :src="props.char_el.image" alt=""></div>
    <div class="character-card__info character-info">
        <div class="character-info__name accent">
            {{ props.char_el.name }}
        </div>
        <div class="character-info__status accent">
            <span :data-status="props.char_el.status" class="status-icon"></span>
            <p>{{props.char_el.status}} - {{ props.char_el.gender }}</p>
        </div>
        <div class="section character-info__location ">
            <p class="title">Last known location:</p>
            <a href="" class='accent'>{{props.char_el.location.name}}</a>
        </div>
        <div class="section character-info__episod">
            <p class="title">First seen in:</p>
            <a href="" class="accent">{{cur_episode}}</a>
        </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, defineEmits, defineProps, computed, ref} from 'vue';
import {getDataCharacter, getDataEpisode } from "../api";
let props = defineProps(['char_el', 'episode'])
let cur_episode = ref();

defindEpisode()
function defindEpisode()
{ 
    let rez;
    let data = {
            method: 'GET',
            type: 'episode',
            url: props.char_el.episode.shift(),
            isParams: false,
    }
    getDataEpisode(data).then(res => {
        cur_episode.value = res.name
        console.log(rez);
    });
    return rez
}



</script>

<style>
.accent{
    color: #fff;
    font-weight: 500;
}
.character-card{
    width: 600px;
    overflow: hidden;
    display: flex;
    margin: 10px;
    background-color: #ffffff36;
    border-radius: 10px;
}
.character-card__info{
    padding: 10px;
}
.section{
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
.character-info{
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
}
section>p{font-size: 16px;font-weight: 500;}
.character-card__avatar{    flex: 2 1 0%;
    width: 100%;}
.character-card__avatar img{
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
}
.character-info__name{font-size: 1.5rem;}
.character-info__status{align-items:center;display: flex;font-size: 16px; font-weight: 500;}
.status-icon[data-status='Alive']{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
}
.status-icon[data-status='unknown']{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: #6a6a6a;
    border-radius: 50%;
}
.status-icon[data-status='Dead']{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: #b92929;
    border-radius: 50%;
}

</style>