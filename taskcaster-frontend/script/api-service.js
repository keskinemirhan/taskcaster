const dashboard = {
    projects: [
        {
            id: "web_application_project",
            name: "Web Application Project",
            desc: "Taskcaster web application project"
        },
        {
            id: "legal_issues",
            name: "Legal Issues",
            desc: "Legal issues of the company"
        },
        {
            id: "it",
            name: "IT",
            desc: "IT Jobs which are urgent"
        },
    ],

    project_tasks: [
        {
            id: "web_application_project",
            name: "Web Application Project",
            tasks: [

            ]
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
    all_tasks: [
        {
            "id": "unit_tests",
            "name": "Unit Tests",
            "status": "idle",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Unit Tests task for project Web Application Project"
        },
        {
            "id": "integration_tests",
            "name": "Integration Tests",
            "status": "idle",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Integration Tests task for project Web Application Project"
        },
        {
            "id": "requirement_analysis",
            "name": "Requirement Analysis",
            "status": "idle",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Requirement Analysis task for project Web Application Project"
        },
        {
            "id": "documentation",
            "name": "Documentation",
            "status": "warning",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Documentation task for project Web Application Project"
        },
        {
            "id": "code_review",
            "name": "Code Review",
            "status": "warning",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Code Review task for project Web Application Project"
        },
        {
            "id": "design_mockups",
            "name": "Design Mockups",
            "status": "progress",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Design Mockups task for project Web Application Project"
        },
        {
            "id": "security_audit",
            "name": "Security Audit",
            "status": "done",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Security Audit task for project Web Application Project"
        },
        {
            "id": "user_interviews",
            "name": "User Interviews",
            "status": "idle",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "User Interviews task for project Web Application Project"
        },
        {
            "id": "legal_research",
            "name": "Legal Research",
            "status": "done",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Legal Research task for project Web Application Project"
        },
        {
            "id": "system_upgrade",
            "name": "System Upgrade",
            "status": "progress",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "System Upgrade task for project Web Application Project"
        },
        {
            "id": "bug_fixing",
            "name": "Bug Fixing",
            "status": "done",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Bug Fixing task for project Web Application Project"
        },
        {
            "id": "compliance_check",
            "name": "Compliance Check",
            "status": "warning",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Compliance Check task for project Web Application Project"
        },
        {
            "id": "deployment",
            "name": "Deployment",
            "status": "progress",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Deployment task for project Web Application Project"
        },
        {
            "id": "load_testing",
            "name": "Load Testing",
            "status": "idle",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Load Testing task for project Web Application Project"
        },
        {
            "id": "ui_enhancement",
            "name": "UI Enhancement",
            "status": "idle",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "UI Enhancement task for project Web Application Project"
        },
        {
            "id": "database_migration",
            "name": "Database Migration",
            "status": "idle",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Database Migration task for project Web Application Project"
        },
        {
            "id": "api_development",
            "name": "API Development",
            "status": "idle",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "API Development task for project Web Application Project"
        },
        {
            "id": "contract_review",
            "name": "Contract Review",
            "status": "progress",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Contract Review task for project Web Application Project"
        },
        {
            "id": "policy_drafting",
            "name": "Policy Drafting",
            "status": "done",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Policy Drafting task for project Web Application Project"
        },
        {
            "id": "penetration_testing",
            "name": "Penetration Testing",
            "status": "warning",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Penetration Testing task for project Web Application Project"
        },
        {
            "id": "meeting_preparation",
            "name": "Meeting Preparation",
            "status": "warning",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Meeting Preparation task for project Web Application Project"
        },
        {
            "id": "refactoring",
            "name": "Refactoring",
            "status": "done",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Refactoring task for project Web Application Project"
        },
        {
            "id": "performance_tuning",
            "name": "Performance Tuning",
            "status": "done",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Performance Tuning task for project Web Application Project"
        },
        {
            "id": "backup_planning",
            "name": "Backup Planning",
            "status": "idle",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Backup Planning task for project Web Application Project"
        },
        {
            "id": "firewall_configuration",
            "name": "Firewall Configuration",
            "status": "progress",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Firewall Configuration task for project Web Application Project"
        },
        {
            "id": "data_encryption",
            "name": "Data Encryption",
            "status": "warning",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Data Encryption task for project Web Application Project"
        },
        {
            "id": "service_monitoring",
            "name": "Service Monitoring",
            "status": "done",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Service Monitoring task for project Web Application Project"
        },
        {
            "id": "vendor_management",
            "name": "Vendor Management",
            "status": "progress",
            "assigned": true,
            "projectId": "web_application_project",
            "desc": "Vendor Management task for project Web Application Project"
        },
        {
            "id": "issue_escalation",
            "name": "Issue Escalation",
            "status": "done",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "Issue Escalation task for project Web Application Project"
        },
        {
            "id": "license_renewal",
            "name": "License Renewal",
            "status": "progress",
            "assigned": false,
            "projectId": "web_application_project",
            "desc": "License Renewal task for project Web Application Project"
        },
        {
            "id": "unit_tests",
            "name": "Unit Tests",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Unit Tests task for project Legal Issues"
        },
        {
            "id": "integration_tests",
            "name": "Integration Tests",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Integration Tests task for project Legal Issues"
        },
        {
            "id": "requirement_analysis",
            "name": "Requirement Analysis",
            "status": "idle",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Requirement Analysis task for project Legal Issues"
        },
        {
            "id": "documentation",
            "name": "Documentation",
            "status": "warning",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Documentation task for project Legal Issues"
        },
        {
            "id": "code_review",
            "name": "Code Review",
            "status": "progress",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Code Review task for project Legal Issues"
        },
        {
            "id": "design_mockups",
            "name": "Design Mockups",
            "status": "progress",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Design Mockups task for project Legal Issues"
        },
        {
            "id": "security_audit",
            "name": "Security Audit",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Security Audit task for project Legal Issues"
        },
        {
            "id": "user_interviews",
            "name": "User Interviews",
            "status": "progress",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "User Interviews task for project Legal Issues"
        },
        {
            "id": "legal_research",
            "name": "Legal Research",
            "status": "done",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Legal Research task for project Legal Issues"
        },
        {
            "id": "system_upgrade",
            "name": "System Upgrade",
            "status": "done",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "System Upgrade task for project Legal Issues"
        },
        {
            "id": "bug_fixing",
            "name": "Bug Fixing",
            "status": "idle",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Bug Fixing task for project Legal Issues"
        },
        {
            "id": "compliance_check",
            "name": "Compliance Check",
            "status": "idle",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Compliance Check task for project Legal Issues"
        },
        {
            "id": "deployment",
            "name": "Deployment",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Deployment task for project Legal Issues"
        },
        {
            "id": "load_testing",
            "name": "Load Testing",
            "status": "idle",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Load Testing task for project Legal Issues"
        },
        {
            "id": "ui_enhancement",
            "name": "UI Enhancement",
            "status": "idle",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "UI Enhancement task for project Legal Issues"
        },
        {
            "id": "database_migration",
            "name": "Database Migration",
            "status": "progress",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Database Migration task for project Legal Issues"
        },
        {
            "id": "api_development",
            "name": "API Development",
            "status": "warning",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "API Development task for project Legal Issues"
        },
        {
            "id": "contract_review",
            "name": "Contract Review",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Contract Review task for project Legal Issues"
        },
        {
            "id": "policy_drafting",
            "name": "Policy Drafting",
            "status": "progress",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Policy Drafting task for project Legal Issues"
        },
        {
            "id": "penetration_testing",
            "name": "Penetration Testing",
            "status": "progress",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Penetration Testing task for project Legal Issues"
        },
        {
            "id": "meeting_preparation",
            "name": "Meeting Preparation",
            "status": "done",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Meeting Preparation task for project Legal Issues"
        },
        {
            "id": "refactoring",
            "name": "Refactoring",
            "status": "idle",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Refactoring task for project Legal Issues"
        },
        {
            "id": "performance_tuning",
            "name": "Performance Tuning",
            "status": "done",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Performance Tuning task for project Legal Issues"
        },
        {
            "id": "backup_planning",
            "name": "Backup Planning",
            "status": "done",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Backup Planning task for project Legal Issues"
        },
        {
            "id": "firewall_configuration",
            "name": "Firewall Configuration",
            "status": "progress",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Firewall Configuration task for project Legal Issues"
        },
        {
            "id": "data_encryption",
            "name": "Data Encryption",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Data Encryption task for project Legal Issues"
        },
        {
            "id": "service_monitoring",
            "name": "Service Monitoring",
            "status": "warning",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Service Monitoring task for project Legal Issues"
        },
        {
            "id": "vendor_management",
            "name": "Vendor Management",
            "status": "idle",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "Vendor Management task for project Legal Issues"
        },
        {
            "id": "issue_escalation",
            "name": "Issue Escalation",
            "status": "idle",
            "assigned": true,
            "projectId": "legal_issues",
            "desc": "Issue Escalation task for project Legal Issues"
        },
        {
            "id": "license_renewal",
            "name": "License Renewal",
            "status": "warning",
            "assigned": false,
            "projectId": "legal_issues",
            "desc": "License Renewal task for project Legal Issues"
        },
        {
            "id": "unit_tests",
            "name": "Unit Tests",
            "status": "progress",
            "assigned": true,
            "projectId": "it",
            "desc": "Unit Tests task for project It"
        },
        {
            "id": "integration_tests",
            "name": "Integration Tests",
            "status": "done",
            "assigned": true,
            "projectId": "it",
            "desc": "Integration Tests task for project It"
        },
        {
            "id": "requirement_analysis",
            "name": "Requirement Analysis",
            "status": "progress",
            "assigned": false,
            "projectId": "it",
            "desc": "Requirement Analysis task for project It"
        },
        {
            "id": "documentation",
            "name": "Documentation",
            "status": "warning",
            "assigned": true,
            "projectId": "it",
            "desc": "Documentation task for project It"
        },
        {
            "id": "code_review",
            "name": "Code Review",
            "status": "done",
            "assigned": true,
            "projectId": "it",
            "desc": "Code Review task for project It"
        },
        {
            "id": "design_mockups",
            "name": "Design Mockups",
            "status": "done",
            "assigned": true,
            "projectId": "it",
            "desc": "Design Mockups task for project It"
        },
        {
            "id": "security_audit",
            "name": "Security Audit",
            "status": "progress",
            "assigned": false,
            "projectId": "it",
            "desc": "Security Audit task for project It"
        },
        {
            "id": "user_interviews",
            "name": "User Interviews",
            "status": "idle",
            "assigned": true,
            "projectId": "it",
            "desc": "User Interviews task for project It"
        },
        {
            "id": "legal_research",
            "name": "Legal Research",
            "status": "warning",
            "assigned": true,
            "projectId": "it",
            "desc": "Legal Research task for project It"
        },
        {
            "id": "system_upgrade",
            "name": "System Upgrade",
            "status": "idle",
            "assigned": true,
            "projectId": "it",
            "desc": "System Upgrade task for project It"
        },
        {
            "id": "bug_fixing",
            "name": "Bug Fixing",
            "status": "progress",
            "assigned": true,
            "projectId": "it",
            "desc": "Bug Fixing task for project It"
        },
        {
            "id": "compliance_check",
            "name": "Compliance Check",
            "status": "progress",
            "assigned": false,
            "projectId": "it",
            "desc": "Compliance Check task for project It"
        },
        {
            "id": "deployment",
            "name": "Deployment",
            "status": "done",
            "assigned": true,
            "projectId": "it",
            "desc": "Deployment task for project It"
        },
        {
            "id": "load_testing",
            "name": "Load Testing",
            "status": "progress",
            "assigned": true,
            "projectId": "it",
            "desc": "Load Testing task for project It"
        },
        {
            "id": "ui_enhancement",
            "name": "UI Enhancement",
            "status": "warning",
            "assigned": false,
            "projectId": "it",
            "desc": "UI Enhancement task for project It"
        },
        {
            "id": "database_migration",
            "name": "Database Migration",
            "status": "warning",
            "assigned": false,
            "projectId": "it",
            "desc": "Database Migration task for project It"
        },
        {
            "id": "api_development",
            "name": "API Development",
            "status": "warning",
            "assigned": true,
            "projectId": "it",
            "desc": "API Development task for project It"
        },
        {
            "id": "contract_review",
            "name": "Contract Review",
            "status": "idle",
            "assigned": false,
            "projectId": "it",
            "desc": "Contract Review task for project It"
        },
        {
            "id": "policy_drafting",
            "name": "Policy Drafting",
            "status": "done",
            "assigned": false,
            "projectId": "it",
            "desc": "Policy Drafting task for project It"
        },
        {
            "id": "penetration_testing",
            "name": "Penetration Testing",
            "status": "done",
            "assigned": true,
            "projectId": "it",
            "desc": "Penetration Testing task for project It"
        },
        {
            "id": "meeting_preparation",
            "name": "Meeting Preparation",
            "status": "warning",
            "assigned": true,
            "projectId": "it",
            "desc": "Meeting Preparation task for project It"
        },
        {
            "id": "refactoring",
            "name": "Refactoring",
            "status": "idle",
            "assigned": true,
            "projectId": "it",
            "desc": "Refactoring task for project It"
        },
        {
            "id": "performance_tuning",
            "name": "Performance Tuning",
            "status": "done",
            "assigned": false,
            "projectId": "it",
            "desc": "Performance Tuning task for project It"
        },
        {
            "id": "backup_planning",
            "name": "Backup Planning",
            "status": "idle",
            "assigned": false,
            "projectId": "it",
            "desc": "Backup Planning task for project It"
        },
        {
            "id": "firewall_configuration",
            "name": "Firewall Configuration",
            "status": "progress",
            "assigned": true,
            "projectId": "it",
            "desc": "Firewall Configuration task for project It"
        },
        {
            "id": "data_encryption",
            "name": "Data Encryption",
            "status": "idle",
            "assigned": true,
            "projectId": "it",
            "desc": "Data Encryption task for project It"
        },
        {
            "id": "service_monitoring",
            "name": "Service Monitoring",
            "status": "done",
            "assigned": false,
            "projectId": "it",
            "desc": "Service Monitoring task for project It"
        },
        {
            "id": "vendor_management",
            "name": "Vendor Management",
            "status": "progress",
            "assigned": true,
            "projectId": "it",
            "desc": "Vendor Management task for project It"
        },
        {
            "id": "issue_escalation",
            "name": "Issue Escalation",
            "status": "warning",
            "assigned": false,
            "projectId": "it",
            "desc": "Issue Escalation task for project It"
        },
        {
            "id": "license_renewal",
            "name": "License Renewal",
            "status": "progress",
            "assigned": false,
            "projectId": "it",
            "desc": "License Renewal task for project It"
        }
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
    reports: [
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "service_monitoring",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-30T01:41:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "vendor_management",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-29T02:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "service_monitoring",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-02T19:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "backup_planning",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-04T06:06:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "ui_enhancement",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-06T13:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "issue_escalation",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-01T17:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "code_review",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-25T21:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "meeting_preparation",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-02T21:57:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "firewall_configuration",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-30T22:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "requirement_analysis",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-14T02:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "ui_enhancement",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-21T06:05:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "issue_escalation",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-01T10:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "legal_research",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-13T09:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "security_audit",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-15T22:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "integration_tests",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-12T11:29:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "license_renewal",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-06T23:13:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "firewall_configuration",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-26T04:39:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "unit_tests",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-12T23:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "system_upgrade",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-24T13:05:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "database_migration",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-03T06:40:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "load_testing",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-07T14:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "policy_drafting",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-20T00:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "system_upgrade",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-03T12:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "api_development",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-23T15:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "api_development",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-03T09:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "firewall_configuration",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-16T15:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "unit_tests",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-04T11:18:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "user_interviews",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-28T01:16:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "contract_review",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-29T04:37:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "load_testing",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-10T16:29:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "database_migration",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-01T22:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "ui_enhancement",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-14T14:58:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "user_interviews",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-02T11:14:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "integration_tests",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-13T08:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "ui_enhancement",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-09T12:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "requirement_analysis",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-10T04:30:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "backup_planning",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-16T23:39:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "ui_enhancement",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-26T16:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "penetration_testing",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-24T01:34:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "database_migration",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-28T12:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "penetration_testing",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-16T16:23:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "vendor_management",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-24T00:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "vendor_management",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-21T21:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "policy_drafting",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-21T09:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "refactoring",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-15T21:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "design_mockups",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-15T06:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "issue_escalation",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-30T14:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "contract_review",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-07T06:05:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "design_mockups",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-20T13:32:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "issue_escalation",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-09T19:27:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "issue_escalation",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-14T20:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "firewall_configuration",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-26T15:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "user_interviews",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-03T07:37:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "requirement_analysis",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-09T22:47:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "data_encryption",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-14T14:17:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "compliance_check",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-07T22:47:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "database_migration",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-07T18:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "service_monitoring",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-09T02:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "load_testing",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-01T15:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "firewall_configuration",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-30T16:14:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "api_development",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-30T19:26:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "ui_enhancement",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-21T15:06:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "data_encryption",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-26T14:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "code_review",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-26T10:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "service_monitoring",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-08T06:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "documentation",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-13T00:52:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "system_upgrade",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-01T12:20:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "legal_research",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-02T08:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "code_review",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-06T02:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "integration_tests",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-02T04:16:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "issue_escalation",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-15T22:12:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "system_upgrade",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-17T09:10:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "requirement_analysis",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-18T19:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "api_development",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-28T15:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "service_monitoring",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-08T11:59:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "firewall_configuration",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-27T16:26:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "issue_escalation",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-26T23:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "compliance_check",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-20T09:50:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "ui_enhancement",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-10T06:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "refactoring",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-03T07:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "policy_drafting",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-05T00:50:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "backup_planning",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-28T05:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "vendor_management",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-10T09:58:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "integration_tests",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-27T01:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "system_upgrade",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-09T23:30:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "performance_tuning",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-16T08:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "legal_research",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-16T17:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "issue_escalation",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-18T10:29:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "performance_tuning",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-01T23:46:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "ui_enhancement",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-30T03:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "load_testing",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-18T22:53:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "code_review",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-30T23:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "deployment",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-25T02:39:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "vendor_management",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-05T08:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "database_migration",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-16T01:57:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "documentation",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-04T16:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "performance_tuning",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-19T19:31:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "compliance_check",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-19T14:50:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "api_development",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-23T05:20:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "deployment",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-15T16:31:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "performance_tuning",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-24T17:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "legal_research",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-08T08:10:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "deployment",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-09T21:55:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "api_development",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-20T01:44:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "ui_enhancement",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-16T17:13:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "security_audit",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-15T14:46:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "requirement_analysis",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-17T18:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "requirement_analysis",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-05T17:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "meeting_preparation",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-07T00:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "compliance_check",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-23T00:15:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "meeting_preparation",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-24T09:26:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "contract_review",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-15T20:17:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "code_review",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-16T08:39:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "documentation",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-29T12:57:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "contract_review",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-01T19:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "legal_research",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-04T07:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "firewall_configuration",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-11T03:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "user_interviews",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-16T16:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "firewall_configuration",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-01T20:15:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "code_review",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-21T13:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "unit_tests",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-04T07:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "license_renewal",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-22T00:49:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "integration_tests",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-07T13:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "code_review",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-15T22:52:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "license_renewal",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-18T02:32:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "legal_research",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-13T11:15:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "refactoring",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-18T11:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "backup_planning",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-04T15:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "deployment",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-07T14:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "security_audit",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-17T00:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "ui_enhancement",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-24T05:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "penetration_testing",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-21T08:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "requirement_analysis",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-24T08:06:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "integration_tests",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-24T05:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "contract_review",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-13T18:49:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "vendor_management",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-06T02:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "security_audit",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-22T23:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "backup_planning",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-12T03:53:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "unit_tests",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-03T19:55:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "bug_fixing",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-14T21:29:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "service_monitoring",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-04T01:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "documentation",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-02T12:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "contract_review",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-11T18:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "refactoring",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-06T20:57:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "bug_fixing",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-17T08:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "penetration_testing",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-27T17:55:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "code_review",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-29T14:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "contract_review",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-30T04:48:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "vendor_management",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-19T02:52:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "integration_tests",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-23T17:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "requirement_analysis",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-05T18:52:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "firewall_configuration",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-10T13:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "service_monitoring",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-10T03:14:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "database_migration",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-02T02:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "system_upgrade",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-15T04:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "system_upgrade",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-04T00:24:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "code_review",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-07T08:45:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "issue_escalation",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-13T15:18:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "data_encryption",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-23T07:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "code_review",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-10T15:18:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "requirement_analysis",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-06T00:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "bug_fixing",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-21T21:54:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "bug_fixing",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-29T08:58:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "vendor_management",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-13T00:23:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "backup_planning",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-29T02:54:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "load_testing",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-14T15:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "ui_enhancement",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-23T22:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "vendor_management",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-21T17:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "system_upgrade",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-24T08:32:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "vendor_management",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-06T10:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "user_interviews",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-10T06:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "meeting_preparation",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-26T15:06:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "ui_enhancement",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-20T19:59:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "policy_drafting",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-02T17:53:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "deployment",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-29T08:51:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "refactoring",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-04T21:41:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "issue_escalation",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-01T11:16:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "ui_enhancement",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-02T06:16:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "integration_tests",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-11T18:13:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "deployment",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-08T06:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "api_development",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-21T11:32:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "contract_review",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-12T11:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "database_migration",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-05T23:49:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "refactoring",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-02T01:55:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "compliance_check",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-09T20:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "integration_tests",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-07T00:30:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "requirement_analysis",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-17T01:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "data_encryption",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-21T23:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "data_encryption",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-24T19:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "backup_planning",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-21T17:34:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "performance_tuning",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-25T08:54:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "ui_enhancement",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-08T06:19:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "code_review",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-24T16:07:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "data_encryption",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-28T06:57:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "design_mockups",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-23T09:25:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "design_mockups",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-04T15:20:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "integration_tests",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-17T09:46:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "backup_planning",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-12T09:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "firewall_configuration",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-04T21:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "license_renewal",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-28T11:40:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "system_upgrade",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-16T07:13:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "system_upgrade",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-20T19:29:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "meeting_preparation",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-20T21:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "issue_escalation",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-01T17:45:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "bug_fixing",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-24T23:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "ui_enhancement",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-10T21:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "firewall_configuration",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-26T05:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "integration_tests",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-17T20:37:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "design_mockups",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-06T07:18:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "unit_tests",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-05T14:41:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "deployment",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-12T02:40:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "user_interviews",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-28T22:59:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "api_development",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-25T14:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "design_mockups",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-11T08:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "user_interviews",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-13T09:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "policy_drafting",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-11T09:47:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "issue_escalation",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-26T11:58:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "code_review",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-24T10:18:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "design_mockups",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-19T20:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "license_renewal",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-16T13:20:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "license_renewal",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-02T12:51:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "unit_tests",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-18T01:59:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "ui_enhancement",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-09T14:42:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "database_migration",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-20T20:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "refactoring",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-25T15:34:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "database_migration",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-05T19:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "security_audit",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-06T00:34:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "contract_review",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-06T19:04:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "penetration_testing",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-24T03:36:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "contract_review",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-25T05:02:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "backup_planning",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-01T11:59:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "system_upgrade",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-10T23:58:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "security_audit",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-15T13:27:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "refactoring",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-21T12:33:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "service_monitoring",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-15T15:11:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "service_monitoring",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-02T20:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "bug_fixing",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-23T06:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "design_mockups",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-20T00:27:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "license_renewal",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-18T13:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "penetration_testing",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-17T01:56:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "deployment",
            "from": "done",
            "to": "warning",
            "datetime": "2024-09-18T09:15:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "documentation",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-30T21:35:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "api_development",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-04T04:13:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "design_mockups",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-10T15:12:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "issue_escalation",
            "from": "idle",
            "to": "progress",
            "datetime": "2024-09-08T02:28:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "deployment",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-19T11:37:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "ui_enhancement",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-11T20:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "issue_escalation",
            "from": "progress",
            "to": "warning",
            "datetime": "2024-09-10T09:23:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "bug_fixing",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-12T04:00:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "issue_escalation",
            "from": "warning",
            "to": "done",
            "datetime": "2024-09-02T19:34:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "deployment",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-02T02:08:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        {
            "name": "John",
            "surname": "Smith",
            "taskId": "code_review",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-05T02:14:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "deployment",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-17T18:26:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "deployment",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-20T18:38:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "security_audit",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-07T12:22:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "code_review",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-10T04:31:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "code_review",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-19T06:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "security_audit",
            "from": "idle",
            "to": "done",
            "datetime": "2024-09-10T15:15:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "database_migration",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-09T06:21:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "name": "Sophia",
            "surname": "Hall",
            "taskId": "ui_enhancement",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-10T21:48:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "unit_tests",
            "from": "warning",
            "to": "idle",
            "datetime": "2024-09-13T10:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            "name": "Bob",
            "surname": "Johnson",
            "taskId": "contract_review",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-24T00:30:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            "name": "Emily",
            "surname": "Clark",
            "taskId": "data_encryption",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-10T04:32:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "deployment",
            "from": "progress",
            "to": "idle",
            "datetime": "2024-09-16T13:47:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
            "name": "Michael",
            "surname": "Lee",
            "taskId": "unit_tests",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-06T18:03:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        {
            "name": "David",
            "surname": "Adams",
            "taskId": "legal_research",
            "from": "done",
            "to": "idle",
            "datetime": "2024-09-25T03:09:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "design_mockups",
            "from": "idle",
            "to": "warning",
            "datetime": "2024-09-27T09:31:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        {
            "name": "Jane",
            "surname": "Doe",
            "taskId": "integration_tests",
            "from": "warning",
            "to": "progress",
            "datetime": "2024-09-16T11:47:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "refactoring",
            "from": "done",
            "to": "progress",
            "datetime": "2024-09-20T14:53:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            "name": "Alice",
            "surname": "Brown",
            "taskId": "load_testing",
            "from": "progress",
            "to": "done",
            "datetime": "2024-09-07T08:30:00",
            "title": "There comes the report title",
            "desc": "There comes the report desc",
            "imageUrl": "https://randomuser.me/api/portraits/women/19.jpg"
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
        return dashboard.all_tasks.filter((task) => task.assigned);
    }
    async getProjects() {
        return dashboard.projects;
    }
    async getTask(id) {
        return dashboard.all_tasks.find((task) => task.id === id);
    }
    async getProject(id) {
        return dashboard.projects.find((project) => project.id === id);
    }
    async getProjectTasks(id) {
        return dashboard.all_tasks.filter((task) => task.projectId === id);
    }
    async getReports(taskId) {
        const arr = dashboard.reports.filter((report) => report.taskId === taskId).sort((report1, report2) => - ((new Date(report1.datetime)) - (new Date(report2.datetime))));
        arr.forEach((report) => report.datetime = (new Date(report.datetime)).toUTCString());
        return arr;
    }
}
const apiService = new ApiService();
