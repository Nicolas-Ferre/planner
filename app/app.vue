<template>
    <ClientOnly>
        <UContainer>
            <UHeader title="Task planner" :toggle="false" />
            <UMain class="flex py-8">
                <UContainer>
                    <UCard>
                        <template #header>
                            <div class="flex gap-4">
                                <ImportButton />
                                <ExportButton />
                            </div>
                        </template>
                        <GanttChart view-mode="day" />
                    </UCard>
                </UContainer>
            </UMain>
        </UContainer>
    </ClientOnly>
</template>

<style lang="css">
@import "tailwindcss";
@import "@nuxt/ui";
@import "frappe-gantt/dist/frappe-gantt.css";
</style>
