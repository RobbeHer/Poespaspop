<script setup>
import { ref } from "vue"
import Mozaik from "./components/Mozaik.vue"
import Diamond from "./components/Diamond.vue"
import SquiglyLine from "./components/SquiglyLine.vue"

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
]

const allMedia = [
  ...data[0].media,
  ...data[1].media,
  ...data[2].media,
  ...data[3].media,
]

const selectedMedia = ref(null)
const selectedDay = ref(data[0])

function setSelectedDay(day) {
  selectedDay.value = day
}

function isSelectedDay(day) {
  return selectedDay.value.name === day.name
}

function openDisplay(mediaFile) {
  selectedMedia.value = mediaFile
  scrollToNextImage()
}

function displayPrevious() {
  let index = allMedia.indexOf(selectedMedia.value)
  if (--index < 0) index = allMedia.length - 1
  selectedMedia.value = allMedia[index]

  scrollToNextImage()
}

function displayNext() {
  let index = allMedia.indexOf(selectedMedia.value)
  if (++index === allMedia.length) index = 0
  selectedMedia.value = allMedia[index]

  scrollToNextImage()
}

function scrollToNextImage() {
  data.forEach((day) => {
    if (day.media.includes(selectedMedia.value)) setSelectedDay(day)
  })

  setTimeout(() => document.getElementById(selectedMedia.value).scrollIntoView({block: 'center', behavior: "smooth"}), 200)
}

function closeDisplay() {
  selectedMedia.value = null
}

function fileName(mediaFile) {
  return mediaFile.split(".")[0]
}

function fileFormat(mediaFile) {
  return mediaFile.split(".")[1]
}

function isYellowTile(tile) {
  return tile % 2 === 1
}

function getTileHeight(tile) {
  let row = Math.floor((tile - 1) / tileColumns.value) + 1

  if ([1, 17].includes(row)) return (window.innerWidth >= 768) ? 'h-3' : 'h-2'
  if ([2, 16].includes(row)) return (window.innerWidth >= 768) ? 'h-4' : 'h-3'
  if ([3, 15].includes(row)) return (window.innerWidth >= 768) ? 'h-5' : 'h-4'
  if ([4, 14].includes(row)) return (window.innerWidth >= 768) ? 'h-6' : 'h-5'
  if ([5, 13].includes(row)) return (window.innerWidth >= 768) ? 'h-7' : 'h-6'
  if ([6, 12].includes(row)) return (window.innerWidth >= 768) ? 'h-10' : 'h-7'
  if ([7, 11].includes(row)) return (window.innerWidth >= 768) ? 'h-12' : 'h-10'
  if ([8, 10].includes(row)) return (window.innerWidth >= 768) ? 'h-16' : 'h-12'
  return (window.innerWidth >= 768) ? 'h-20' : 'h-16'
}

const tileColumns = ref(9)
const tileColumnsClassName = ref('grid-cols-9')
updateTileColumns()

window.addEventListener("resize", () => {
  updateTileColumns()
})

function updateTileColumns() {
  tileColumns.value = 9
  tileColumnsClassName.value = 'grid-cols-9'
  if (window.innerWidth >= 640) tileColumns.value = 11, tileColumnsClassName.value = 'grid-cols-11'
  if (window.innerWidth >= 768) tileColumns.value = 13, tileColumnsClassName.value = 'grid-cols-13'
  if (window.innerWidth >= 1024) tileColumns.value = 15, tileColumnsClassName.value = 'grid-cols-15'
  if (window.innerWidth >= 1280) tileColumns.value = 17, tileColumnsClassName.value = 'grid-cols-17'
  if (window.innerWidth >= 1536) tileColumns.value = 19, tileColumnsClassName.value = 'grid-cols-19'
}
</script>

