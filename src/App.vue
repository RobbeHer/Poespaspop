<script setup>
    import { ref } from 'vue'

    const data = [
        {
            date: "Thu 17 August '23",
            media: [
                "20230817_103514.jpg",
                "20230817_104704.jpg",
                "20230817_105857.jpg",
                "20230817_121913.jpg",
                "20230817_122156.jpg",
                "20230817_125111.jpg",
                "20230817_125559.jpg",
                "20230817_125800.mp4",
                "20230817_154231.jpg",
                "20230817_183222.mp4",
                "20230817_190007.mp4",
                "20230817_190720.mp4",
                "20230817_210106.jpg",
                "20230817_210111.jpg",
                "20230817_212516.mp4",
                "20230817_222758.mp4",
                "20230817_223112.mp4",
                "20230817_233424.mp4",
                "20230817_234059.jpg"
            ]
        },
        {
            date: "Fri 18 August '23",
            media: [
                "20230818_002506.jpg",
                "20230818_012518.mp4",
                "20230818_012950.mp4",
                "20230818_013508.mp4",
                "20230818_031539.mp4",
                "20230818_143928.jpg",
                "20230818_150445.jpg",
                "20230818_151457.mp4",
                "20230818_190120.jpg",
                "20230818_202514.jpg",
                "20230818_214534.jpg",
                "20230818_230237.jpg",
                "20230818_230241.jpg",
                "20230818_231110.mp4",
                "20230818_231730.jpg"
            ]
        },
        {
            date: "Sat 19 August '23",
            media: [
                "20230819_002119.mp4",
                "20230819_010200.jpg",
                "20230819_030836.mp4",
                "20230819_030925.mp4",
                "20230819_133003.jpg",
                "20230819_133338.jpg",
                "20230819_140707.jpg",
                "20230819_151040.jpg",
                "20230819_154337.jpg",
                "20230819_154343.jpg",
                "20230819_154347.mp4",
                "20230819_154540.mp4",
                "20230819_154714.mp4",
                "20230819_162218.jpg",
                "20230819_163834.mp4",
                "20230819_200053.jpg",
                "20230819_210917.jpg"
            ]
        },
        {
            date: "Sun 20 August '23",
            media: [
                "20230820_015222.mp4",
                "20230820_021409.jpg",
                "20230820_122100.jpg",
                "20230820_130400.jpg",
                "20230820_130401.jpg",
                "20230820_153114.jpg",
                "20230820_162407.jpg",
                "20230820_165403.jpg",
                "20230820_205926.jpg",
                "20230820_224623.jpg",
                "20230820_234233.mp4",
                "20230820_235924.mp4"
            ]
        }
    ]

    const allMedia = [
        ...data[0].media,
        ...data[1].media,
        ...data[2].media,
        ...data[3].media
    ]

    const selectedMedia = ref(null)
    
    function openDisplay(mediaFile) {
        selectedMedia.value = mediaFile
    }

    function displayPrevious() {
        let index = allMedia.indexOf(selectedMedia.value)
        if (--index < 0) index = allMedia.length - 1
        selectedMedia.value = allMedia[index]
    }

    function displayNext() {
        let index = allMedia.indexOf(selectedMedia.value)
        if (++index === allMedia.length) index = 0
        selectedMedia.value = allMedia[index]
    }

    function closeDisplay() {
        selectedMedia.value = null
    }

    function fileName(mediaFile) {
        return mediaFile.split('.')[0]
    }

    function fileFormat(mediaFile) {
        return mediaFile.split('.')[1]
    }
</script>

<template>
    <h1 class="text-2xl">Poespaspop 2023</h1>
    <h2 class="text-xl">Poespaspop 2023</h2>
    <p>Poespaspop 2023</p>
    
    <template v-if="selectedMedia">
        <img v-if="fileFormat(selectedMedia) === 'jpg'" height="200" :src="'/src/assets/720p/' + fileName(selectedMedia) + '_720p.jpg'">
        <video v-if="fileFormat(selectedMedia) === 'mp4'" height="200" :src="'/src/assets/720p/' + fileName(selectedMedia) + '_720p.mp4'" controls autoplay></video>
        <div>
            <button @click="displayPrevious">prev</button>
            <button @click="displayNext">next</button>
            <button @click="closeDisplay">close</button>
        </div>
    </template> 

    <div v-for="day in data" :key="day.date">
        <h2>{{ day.date }}</h2>
        <template v-for="mediaFile in day.media" :key="mediaFile">
            <img v-if="fileFormat(mediaFile) === 'jpg'" @click="openDisplay(mediaFile)" :src="'/src/assets/preview/' + fileName(mediaFile) + '_preview.jpg'" :title="mediaFile">
            <img v-if="fileFormat(mediaFile) === 'mp4'" @click="openDisplay(mediaFile)" :src="'/src/assets/preview/video/' + fileName(mediaFile) + '_preview.jpg'" :title="mediaFile">
        </template>
    </div>
</template>
