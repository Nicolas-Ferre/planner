<script setup lang="ts">
import Gantt from "frappe-gantt";

const TASK_COLOR = "var(--color-green-700)";

const { project } = useProject();
const gantt = ref<Gantt | undefined>(undefined);

onMounted(() => {
    gantt.value = new Gantt("#gantt-chart", tasks(), {
        scroll_to: "start",
        today_button: false,
        readonly: true,
        column_width: 25,
        infinite_padding: false,
        popup: false,
    });
});

watch(project, () => gantt.value?.refresh(tasks()));

function tasks(): Gantt.Task[] {
    if (!project.value) {
        return [];
    }
    let currentDate = project.value.startDate;
    const tasks = [];
    for (const [index, task] of project.value.tasks.entries()) {
        const startDate = currentDate;
        const estimationInDays = task.estimationInHours / project.value.hoursPerDay;
        currentDate = new Date(startDate.getTime() + estimationInDays * 24 * 60 * 60 * 1000);
        tasks.push({
            id: index.toString(),
            name: task.name,
            start: startDate.toISOString().substring(0, 10),
            end: currentDate.toISOString().substring(0, 10),
            progress: 0,
            color: TASK_COLOR,
        });
    }
    return tasks;
}
</script>

<template>
    <div id="gantt-parent" class="overflow-x-auto flex">
        <div id="gantt-chart" class="gantt-dark" />
    </div>
</template>

<style>
#gantt-parent {
    border: solid var(--color-neutral-700) 1px !important;
    border-radius: 10px;
    background-color: var(--color-neutral-800);
}
.gantt-dark .gantt-container {
    border-radius: 0 !important;
}
.gantt-dark .gantt-container .grid-header {
    background-color: var(--color-neutral-800) !important;
}
.gantt-dark .gantt-container .upper-text {
    background-color: var(--color-neutral-800) !important;
    color: white !important;
}
.gantt-dark .gantt-container .lower-text {
    color: var(--color-neutral-300) !important;
}
.gantt-dark .gantt-container .side-header {
    background-color: var(--color-neutral-800) !important;
}
.gantt-dark .gantt-container .grid-row {
    fill: var(--color-neutral-800) !important;
}
.gantt-dark .gantt-container .row-line {
    stroke: transparent !important;
}
.gantt-dark .gantt-container .tick {
    stroke: var(--color-neutral-500) !important;
}
.gantt-dark .gantt-container .arrow {
    stroke: var(--color-neutral-300) !important;
}
.gantt-dark .bar-label {
    fill: white !important;
}
.gantt-dark .gantt-container .holiday-highlight {
    fill: var(--color-neutral-600) !important;
}
.gantt-dark .gantt-container .date-range-highlight {
    background-color: var(--color-neutral-600) !important;
}
</style>
