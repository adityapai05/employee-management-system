const employees = [
  {
    id: 1,
    firstName: "Aditya",
    lastName: "Pai",
    email: "adi@eg.com",
    password: "p123",
    taskCount: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "Complete Project Report",
        description: "Finish and submit the final project report.",
        date: "2024-11-10",
        category: "Documentation",
        priority: "High"
      },
      {
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false,
        title: "Team Meeting",
        description: "Discuss the project milestones with the team.",
        date: "2024-11-05",
        category: "Meetings",
        priority: "Medium"
      },
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "Update Documentation",
        description: "Revise and update project documentation.",
        date: "2024-11-12",
        category: "Documentation",
        priority: "Low"
      }
    ]
  },
  {
    id: 2,
    firstName: "Akshat",
    lastName: "Gohil",
    email: "akshat.gohil@example.com",
    password: "password456",
    taskCount: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "Design New Layout",
        description: "Create a new layout for the dashboard.",
        date: "2024-11-14",
        category: "Design",
        priority: "High"
      },
      {
        isActive: true,
        isNew: false,
        isCompleted: false,
        isFailed: false,
        title: "Client Feedback",
        description: "Review feedback from the client on recent designs.",
        date: "2024-11-08",
        category: "Review",
        priority: "Medium"
      }
    ]
  },
  {
    id: 3,
    firstName: "Anuj",
    lastName: "Yadav",
    email: "anuj.yadav@example.com",
    password: "password789",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false,
        title: "Backend API Optimization",
        description: "Optimize API endpoints for faster response.",
        date: "2024-11-06",
        category: "Development",
        priority: "Low"
      },
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "Database Schema Update",
        description: "Implement changes in the database schema.",
        date: "2024-11-13",
        category: "Database",
        priority: "Medium"
      }
    ]
  },
  {
    id: 4,
    firstName: "Parth",
    lastName: "Patel",
    email: "parth.patel@example.com",
    password: "password101",
    taskCount: {
      active: 1,
      new: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        isActive: false,
        isNew: false,
        isCompleted: false,
        isFailed: true,
        title: "Bug Fixing",
        description: "Resolve critical bugs in production.",
        date: "2024-11-05",
        category: "Development",
        priority: "High"
      },
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "System Testing",
        description: "Conduct system tests for recent updates.",
        date: "2024-11-09",
        category: "Testing",
        priority: "Medium"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vedant",
    lastName: "Rana",
    email: "vedant.rana@example.com",
    password: "password202",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false,
        title: "Create Presentation",
        description: "Prepare slides for the quarterly review.",
        date: "2024-11-11",
        category: "Presentation",
        priority: "Medium"
      },
      {
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false,
        title: "Team Feedback",
        description: "Gather feedback from team members.",
        date: "2024-11-04",
        category: "Feedback",
        priority: "Low"
      }
    ]
  }
];

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
