const DEFAULT_PROJECT: Project = {
    hoursPerDay: 8,
    startDate: new Date(),
    tasks: [],
};

const LOADED_PROJECT: Project = {
    hoursPerDay: 8,
    startDate: new Date("2025-01-01"),
    tasks: [
        {
            name: "Add backend",
            estimationInHours: 32,
        },
        {
            name: "Add frontend",
            estimationInHours: 40,
        },
        {
            name: "Create IaC",
            estimationInHours: 16,
        },
        {
            name: "Deploy in test environment",
            estimationInHours: 8,
        },
    ],
};

export type Project = {
    hoursPerDay: number;
    startDate: Date;
    tasks: Task[];
};

export type Task = {
    name: string;
    estimationInHours: number;
};

export default function () {
    const project = useState("tasks", () => ref(DEFAULT_PROJECT));

    function loadProject() {
        project.value = LOADED_PROJECT;
    }

    return { project, loadProject };
}