<template>
  <!-- Display -->
  <div v-if="selectedMedia" class="absolute z-20 h-full w-full bg-black/80 backdrop-blur-sm">
    <div class="sticky top-0 h-dvh flex justify-center items-center touch-pinch-zoom">
      
      <div class="z-30 absolute w-10/12 flex justify-between top-[5%] md:top-[10%] font-bold">
        <a :href="'/assets/original/' + selectedMedia" download class="text-c_green">Download</a>
        <button @click="closeDisplay">Close</button>
      </div>
      
      <div class="w-10/12 flex justify-center">
          <img
          v-if="fileFormat(selectedMedia) === 'jpg'"
          :src="'/assets/720p/' + fileName(selectedMedia) + '_720p.jpg'"
          class="max-h-[80dvh]"
        />
        <video
          v-if="fileFormat(selectedMedia) === 'mp4'"
          :src="'/assets/720p/' + fileName(selectedMedia) + '_720p.mp4'"
          controls
          autoplay
          class="max-h-[80dvh]"></video>
      </div>

      <div class="z-30 absolute w-10/12 flex justify-between bottom-[5%] md:bottom-[10%] font-bold">
        <button @click="displayPrevious">Previous</button>
        <button @click="displayNext">Next</button>
      </div>

    </div>
  </div>

  <!-- Nav -->
  <div class="lg:absolute z-10 w-full top-0 font-bold uppercase pl-5 py-2 lg:pl-10 lg:py-4 flex items-center">
    <div class="flex gap-3 items-center origin-left scale-[.7] md:scale-[.8] lg:scale-100">
      <h1 class="text-3xl lg:text-5xl lg:font-extrabold">Poespaspop</h1>
      <div class="flex flex-col text-xs lg:text-sm leading-3">
        <div class="w-fill flex justify-between"><span class="text-baselg:font-extrabold">Hasselt</span> <span class="font-light lg:font-medium">Kiewit</span> <span class="lg:font-extrabold">BE</span></div>
        <div class="w-fill lg:font-extrabold">17<span class="font-light text-sm">|</span>18<span class="font-light text-sm">|</span>19<span class="font-light text-sm">|</span>20 <span class="font-light">aug</span> 2023</div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <div class="relative">
    <video
      src="/assets/Pukkelpop-2023-Recap.mp4"
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
          <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik /> Our best moments <Mozaik />
        </span>
      </div>
    </div>
  </div>

  <h1 class="py-8 md:py-10 pt-14 flex justify-center">
    This was Poespaspop 2023!
  </h1>

  <!-- Select day -->
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

  <!-- Image gallery -->
  <div class="grid grid-flow-row gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
    <template v-for="mediaFile in selectedDay.media" :key="mediaFile">
      <img
        v-if="fileFormat(mediaFile) === 'jpg'"
        @click="openDisplay(mediaFile)"
        :src="'/assets/preview/' + fileName(mediaFile) + '_preview.jpg'"
        :title="mediaFile"
        class="w-full"
        :id="mediaFile"
      />
      <div v-if="fileFormat(mediaFile) === 'mp4'"
        @click="openDisplay(mediaFile)"
        class="relative">
        <img
          :src="
            '/assets/preview/video/' + fileName(mediaFile) + '_preview.jpg'
          "
          :title="mediaFile"
          class="w-full"
          :id="mediaFile"
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

  <!-- Spotify banner -->
  <div class="max-w-full h-12 overflow-hidden flex items-center bg-c_blue">
    <span class="-translate-x-28 whitespace-nowrap text-xl font-bold uppercase text-black md:text-2xl">
      <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond /> Spotify playlist <Diamond />
    </span>
  </div>

  <!-- Tiles -->
  <div class="grid gap-0 relative"
    :class="tileColumnsClassName"
    >
    <div v-for="tile in tileColumns * 17"
      class="w-full text-red-500"
      :class="{
        'bg-c_yellow': isYellowTile(tile)},
        getTileHeight(tile)"
      ></div>

    <div class="absolute h-4/5 w-max-2/3 md:w-1/2 lg:w-1/3 self-center justify-self-center">
      <iframe style="border-radius:12px; background-color: green;" 
        src="https://open.spotify.com/embed/playlist/3XnjBgLSXsebO7utGQOPlt" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        class="w-full h-full"></iframe>
    </div>
  </div>

  <!-- Reverse banner -->
  <div class="max-w-full overflow-hidden flex h-12 items-center bg-c_green">
    <div class="marquee reverse">
      <span class="whitespace-nowrap text-xl font-bold uppercase text-black md:text-2xl">
        <SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine />
        <SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine /><SquiglyLine />
      </span>
    </div>
  </div>

  <!-- Footer -->
  <div class="px-10 py-5 md:px-20 md:py-10">
    <h2 class="uppercase text-c_yellow mb-4">More info</h2>
    <p class="mb-4">This site is a personal recap of events on <a href="https://www.pukkelpop.be" class="underline text-c_yellow hover:text-c_yellow/75 hover:no-underline">Pukkelpop 2023</a> and made just for recreational purpose.</p>
    <p> All copyright content goes to <span class="uppercase font-medium text-c_yellow">&copy; 2023 Pukkelpop The Factory BV</span> and their associates.</p>
  </div>
</template>
