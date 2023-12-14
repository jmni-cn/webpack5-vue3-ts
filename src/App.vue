<template>
  <h1>{{ name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	setup() {
		const name = 'jmni'
		return {
			name
		}
	}
})
</script>
