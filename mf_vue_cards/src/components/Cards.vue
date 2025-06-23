<template>
    <!-- Removed test box -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="character in characters"
      :key="character.id"
      class="rounded-lg shadow-md overflow-hidden relative flex flex-col"
    >
      <div class="relative">
        <img
          :src="character.image"
          :alt="character.name"
          class="object-cover hover:scale-110 transition-all duration-300 w-64 h-64 mx-auto"
          style="object-position: 0 0"
          @error="handleImageError"
        />
        <div
          class="absolute top-0 right-0 bg-gray-700 text-white px-2 py-1 m-2 rounded"
        >
          {{ character.race }}
        </div>
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h2 class="text-xl font-bold mb-2">{{ character.name }}</h2>
        <div class="flex justify-between mb-2">
          <span class="text-sm">Gender: {{ character.gender }}</span>
          <span class="text-sm">Affiliation: {{ character.affiliation }}</span>
        </div>
        <div class="mb-4">
          <div class="text-sm mb-1">Ki: {{ character.ki }}</div>
          <div class="text-sm">Max Ki: {{ character.maxKi }}</div>
        </div>
        <p class="text-sm text-gray-600 line-clamp-3 mb-3">
          {{ character.description }}
        </p>
        <div class="flex flex-grow justify-end items-end">
          <a
            :href="`/character/${character.id}`"
            class="bg-gray-700 h-10 text-white px-4 py-2 cursor-pointer text-center rounded hover:bg-gray-800 w-full"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Character } from "../types/characters";

const characters = ref<Character[]>([]);

const getCharacters = () => {
  fetch("https://dragonball-api.com/api/characters?limit=99999")
    .then((response) => response.json())
    .then((data) => (characters.value = data.items));
};

const handleImageError = (event: Event) => {
  // Set a fallback image if the character image fails to load
  const imgElement = event.target as HTMLImageElement;
  imgElement.src =
    "https://via.placeholder.com/300x400?text=No+Image+Available";
};

onMounted(() => {
  getCharacters();
});
</script>

