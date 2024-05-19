<template>
    <div class="header__filters filters">
        <form action="#" name="form_filter" class="form_filter">
            <div class="filteres-block__option filteres-block__inp input-search">
                <input type="text" name="search_ch" id=""
                    v-model="value_character"
                    :class="{'input-search_isEntry': isValid_characterValue}">
            </div>
            <div class="filteres-block__select filteres-block__option">
                <select ref="select_el" name="select_Status" id="" @change="(el) => {cur_status = el.target.value}">
                    <option :value="val"
                        v-for="val of select_status"
                        :key="val">{{ val }}</option>
                </select>
            </div>
            <div class="filteres-block__but button filteres-block__option"
                @click="apply">Применить</div>
        </form>
        
    </div>
    
</template>

<script setup>
    import {onMounted, defineEmits} from 'vue';
    import {getDataCharacter } from "../api";

    let select_el;
    let select_status = ['all','Alive', 'Dead', 'unknown']
    let cur_status
    let value_character = String()
    let isValid_characterValue = false;

    onMounted(() => {
        cur_status = select_el.value
        console.log(select_el.value);
    })
    let emit = defineEmits(['sendDataCharacter'])
    async function apply(event)
    {
        event.preventDefault();
        let isParams = false
        let data_query = {
            method: 'GET',
            type: 'character',
            url: 'https://rickandmortyapi.com/api/',
            isParams: isParams,
            params: {}
        }
        
        
        if(value_character !== '') 
        {
            data_query.params.name = value_character 
            data_query.isParams = true;
            
        }
        if(cur_status !== 'all')
        {
            data_query.isParams = true;
            data_query.params.status = cur_status;
        } 
        if (value_character == '')
        {
            isValid_characterValue = true
            // console.log(3);
        } 
        else isValid_characterValue = false
    
        let rezult = await getDataCharacter(data_query)
        
        // console.log(rezult);
        emit('sendDataCharacter', rezult)
    }
</script>
<style scope>
.filters{
    width: 70%;
}
.form_filter{
    display: flex;
    justify-content: space-between;
}
.button{
    background-color: #ff9800;
    color: #fff;
    font-weight: 500;
    min-width: fit-content;
    padding: 7px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: all .3s ease;
}
.button:hover{
    transform: scale(1.15);
}

.filteres-block__option{
    margin: 0 10px;
}
.input-search_isEntry{
    border: 1px solid red;
}
</style>