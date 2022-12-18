import{p as e}from"./index.8c7fcc53.js";const t=e`
  query checklists {
    checklists {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
`,d=e`
  query checklist($id: String!) {
    checklist(id: $id) {
      id
      name
      description
      userId
      sharedUserIds
      categories {
        name
        list {
          check
          name
        }
      }
      updatedAt
      createdAt
    }
  }
`,c=e`
  query checklistsByUserId {
    checklistsByUserId {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
`,a=e`
  query sharedChecklists {
    sharedChecklists {
      id
      name
      userId
      sharedUserIds
      description
      updatedAt
      createdAt
      categories {
        name
        list {
          check
          name
        }
      }
    }
  }
  `;export{t as C,a as S,c as a,d as b};
