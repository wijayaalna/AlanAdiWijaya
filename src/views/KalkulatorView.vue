<template>
    <div v-if="showInput === 'pertama'">
<input id="value-pertama" v-model="valuePertama" type="number"></input>
    </div>
<div v-else>
    <input id ="value-kedua" v-model="valueKedua" type="number"></input>
</div>

<template v-for="angka in kumpulanAngka" :key="angka">
<div @click="handleButtonAngka(angka)">
{{angka}}
</div>
</template>
<template
        v-for="kondisi in kondisiOperation" :key="kondisi">
        <div @click="handleOperation(kondisi)">
        {{ kondisi }}</div>
    </template>

    <button @click="handleSubmit">Submit</button>
    <div>
        Hasil : {{ hasil }}
    </div>
     </template>
     <script setup>
    import {ref} from 'vue';
    
    const kumpulanAngka = [1,2,3,4,5,6,7,8,9,0]
    const kondisiOperation = ['kurang','tambah']

    const valuePertama = ref(0)
    const valueKedua = ref(0)

    const showInput = ref ('pertama')
    const selectedOperation = ref ('')

    const hasil = ref (0)

    function handleButtonAngka (value) {
        if (showInput.value === 'pertama')
        {
            valuePertama.value = value
        }
        else {
            valueKedua.value=value
        }

    }

    function handleOperation (operation) {
        selectedOperation.value = operation
        showInput.value='kedua'
    }

    function handleSubmit (){
        if (selectedOperation.value === 'tambah'){
            hasil.value = valuePertama.value + valueKedua.value
     } else {
            hasil.value = valuePertama.value - valueKedua.value
        }
    }
    </script>