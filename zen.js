// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


db.users.insertMany([
    
{
    "name":"gana",
    "batch":35,
    "course":"full stack web development",
    "month" :"october"
},
{
    "name":"ishu",
    "batch":35,
    "course":"full stack web development",
    "month" :"october"
},
{
    "name":"varun",
    "batch":35,
    "course":"full stack web development",
    "month" :"october"
},
{
    "name":"ashok",
    "batch":36,
    "course":"full stack web development",
    "month" :"november"
}
])

db.codekata.insertMany([
    {
        "module":"module 1",
        "no_of_questions":10,
        "solved":[{"gana":7},{"ishu":5},{"varun":7},{"ashok":3}],
        "unsolved":[{"gana":3},{"ishu":5},{"varun":3},{"ashok":7}]
    },
    {
        "module":"module 2",
        "no_of_questions":10,
        "solved":[{"gana":3},{"ishu":5},{"varun":7},{"ashok":0}],
        "unsolved":[{"gana":7},{"ishu":5},{"varun":3},{"ashok":10}] 
    },
    {
        "module":"module 3",
        "no_of_questions":10,
        "solved":[{"gana":0},{"ishu":0},{"varun":0},{"ashok":0}],
        "unsolved":[{"gana":10},{"ishu":10},{"varun":10},{"ashok":10}]
    }
])

db.attendance.insertMany([
    {
        "name":"gana",
        "classes_conducted":25,
        "classes_attended":23,
        "classes_absent":2,
        "month" :"october"
    },
    {
        "name":"ishu",
        "classes_conducted":25,
        "classes_attended":20,
        "classes_absent":5,
        "month" :"october"
    },
    {
        "name":"varun",
        "classes_conducted":25,
        "classes_attended":19,
        "classes_absent":6,
        "month" :"october"
    },
    {
        "name":"ashok",
        "classes_conducted":25,
        "classes_attended":19,
        "classes_absent":6,
        "month" :"november"
    }
])

db.topics.insertMany([
    {
        "topic_1":"html",
        "month":"october"
    },
    {
        "topic_2":"css",
        "month":"october"
    },
    {
        "topic_3":"javascript",
        "month":"december"
    },
    {
        "topic_4":"react",
        "month":"january"
    }
])

db.tasks.insertMany([
{
    "task_no":1,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}],
},
{
    "task_no":2,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":3,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":4,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":5,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":6,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":7,
    "month":"october",
    "task_submitted":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":8,
    "month":"october",
    "task_submitted":[{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":9,
    "month":"october",
    "task_submitted":[{"name":"ishu"},{"name":"varun"}]
},
{
    "task_no":10,
    "month":"october",
    "task_submitted":[{"name":"ishu"}]
},
{
    "task_no":11,
    "month":"november",
    "task_submitted":[{"name":"ashok"}]
}
])

db.company_drives.insertMany([
    {
        "company":"google",
        "date":"14 oct-2020 ",
        "students_attended":[{"name":"gana"},{"name":"ishu"},{"name":"varun"}]
    },
    {
        "company":"ibm",
        "date":"15 oct-2020 ",
        "students_attended":[{"name":"gana"},{"name":"ishu"}]
    },
    {
        "company":"coindx",
        "date":"16 oct-2020 ",
        "students_attended":[{"name":"varun"},{"name":"ishu"}]
    },
    {
        "company":"guvi",
        "date":"17 oct-2020 ",
        "students_attended":[{"name":"ishu"}]
    },
])

db.mentor.insertMany([
    {
        "mentor_name":"ramya",
        "batches":[35,36],
        "mentee_count":45
    },
    {
        "mentor_name":"lokesh",
        "batches":[34,35],
        "mentee_count":45
    },
    {
        "mentor_name":"kumar",
        "batches":[36,37],
        "mentee_count":45
    },
    {
        "mentor_name":"raja",
        "batches":[30],
        "mentee_count":10
    }
])



// Find all the topics and tasks which are thought in the month of October

 db.topics.find({"month":"october"});

