const dashboard = {
    projects: [
        {
            id: "web_application_project",
            name: "Web Application Project",
        },
        {
            id: "legal_issues",
            name: "Legal Issues",
        },
        {
            id: "it",
            name: "IT",
        },
    ],

    assigned_tasks: [
        {
            id: "unit_tests",
            name: "Unit Tests",
            status: "done",
        },
        {
            id: "end-to-end tests",
            name: "End-to-End Tests",
            status: "warning",
        },
        {
            id: "database_backup",
            name: "Database Backup",
            status: "done",
        },
        {
            id: "validation",
            name: "Validation",
            status: "done",
        },
    ],
    tasks: [
        {
            "id": "unit_tests",
            "name": "Unit Tests",
            "status": "done",
            "projectId": "web_application_project",
            "desc": "Implement unit tests to ensure module correctness.",
            "reports": [
                {
                    "name": "Emma",
                    "surname": "Stone",
                    "from": "progress",
                    "to": "done",
                    "datetime": "20.09.2024 09:45 AM",
                    "title": "All Tests Passed",
                    "desc": "All unit tests passed in CI pipeline.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
                },
                {
                    "name": "Jane",
                    "surname": "Doe",
                    "from": "done",
                    "to": "progress",
                    "datetime": "19.09.2024 11:00 PM",
                    "title": "Coverage Regression",
                    "desc": "Observed coverage dropped below threshold after refactoring.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg"
                },
                {
                    "name": "Mark",
                    "surname": "Taylor",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "16.09.2024 10:30 AM",
                    "title": "Unit Test Initialization",
                    "desc": "Started creating test scaffolding for user module.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/6.jpg"
                },
            ]
        },
        {
            "id": "end-to-end tests",
            "name": "End-to-End Tests",
            "status": "warning",
            "projectId": "web_application_project",
            "desc": "Test the full user journey from start to end.",
            "reports": [
                {
                    "name": "Lena",
                    "surname": "Nguyen",
                    "from": "idle",
                    "to": "warning",
                    "datetime": "12.09.2024 05:20 PM",
                    "title": "Test Failure",
                    "desc": "Test automation suite failed on login sequence.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/13.jpg"
                },
                {
                    "name": "Alex",
                    "surname": "Smith",
                    "from": "progress",
                    "to": "idle",
                    "datetime": "10.09.2024 03:15 PM",
                    "title": "Paused Testing",
                    "desc": "Blocked by missing environment configuration.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg"
                },
            ]
        },
        {
            "id": "database_backup",
            "name": "Database Backup",
            "status": "done",
            "projectId": "web_application_project",
            "desc": "Automate backup processes and monitor reliability.",
            "reports": [
                {
                    "name": "Olivia",
                    "surname": "Wong",
                    "from": "warning",
                    "to": "done",
                    "datetime": "21.09.2024 08:00 AM",
                    "title": "Backup Issue Resolved",
                    "desc": "Freed up disk space and verified backup success.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/39.jpg"
                },
                {
                    "name": "Mia",
                    "surname": "Lopez",
                    "from": "progress",
                    "to": "warning",
                    "datetime": "17.09.2024 06:40 AM",
                    "title": "Backup Error",
                    "desc": "Scheduled backup failed due to insufficient disk space.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg"
                },
                {
                    "name": "Isaac",
                    "surname": "Lee",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "14.09.2024 02:00 PM",
                    "title": "Backup Script Update",
                    "desc": "Updated cronjob to nightly frequency.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/19.jpg"
                },
            ]
        },
        {
            "id": "validation",
            "name": "Validation",
            "status": "done",
            "projectId": "web_application_project",
            "desc": "Validate data inputs and user forms.",
            "reports": [
                {
                    "name": "Eva",
                    "surname": "Turner",
                    "from": "progress",
                    "to": "done",
                    "datetime": "18.09.2024 10:15 AM",
                    "title": "Validation Complete",
                    "desc": "Form validation completed with edge cases.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/38.jpg"
                },
                {
                    "name": "Liam",
                    "surname": "Chen",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "15.09.2024 02:20 PM",
                    "title": "Started Validation",
                    "desc": "Initial schema validations implemented.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/39.jpg"
                },
            ]
        },
        {
            "id": "documentation",
            "name": "Documentation",
            "status": "idle",
            "projectId": "web_application_project",
            "desc": "Write and maintain technical documentation.",
            "reports": [
                {
                    "name": "Zane",
                    "surname": "Patel",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "13.09.2024 04:10 PM",
                    "title": "Started Drafting",
                    "desc": "Began writing API endpoint documentation.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
                },
                {
                    "name": "Nora",
                    "surname": "Khan",
                    "from": "progress",
                    "to": "idle",
                    "datetime": "11.09.2024 09:00 AM",
                    "title": "Paused for Review",
                    "desc": "Awaiting final technical inputs before proceeding.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
                },
            ]
        },
        {
            "id": "meeting",
            "name": "Meeting",
            "status": "idle",
            "projectId": "legal_issues",
            "desc": "Plan and conduct meetings regarding legal consultations.",
            "reports": [
                {
                    "name": "Sara",
                    "surname": "White",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "19.09.2024 01:30 PM",
                    "title": "Meeting Preparation",
                    "desc": "Prepared slides and agenda for next session.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/46.jpg"
                },
                {
                    "name": "Ethan",
                    "surname": "Murphy",
                    "from": "warning",
                    "to": "idle",
                    "datetime": "09.09.2024 04:30 PM",
                    "title": "Meeting Rescheduled",
                    "desc": "Legal advisor unavailable, postponed to next week.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/36.jpg"
                },
            ]
        },
        {
            "id": "router_setup",
            "name": "Router Setup",
            "status": "progress",
            "projectId": "it",
            "desc": "Configure network routing and ensure connectivity.",
            "reports": [
                {
                    "name": "Leo",
                    "surname": "Martinez",
                    "from": "progress",
                    "to": "done",
                    "datetime": "20.09.2024 05:00 PM",
                    "title": "Setup Completed",
                    "desc": "All routers configured and connected to network.",
                    "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg"
                },
                {
                    "name": "Sophia",
                    "surname": "Brown",
                    "from": "idle",
                    "to": "progress",
                    "datetime": "18.09.2024 01:00 PM",
                    "title": "Setup Initiated",
                    "desc": "Router firmware updated, started configuration.",
                    "imageUrl": "https://randomuser.me/api/portraits/women/45.jpg"
                },
            ]
        }
    ],

    tasks_old: [
        {
            id: "unit_tests",
            name: "Unit Tests",
            status: "progress",
            projectId: "web_application_project",
            desc: "description here",
            reports: [
                {
                    name: "Jane",
                    surname: "Doe",
                    from: "done", // there can be four types done , progress, idle ,warning 
                    to: "progress", // from and to cannot be same
                    datetime: "19.09.2024 11:00 PM",
                    title: "There comes the report title",
                    desc: "There comes the report desc",


                }

            ]


        },
        {
            id: "end-to-end tests",
            name: "End-to-End Tests",
            status: "idle",
            projectId: "web_application_project",
        },
        {
            id: "database_backup",
            name: "Database Backup",
            status: "warning",
            projectId: "web_application_project",
        },
        {
            id: "validation",
            name: "Validation",
            status: "progress",
            projectId: "web_application_project",
        },
        {
            id: "documentation",
            name: "Documentation",
            status: "idle",
            projectId: "web_application_project",
        },
        {
            id: "meeting",
            name: "Meeting",
            status: "idle",
            projectId: "legal_issues",
        },
        {
            id: "router_setup",
            name: "Router Setup",
            status: "progress",
            projectId: "it",
        },

    ]

};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class ApiService {
    async getAssignedTasks() {
        return dashboard.assigned_tasks;
    }
    async getProjects() {
        return dashboard.projects;
    }
    async getTask(id) {
        return dashboard.tasks.find((task) => task.id === id);
    }
    async getProject(id) {
        return dashboard.projects.find((project) => project.id === id);
        
    }
}
const apiService = new ApiService();
