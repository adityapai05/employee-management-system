const employees = [
  {
    "id": 1,
    "firstName": "Aditya",
    "lastName": "Pai",
    "email": "adi@eg.com",
    "password": "p123",
    "role": "Developer",
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Develop New Feature",
        "description": "Build the new user authentication feature for the app.",
        "date": "2024-11-10",
        "category": "Development",
        "priority": "High"
      },
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Code Review",
        "description": "Review the code of the new login page functionality.",
        "date": "2024-11-12",
        "category": "Code Review",
        "priority": "Medium"
      },
      {
        "isActive": false,
        "isNew": false,
        "isCompleted": true,
        "isFailed": false,
        "title": "Fix Bugs",
        "description": "Fix critical bugs reported during testing.",
        "date": "2024-11-05",
        "category": "Development",
        "priority": "Low"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Akshat",
    "lastName": "Gohil",
    "email": "akshat.gohil@example.com",
    "password": "password456",
    "role": "Manager",
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Team Coordination",
        "description": "Coordinate with the team to discuss the next steps for the new project.",
        "date": "2024-11-14",
        "category": "Management",
        "priority": "High"
      },
      {
        "isActive": true,
        "isNew": false,
        "isCompleted": false,
        "isFailed": false,
        "title": "Client Call",
        "description": "Follow up with the client regarding the feature requests.",
        "date": "2024-11-08",
        "category": "Communication",
        "priority": "Medium"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Anuj",
    "lastName": "Yadav",
    "email": "anuj.yadav@example.com",
    "password": "password789",
    "role": "Tester",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Test Login Page",
        "description": "Perform testing on the newly developed login page for functionality and bugs.",
        "date": "2024-11-13",
        "category": "Testing",
        "priority": "High"
      },
      {
        "isActive": false,
        "isNew": false,
        "isCompleted": true,
        "isFailed": false,
        "title": "Regression Testing",
        "description": "Conduct regression testing on the app after the new features were integrated.",
        "date": "2024-11-06",
        "category": "Testing",
        "priority": "Medium"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Parth",
    "lastName": "Patel",
    "email": "parth.patel@example.com",
    "password": "password101",
    "role": "Support",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "isActive": false,
        "isNew": false,
        "isCompleted": false,
        "isFailed": true,
        "title": "Resolve Technical Issues",
        "description": "Assist the customer in resolving issues related to the recent update of the app.",
        "date": "2024-11-05",
        "category": "Customer Support",
        "priority": "High"
      },
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Provide User Assistance",
        "description": "Provide assistance to users experiencing login issues.",
        "date": "2024-11-09",
        "category": "Support",
        "priority": "Medium"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vedant",
    "lastName": "Rana",
    "email": "vedant.rana@example.com",
    "password": "password202",
    "role": "Designer",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "isActive": true,
        "isNew": true,
        "isCompleted": false,
        "isFailed": false,
        "title": "Redesign Website Layout",
        "description": "Redesign the homepage layout based on new brand guidelines.",
        "date": "2024-11-11",
        "category": "Design",
        "priority": "High"
      },
      {
        "isActive": false,
        "isNew": false,
        "isCompleted": true,
        "isFailed": false,
        "title": "Update UI Elements",
        "description": "Update UI components to improve accessibility and user experience.",
        "date": "2024-11-04",
        "category": "Design",
        "priority": "Medium"
      }
    ]
  }
]

const admins = [
  {
    id: 1,
    firstName: "Demo",
    lastName: "D",
    email: "demo@eg.com",
    password: "p123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admins', JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admins = JSON.parse(localStorage.getItem('admins'));

  return { employees, admins };
};
