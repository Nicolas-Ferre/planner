<script setup lang="ts">
const { loadProject } = useProject();

function onClick() {
    loadProject();
}
</script>

<template>
    <UButton
        icon="i-lucide-import"
        color="primary"
        variant="solid"
        class="font-bold rounded-full"
        active-color="secondary"
        @click="onClick"
    >
        Import tasks
    </UButton>
</template>
