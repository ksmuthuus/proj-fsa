export const defaultState = {
  users: [{
    id: "U1",
    name: "MyUser"
  }],
  groups: [{
    id: "G1",
    owner: "U1",
    name: "To Do"
  }],
  tasks: [{
    id: "T1",
    name: "Learn React",
    group: "G1",
    owner: "U1",
    isComplete: false
  }],
  comments: [{
    id: "C1",
    owner: "U1",
    task: "T1",
    content: "Awesome work!"
  }]
}