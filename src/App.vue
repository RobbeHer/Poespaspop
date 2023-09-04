<script setup>
import { ref } from "vue";
import Mozaik from "./components/Mozaik.vue";

const data = [
  {
    name: "Thu",
    date: "17 August '23",
    color: "bg-c_green",
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
      "20230817_234059.jpg",
    ],
  },
  {
    name: "Fri",
    date: "18 August '23",
    color: "bg-c_purple",
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
      "20230818_231730.jpg",
    ],
  },
  {
    name: "Sat",
    date: "19 August '23",
    color: "bg-c_orange",
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
      "20230819_210917.jpg",
    ],
  },
  {
    name: "Sun",
    date: "20 August '23",
    color: "bg-c_blue",
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
      "20230820_235924.mp4",
    ],
  },
];

const allMedia = [
  ...data[0].media,
  ...data[1].media,
  ...data[2].media,
  ...data[3].media,
];

const selectedMedia = ref(null);
const selectedDay = ref(data[0]);

function setSelectedDay(day) {
  selectedDay.value = day;
}

function isSelectedDay(day) {
  return selectedDay.value.name === day.name;
}

function openDisplay(mediaFile) {
  selectedMedia.value = mediaFile;
}

function displayPrevious() {
  let index = allMedia.indexOf(selectedMedia.value);
  if (--index < 0) index = allMedia.length - 1;
  selectedMedia.value = allMedia[index];
}

function displayNext() {
  let index = allMedia.indexOf(selectedMedia.value);
  if (++index === allMedia.length) index = 0;
  selectedMedia.value = allMedia[index];
}

function closeDisplay() {
  selectedMedia.value = null;
}

function fileName(mediaFile) {
  return mediaFile.split(".")[0];
}

function fileFormat(mediaFile) {
  return mediaFile.split(".")[1];
}
</script>

<template>
  <div class="relative">
    <video
      src="/src/assets/Pukkelpop-2023-Recap.mp4"
      autoplay
      muted
      loop
      disable-picture-in-picture
      class="w-full"
    ></video>

    <div
      class="max-w-full overflow-hidden absolute -bottom-6 left-0 flex h-12 -rotate-1 items-center bg-c_yellow md:bottom-1 md:h-14"
    >
      <div class="marquee">
        <span class="whitespace-nowrap text-xl font-bold uppercase text-black md:text-2xl">
          <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik />
        </span>
        <span class="whitespace-nowrap text-xl font-bold uppercase text-black md:text-2xl">
          Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik />
        </span>
      </div>
    </div>
  </div>

  <h1 class="py-8 md:py-10 pt-14 flex justify-center">
    This was Poespaspop 2023!
  </h1>

  <template v-if="selectedMedia">
    <img
      v-if="fileFormat(selectedMedia) === 'jpg'"
      height="200"
      :src="'/src/assets/720p/' + fileName(selectedMedia) + '_720p.jpg'"
    />
    <video
      v-if="fileFormat(selectedMedia) === 'mp4'"
      height="200"
      :src="'/src/assets/720p/' + fileName(selectedMedia) + '_720p.mp4'"
      controls
      autoplay
    ></video>
    <div>
      <button @click="displayPrevious">prev</button>
      <button @click="displayNext">next</button>
      <button @click="closeDisplay">close</button>
    </div>
  </template>

  <div
    class="flex justify-center gap-8 py-8 font-bold text-black md:justify-start md:gap-12 md:py-10 md:pl-20"
    :class="selectedDay.color"
  >
    <button
      v-for="day in data"
      :key="day.name"
      @click="setSelectedDay(day)"
      class="uppercase"
      :class="{ 'text-white': isSelectedDay(day) }"
    >
      {{ day.name }}
    </button>
  </div>

  <div class="grid grid-flow-row gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <template v-for="mediaFile in selectedDay.media" :key="mediaFile">
      <img
        v-if="fileFormat(mediaFile) === 'jpg'"
        @click="openDisplay(mediaFile)"
        :src="'/src/assets/preview/' + fileName(mediaFile) + '_preview.jpg'"
        :title="mediaFile"
        class="w-full"
      />
      <div v-if="fileFormat(mediaFile) === 'mp4'" class="relative">
        <img
          @click="openDisplay(mediaFile)"
          :src="
            '/src/assets/preview/video/' + fileName(mediaFile) + '_preview.jpg'
          "
          :title="mediaFile"
          class="w-full"
        />
        <div class="absolute left-0 top-0 bg-c_purple p-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            class="bi bi-camera-video stroke-white stroke-0"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
            />
          </svg>
        </div>
      </div>
    </template>
  </div>
</template>
