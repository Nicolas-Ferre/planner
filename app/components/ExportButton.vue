<script setup lang="ts">
import html2canvas from "html2canvas-pro";

function onClick() {
    html2canvas(document.querySelector(".gantt-container")!).then((canvas) => {
        const link = document.createElement("a");
        link.download = "gantt.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
</script>

<template>
    <UButton
        icon="i-lucide-save"
        color="primary"
        variant="solid"
        class="font-bold rounded-full"
        @click="onClick"
    >
        Export as PNG
    </UButton>
</template>
