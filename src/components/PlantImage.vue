<template>
  <img :src="imageSrc" :alt="alt" @error="onImageError" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import imageBlank from "@/assets/image-blank.jpg";

const props = defineProps<{
  image?: string;
  alt?: string;
}>();

const resolveImageUrl = (image?: string) => {
  if (!image) {
    return imageBlank;
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (
    image.startsWith("/") ||
    image.startsWith("assets/") ||
    image.startsWith("./") ||
    image.startsWith("../")
  ) {
    const cleanPath = image
      .replace(/^\/?/, "")
      .replace(/^\.\//, "")
      .replace(/^\.\.\//, "");
    return new URL(`../${cleanPath}`, import.meta.url).href;
  }

  return image;
};

const imageSrc = ref(resolveImageUrl(props.image));

watch(
  () => props.image,
  (value) => {
    imageSrc.value = resolveImageUrl(value);
  },
  { immediate: true },
);

const onImageError = () => {
  imageSrc.value = imageBlank;
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