{ "_id" : ObjectId("632136c2165564551434c6da"), "topic_1" : "html", "month" : "october" }
{ "_id" : ObjectId("632136c2165564551434c6db"), "topic_2" : "css", "month" : "october" }

db.tasks.find({ "month":"october"});
{ "_id" : ObjectId("632136d0165564551434c6de"), "task_no" : 1, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6df"), "task_no" : 2, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e0"), "task_no" : 3, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e1"), "task_no" : 4, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e2"), "task_no" : 5, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e3"), "task_no" : 6, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e4"), "task_no" : 7, "month" : "october", "task_submitted" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e5"), "task_no" : 8, "month" : "october", "task_submitted" : [ { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e6"), "task_no" : 9, "month" : "october", "task_submitted" : [ { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136d0165564551434c6e7"), "task_no" : 10, "month" : "october", "task_submitted" : [ { "name" : "ishu" } ] }


// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({ "date":{$gt:"15 oct-2020 ",$lt:"30 oct-2020"}})

{ "_id" : ObjectId("632136db165564551434c6eb"), "company" : "coindx", "date" : "16 oct-2020 ", "students_attended" : [ { "name" : "varun" }, { "name" : "ishu" } ] }
{ "_id" : ObjectId("632136db165564551434c6ec"), "company" : "guvi", "date" : "17 oct-2020 ", "students_attended" : [ { "name" : "ishu" } ] }

// Find all the company drives and students who are appeared for the placement.

db.company_drives.find({},{students_attended:1})

{ "_id" : ObjectId("632136db165564551434c6e9"), "students_attended" : [ { "name" : "gana" }, { "name" : "ishu" }, { "name" : "varun" } ] }
{ "_id" : ObjectId("632136db165564551434c6ea"), "students_attended" : [ { "name" : "gana" }, { "name" : "ishu" } ] }
{ "_id" : ObjectId("632136db165564551434c6eb"), "students_attended" : [ { "name" : "varun" }, { "name" : "ishu" } ] }
{ "_id" : ObjectId("632136db165564551434c6ec"), "students_attended" : [ { "name" : "ishu" } ] }



// Find the number of problems solved by the user in codekata

db.codekata.find({},{solved:1})

{ "_id" : ObjectId("63216576165564551434c6f1"), "solved" : [ { "gana" : 7 }, { "ishu" : 5 }, { "varun" : 7 }, { "ashok" : 3 } ] }
{ "_id" : ObjectId("63216576165564551434c6f2"), "solved" : [ { "gana" : 3 }, { "ishu" : 5 }, { "varun" : 7 }, { "ashok" : 0 } ] }
{ "_id" : ObjectId("63216576165564551434c6f3"), "solved" : [ { "gana" : 0 }, { "ishu" : 0 }, { "varun" : 0 }, { "ashok" : 0 } ] }


// Find all the mentors with who has the mentee's count more than 15

db.mentor.find({ "mentee_count":{$gt:15}})

{ "_id" : ObjectId("632136e5165564551434c6ed"), "mentor_name" : "ramya", "batches" : [ 35, 36 ], "mentee_count" : 45 }
{ "_id" : ObjectId("632136e5165564551434c6ee"), "mentor_name" : "lokesh", "batches" : [ 34, 35 ], "mentee_count" : 45 }
{ "_id" : ObjectId("632136e5165564551434c6ef"), "mentor_name" : "kumar", "batches" : [ 36, 37 ], "mentee_count" : 45 }



// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020


db.attendance.find({},{"classes_absent":1,"name":1, "month" :"october"})

{ "_id" : ObjectId("632136b2165564551434c6d6"), "name" : "gana", "classes_absent" : 2, "month" : "october" }
{ "_id" : ObjectId("632136b2165564551434c6d7"), "name" : "ishu", "classes_absent" : 5, "month" : "october" }
{ "_id" : ObjectId("632136b2165564551434c6d8"), "name" : "varun", "classes_absent" : 6, "month" : "october" }
{ "_id" : ObjectId("632136b2165564551434c6d9"), "name" : "ashok", "classes_absent" : 6, "month" : "october" }

