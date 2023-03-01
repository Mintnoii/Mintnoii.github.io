<template>
	<div class="main">
		<h1 class="tags-header">Tags</h1>
		{{ data }}
	</div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useData } from "vitepress";
// import { initTags } from "../utils";

const { theme } = useData();
watchEffect(() => console.log(theme.value, 'theme'))
const data = computed(() => theme.value.posts);
</script>

<style scoped>
.main {
	margin: 0 auto;
	padding: 0.5rem 1.5rem 4rem;
	max-width: 48rem;
}
</style>
