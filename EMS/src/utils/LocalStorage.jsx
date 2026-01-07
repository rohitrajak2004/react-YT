const employee =[
  {
    "id": 1,
    "email": "rahul.kumar@company.com",
    "pass": "Rahul@123",
    "tasks": [
      {
        "title": "Design Login Page",
        "description": "Create UI for login page using Tailwind",
        "date": "2026-01-05",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in navbar",
        "date": "2026-01-03",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Integrate login API",
        "date": "2026-01-02",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "priya.sharma@company.com",
    "pass": "Priya@456",
    "tasks": [
      {
        "title": "Create Dashboard UI",
        "description": "Build dashboard cards",
        "date": "2026-01-04",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Test Cases",
        "description": "Add unit tests for components",
        "date": "2026-01-01",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize Images",
        "description": "Reduce image sizes for performance",
        "date": "2025-12-30",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "amit.verma@company.com",
    "pass": "Amit@789",
    "tasks": [
      {
        "title": "Setup Redux Store",
        "description": "Configure Redux Toolkit store",
        "date": "2026-01-06",
        "category": "State Management",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Form Validation",
        "description": "Add validation using React Hook Form",
        "date": "2026-01-03",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy App",
        "description": "Deploy project on Vercel",
        "date": "2026-01-01",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "neha.singh@company.com",
    "pass": "Neha@321",
    "tasks": [
      {
        "title": "Create User Table",
        "description": "Design employee table UI",
        "date": "2026-01-05",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Schema",
        "description": "Design MongoDB schema",
        "date": "2026-01-02",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Auth Middleware",
        "description": "Create JWT auth middleware",
        "date": "2025-12-31",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "rohit.patel@company.com",
    "pass": "Rohit@654",
    "tasks": [
      {
        "title": "Build Profile Page",
        "description": "Create employee profile page",
        "date": "2026-01-06",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Connect Backend",
        "description": "Connect frontend with backend APIs",
        "date": "2026-01-03",
        "category": "Full Stack",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Handle Errors",
        "description": "Implement global error handling",
        "date": "2026-01-01",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


const admin = [
  {
    "id": 101,
    "email": "admin1@company.com",
    "pass": "Admin@123"
  },
  {
    "id": 102,
    "email": "admin2@company.com",
    "pass": "Admin@456"
  }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
  const employee = JSON.parse(localStorage.getItem('employee'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return(employee,admin)
}