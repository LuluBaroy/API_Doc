define({ "api": [
  {
    "type": "get",
    "url": "/api/sauces/:id",
    "title": "Read one",
    "name": "ReadOne",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sauce",
            "description": "<p>JSON containing sauce information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n    \"usersLiked\": [],\n    \"usersDisliked\": [],\n    \"_id\": \"5f2ea4c756e1e0f4701fb238\",\n    \"name\": \"Mayo\",\n    \"manufacturer\": \"Heinz\",\n    \"description\": \"123\",\n    \"mainPepper\": \"none\",\n    \"heat\": 1,\n    \"userId\": \"5f2d13f47f5d757e20cfa43b\",\n    \"likes\": 0,\n    \"dislikes\": 0,\n    \"imageUrl\": \"http://localhost:3000/images/5746504216.png\",\n    \"__v\": 0,\n    \"_links\": {\n        \"self\": {\n            \"method\": \"GET\",\n            \"href\": \"http://localhost:3000/api/sauces\"\n        },\n        \"create\": {\n            \"method\": \"POST\",\n            \"href\": \"http://localhost:3000/api/sauces\"\n        },\n        \"update\": {\n            \"method\": \"PUT\",\n            \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238\"\n        },\n        \"delete\": {\n            \"method\": \"DELETE\",\n            \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238\"\n        },\n        \"like\": {\n            \"method\": \"POST\",\n            \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238/like\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if sauce doesn't exist",
          "content": "\nHTTP1.1/  404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "post",
    "url": "/api/sauces",
    "title": "Create",
    "name": "create",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sauce name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Sauce Manufacturer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Sauce description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainPepper",
            "description": "<p>Sauce main pepper</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Sauce image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "heat",
            "description": "<p>Sauce heat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message for new sauce creating</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 201 Created\n{\n \"message\":\"New Sauce Registered !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if user isn't authenticated",
          "content": "\nHTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "delete",
    "url": "/api/sauces/:id",
    "title": "Delete",
    "name": "delete",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message Sauce deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\nmessage: 'Sauce deleted !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if user isn't authenticated",
          "content": "\nHTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "post",
    "url": "/api/sauces/:id/like",
    "title": "Like/Dislike",
    "name": "like",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Like or Dislike success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n'message': 'Like added for that sauce !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if user isn't authenticated",
          "content": "\nHTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "get",
    "url": "/api/sauces",
    "title": "Read all",
    "name": "readAll",
    "group": "Sauces",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sauces",
            "description": "<p>JSON containing all sauces</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n\n[\n    {\n        \"usersLiked\": [],\n        \"usersDisliked\": [],\n        \"_id\": \"5f2ea4c756e1e0f4701fb238\",\n        \"name\": \"Mayo\",\n        \"manufacturer\": \"Heinz\",\n        \"description\": \"123\",\n        \"mainPepper\": \"none\",\n        \"heat\": 1,\n        \"userId\": \"5f2d13f47f5d757e20cfa43b\",\n        \"likes\": 0,\n        \"dislikes\": 0,\n        \"imageUrl\": \"http://localhost:3000/images/5746504216.png\",\n        \"__v\": 0,\n        \"_links\": {\n            \"self\": {\n                \"method\": \"GET\",\n                \"href\": \"http://localhost:3000/api/sauces\"\n            },\n            \"create\": {\n                \"method\": \"POST\",\n                \"href\": \"http://localhost:3000/api/sauces\"\n            },\n            \"update\": {\n                \"method\": \"PUT\",\n                \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238\"\n            },\n            \"delete\": {\n                \"method\": \"DELETE\",\n                \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238\"\n            },\n            \"like\": {\n                \"method\": \"POST\",\n                \"href\": \"http://localhost:3000/api/sauces/5f2ea4c756e1e0f4701fb238/like\"\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if user isn't authenticated",
          "content": "\nHTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "put",
    "url": "/api/sauces/:id",
    "title": "Update",
    "name": "update",
    "group": "Sauces",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>sauce ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message Sauce modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\nmessage: 'Sauce modified !'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response if user isn't authenticated",
          "content": "\nHTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/sauces.js",
    "groupTitle": "Sauces"
  },
  {
    "type": "delete",
    "url": "/api/auth/:id",
    "title": "Delete",
    "name": "delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message User deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n    \"message\": \"User deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user can't be authenticated",
          "content": "HTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/:id/exports",
    "title": "Export",
    "name": "export",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Downloadable file containing user information</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user information can't be found",
          "content": "HTTP1.1/  404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Log in",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(min 8 chars)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId generated by mongoose</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token generated by JSONWebToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n \"userId\":\"5f1233fbffe8d47d105b1463\",\n \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjEyMzNmYmZmZThkNDdkMTA1YjE0NjMiLCJpYXQiOjE1OTUwNDAwMTUsImV4cCI6MTU5NTEyNjQxNX0.IBIGV-LNB8gp9gfT4HlJgUaRbvVOkiJTgvyvosAKiIk\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user can't be authenticated",
          "content": "HTTP1.1/  401 Unauthorized\n{\n \"error\": \"Wrong password !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/auth/:id",
    "title": "Read",
    "name": "readOne",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SHA1",
            "description": "<p>user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n    \"_id\": \"5f1ee7667a4701f8084c33f4\",\n    \"email\": \"114605e63b127e2c37b0257a9d7601f018080ca5\",\n    \"password\": \"$2a$10$iP6uQFCEnrPhZV75G4Q9C.nqg0ksEgRwmPft.aq4RMrGroNXUUbW2\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user information can't be found",
          "content": "HTTP1.1/  404 Not Found\n{\n \"error\": \"Wrong password !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/auth/:id",
    "title": "Report",
    "name": "report",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>userId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ItemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message New report has been created, our team will examine it as soon as possible !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 202 Accepted\n{\n    \"message\": \"New report has been created, our team will examine it as soon as possible !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if itemId has already been reported",
          "content": "HTTP1.1/  401 Unauthorized\n{\n    \"error\": \"A report has already been sent for this item !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "Sign up",
    "name": "signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(min 8 chars)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of new user creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 201 Created\n{\n \"message\": \"New user has been created !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user's trying to sign up with wrong parameters",
          "content": "\nHTTP1.1/  422 Unprocessable Entity\n{\n \"errors\":\n [\n  {\n\t\"value\": \"12345\",\n\t\"msg\": \"Email and / or password incorrect. Please try with a valid mail and / or password with at least 8 chars\",\n\t\"param\": \"password\",\n\t\"location\": \"body\"\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/auth/:id",
    "title": "Update",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>userId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>OR Password OR Email AND Password - Each are possible</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message User modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP1.1/ 200 OK\n{\n    \"message\": \"User modified !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response if user can't be authenticated",
          "content": "HTTP1.1/  400 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  }
] });
