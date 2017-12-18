define({ "api": [  {    "type": "get",    "url": "/domains/id/:id",    "title": "getDomainsByID",    "name": "getDomainsByID",    "group": "Domains",    "description": "<p>Gets a specific domain using the domain ID</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The id of the study</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID The ID of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage",            "description": "<p>The domain's stage</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage_ismoot",            "description": "<p>.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"id\" : 34,\n    \"name\" : \"PROMPT\",\n    \"stage\" : 500,\n    \"stage_ismoot\" : 88\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request.</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get domains for study\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/domains.js",    "groupTitle": "Domains"  },  {    "type": "get",    "url": "/domains/study/:study",    "title": "getDomainsByStudy",    "name": "getDomainsByStudy",    "group": "Domains",    "description": "<p>Gets all of the available domains for a study</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID The ID of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage",            "description": "<p>The domain's stage</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage_ismoot",            "description": ""          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"id\" : 32,\n    \"name\" : \"Trivia\",\n    \"stage\" : 100,\n    \"stage_ismoot\" : 88\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request.</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get domains for study\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/domains.js",    "groupTitle": "Domains"  },  {    "type": "get",    "url": "/domains/study/:study/stage/:stage",    "title": "getDomainsExclude",    "name": "getDomainsExclude",    "group": "Domains",    "description": "<p>Get the domains for a study that do not have a particular stage.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "stage",            "description": "<p>The stage to be excluded</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID The ID of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The name of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage",            "description": "<p>The domain's stage</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "stage_ismoot",            "description": ""          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"id\" : 45,\n    \"name\" : \"2_MISSED_DAYS\"s,\n    \"stage\" : 500,\n    \"stage_ismoot\" : 88\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request.</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get domains for study\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/domains.js",    "groupTitle": "Domains"  },  {    "type": "delete",    "url": "/notifications/study/:study/:staffid",    "title": "deleteSiteForUser",    "name": "deleteSiteForUser",    "group": "Notifications",    "description": "<p>deletes the notifications for a user</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "staffid",            "description": "<p>The ID of the user</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Status of the request</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the status of the request</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n     \"status\" : \"Success\",\n     \"message\" : \"Notifications have been deleted for user\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "5xx": [          {            "group": "5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Status of the request</p>"          },          {            "group": "5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to delete entries\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/notifications.js",    "groupTitle": "Notifications"  },  {    "type": "get",    "url": "/notifications/all/study/:study/site/:site",    "title": "getActiveNotifications",    "name": "getActiveNotifications",    "group": "Notifications",    "description": "<p>Gets all of the active notifications for a study and site</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>The name of the site</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "staffid",            "description": "<p>The ID of the user</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>The name of the site</p>"          },          {            "group": "Success 200 Response",            "type": "Array",            "optional": false,            "field": "user",            "description": "<p>An array of users</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "user.firstname",            "description": "<p>The first name of the user</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "user.lastname",            "description": "<p>The last name of the use</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "[\n  {\n     \"staffid\": 321,\n     \"study\": 'STUDY-NAME',\n     \"site\": \"ALL\",\n     \"users\": [\n         {\n             \"firstname\": \"Jon\",\n             \"lastname\": \"Smith\"\n         }\n     ]\n },\n {\n     \"staffid\": 432,\n     \"study\": 'STUDY-NAME',\n     \"site\": \"USC\",\n     \"users\": [\n         {\n             \"firstname\": \"Tom\",\n             \"lastname\": \"Jones\"\n         }\n     ]\n },\n {\n     \"staffid\": 564,\n     \"study\": 'STUDY-NAME',\n     \"site\": \"ALL\",\n     \"users\": [\n         {\n             \"firstname\": \"Sara\",\n             \"lastname\": \"Brooks\"\n         }\n     ]\n }\n]",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Status of the request</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get domains for study\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/notifications.js",    "groupTitle": "Notifications"  },  {    "type": "get",    "url": "/notifications/all/study/:study/site/:site",    "title": "getAllNotificationsForStudyAndSite",    "name": "getAllNotificationsForStudyAndSite",    "group": "Notifications",    "description": "<p>Get all of the notifications for a study and site</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "site",            "description": "<p>The ID of the user</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "staffid",            "description": "<p>The ID of the user</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n     \"staffid\" : 114,\n}",          "type": "Json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Status of the request</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get Notifications\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/notifications.js",    "groupTitle": "Notifications"  },  {    "type": "get",    "url": "/notifications/study/:study/:staffid",    "title": "getStudySitesForUser",    "name": "getStudySitesForUser",    "group": "Notifications",    "description": "<p>Gets the notification information for a user</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "staffid",            "description": "<p>The ID of the user</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The ID of the notification</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "staffid",            "description": "<p>The ID of the user</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>The name of the site</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n     \"id\" : 6,\n     \"staffid\" : 53,\n     \"study\" : \"STUDY-NAME\",\n     \"site\" : \"SITENAME\"\n}",          "type": "Json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Status of the request</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get notifications\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/notifications.js",    "groupTitle": "Notifications"  },  {    "type": "post",    "url": "/participant/register",    "title": "enrollParticipant",    "name": "enrollParticipant",    "group": "Participants",    "description": "<p>Enrolls a participant.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "study_id",            "description": "<p>The ID of the study</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>The phone number of the participant</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "en-US",              "es-MX"            ],            "optional": false,            "field": "language",            "description": "<p>The language of the participant</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>The name of the site</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n    \"study_id\" : 666,\n    \"phone\" : \"1234567\",\n    \"language\" : \"en-US\",\n    \"study\" : \"STUDY-NAME\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the response</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"status\" : \"Success\",\n    \"message\" : \"Participant was enrolled\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx/5xx": [          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request</p>"          },          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the response</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to enroll Participant\"\n}",          "type": "json"        }      ]    },    "filename": "routes/participants.js",    "groupTitle": "Participants"  },  {    "type": "get",    "url": "/participants/participant/study/:study",    "title": "getParticipantsByStudy",    "name": "getParticipantsByStudy",    "group": "Participants",    "description": "<p>Gets all of the participants for a study.</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>THe name of the study</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The ID of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "study_id",            "description": "<p>The ID of the study</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>The phone number of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "active",            "description": "<p>Determines if participant is active</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "language",            "description": "<p>The language of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>The name of the site</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "entry_date",            "description": "<p>The date the participant was enrolled</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "entry_id",            "description": "<p>The ID of the user you enrolled the participant</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"id\" : 32,\n    \"study_id\" : \"C1235\",\n    \"study\" : \"STUDY\",\n    \"phone\" : \"1234567\",\n    \"active\" : 1,\n    \"validated\" : 1,\n    \"language\" : \"es-US\",\n    \"site\" : \"SITENAME\",\n    \"entry_date\" : \"2017-12-12 09:10:32\",\n    \"entry_id\" : 12\n}",          "type": "type"        }      ]    },    "error": {      "fields": {        "Error 4xx/5xx": [          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request</p>"          },          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the response</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to enroll Participant\"\n}",          "type": "json"        }      ]    },    "filename": "routes/participants.js",    "groupTitle": "Participants"  },  {    "type": "get",    "url": "/participants/reports/study/:study",    "title": "getParticipantsForReports",    "name": "getParticipantsForReports",    "group": "Participants",    "description": "<p>Get participant information for reports</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>The phone number of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "study_id",            "description": "<p>The ID of the study</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "site",            "description": "<p>THe name of the site</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>The ID of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "study",            "description": "<p>The name of the study</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "language",            "description": "<p>The participant's language</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "entry_date",            "description": "<p>The date the participant was enrolled</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"phone\" : \"1234567\",\n    \"study_id\" : \"CF2321\",\n    \"site\" : \"siteName\",\n    \"id\" : 34,\n    \"language\" : \"en-US\".\n    \"entry_date\" : \"2017-13-31 12:12:10\"\n\n}",          "type": "type"        }      ]    },    "filename": "routes/participants.js",    "groupTitle": "Participants"  },  {    "type": "put",    "url": "/participants/update",    "title": "updateParticipant",    "name": "updateParticipant",    "group": "Participants",    "description": "<p>Update a participants information</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Json",            "optional": false,            "field": "values",            "description": "<p>A json containing the fields to update and the values of the fields that will be updated</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "values.id",            "description": "<p>The ID of the participant</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "values.study_id",            "description": "<p>The ID of the study</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "values.phone",            "description": "<p>The phone number of the participant</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "values.active",            "description": "<p>Determines if participant is active</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "values.language",            "description": "<p>The language of the participant</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "values.site",            "description": "<p>The name of the site</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "values.entry_date",            "description": "<p>The date the participant was enrolled</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "values.entry_id",            "description": "<p>The ID of the user you enrolled the participant</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "fields",            "description": "<p>Optional A array of strings containing the fields that will be updated.</p>"          },          {            "group": "Parameter",            "type": "Json",            "optional": false,            "field": "where",            "description": "<p>Optional A json containing the conditions on which rows should be updated.</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n    \"values\" : {\n       \"site\" : 'newSite',\n       \"validated\" : 1\n    }, \n    \"fields\" : ['site', 'validated'],\n    \"where\" : {\n      \"participant_id\" : id\n    }\n}",          "type": "type"        }      ]    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "string",            "optional": false,            "field": "status",            "description": "<p>The status of the request</p>"          },          {            "group": "Success 200 Response",            "type": "string",            "optional": false,            "field": "message",            "description": "<p>A message about the request</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"status\" : \"Success\",\n    \"message\" : \"Participant fields were updated\"\n}",          "type": "type"        }      ]    },    "error": {      "fields": {        "Error 4xx/5xx": [          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request</p>"          },          {            "group": "Error 4xx/5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the response</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to update Participant\"\n}",          "type": "json"        }      ]    },    "filename": "routes/participants.js",    "groupTitle": "Participants"  },  {    "type": "post",    "url": "/assoc_responses/insert",    "title": "insertResponse",    "name": "insertResponse",    "group": "assocResponse",    "description": "<p>Inserts response information into table</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "outgoing_message_id",            "description": "<p>The message ID for the out going message.</p>"          },          {            "group": "Parameter",            "type": "NUmber",            "optional": false,            "field": "incoming_message_id",            "description": "<p>The message ID for the incoming message.</p>"          },          {            "group": "Parameter",            "type": "Number",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "valid",            "description": "<p>Determines if the response is valid</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n    \"outgoing_message_id\" : 245,\n    \"incoming_message_id\" : 232,\n    \"valid\" : 0\n    \n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request.</p>"          },          {            "group": "Success 200 Response",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>A message about the status.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"status\" : \"Success\"\n    \"message\" : \"Message was inserted\"\n}",          "type": "json"        }      ]    },    "filename": "routes/assocResponses.js",    "groupTitle": "assocResponse"  },  {    "type": "get",    "url": "/domains/selected/participant/:id",    "title": "GetSelectedDomains",    "name": "GetSelectedDomains",    "group": "selectedDomains",    "description": "<p>Gets all of the selected domains for a participant</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "participant_id",            "description": "<p>The ID of the participant</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200 Response": [          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID The ID of the selected domain</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "participant_id",            "description": "<p>The ID of the participant</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "domain_id",            "description": "<p>The ID of the domain</p>"          },          {            "group": "Success 200 Response",            "type": "Number",            "optional": false,            "field": "active",            "description": "<p>Determines if the selected domain is active</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n     \"id\" : 56,\n     \"participant_id\" : 740,\n     \"domain_id\" : 217,\n     \"active\" : 1\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 5xx": [          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>The status of the request.</p>"          },          {            "group": "Error 5xx",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Message about the error.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "{\n    \"status\" : \"ERROR\",\n    \"message\" : \"Failed to get domains for study\"\n}",          "type": "Json"        }      ]    },    "filename": "routes/domains.js",    "groupTitle": "selectedDomains"  }] });
