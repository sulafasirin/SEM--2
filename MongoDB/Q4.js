Question

Design a MongoDB employee database, using the data given below, in which each employee has a schema with eid (employee id), name (employee name), age (age of an employee), dname (department name by which the employee is working for), projects (projects that are allocated for employees). The projects field is specified in the basis of pname (project name), members (team members) and status (status of the project).

[Hint: The field projects are sub-documents. projects and members must be inserted as array type]



use employee
switched to db employee
Q1. Create a collection named employee and insert documents using the above given data.
employee> db.createCollection("employee")
{ ok: 1 }
employee> db.employee.insertMany([
...   {
...     eid: "E12345",
...     name: "Doe",
...     age: 40,
...     dname: "Engineering",
...     projects: [
...       { pname: "Website", members: ["Alice", "Bob", "John"], status: "In Progress" },
...       { pname: "Mobile App", members: ["Tom", "Jane", "Mike"], status: "Completed" }
...     ]
...   },
...   {
...     eid: "E98765",
...     name: "Johnson",
...     age: 32,
...     dname: "Finance",
...     projects: [
...       { pname: "Financial", members: ["William", "David"], status: "Completed" }
...     ]
...   },
...   {
...     eid: "E13579",
...     name: "Emily",
...     age: 28,
...     dname: "Human Resources",
...     projects: [
...       { pname: "Onboarding", members: ["Sophia", "Robert"], status: "In Progress" }
...     ]
...   },
...   {
...     eid: "E54321",
...     name: "Smith",
...     age: 37,
...     dname: "Sales",
...     projects: [
...       { pname: "Marketing", members: ["Jane", "Tom"], status: "In Progress" }
...     ]
...   },
...   {
...     eid: "E24680",
...     name: "William",
...     age: 30,
...     dname: "Human Resources",
...     projects: [
...       { pname: "Quality", members: ["Anna", "Sophia", "James"], status: "In Progress" }
...     ]
...   }
... ]);

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682d925a4855619ab56c4bd0'),
    '1': ObjectId('682d925a4855619ab56c4bd1'),
    '2': ObjectId('682d925a4855619ab56c4bd2'),
    '3': ObjectId('682d925a4855619ab56c4bd3'),
    '4': ObjectId('682d925a4855619ab56c4bd4')
  }

Q2. Add a new field named year, which is joining date of an employee, to every document with a value 2008.

1.employee> db.employee.updateMany({}, { $set: { year: 2008 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
Q3. Delete the field named age from every document.
employee> db.employee.updateMany({}, { $unset: { age: "" } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
Q4. Perform the following queries:
1. Update year to 1800 for an employee named 'William'.
 db.employee.updateOne({ name: "William" }, { $set: { year: 1800 } });
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

2. Find all unique department names (include only dname).
 db.employee.distinct("dname");
[ 'Engineering', 'Finance', 'Human Resources', 'Sales' ]

3. Find those employees that contain a letter ‘o’ anywhere in their name (include only _id and name).

 db.employee.find({ name: /o/i }, { _id: 1, name: 1 })
[
  { _id: ObjectId('682d925a4855619ab56c4bd0'), name: 'Doe' },
  { _id: ObjectId('682d925a4855619ab56c4bd1'), name: 'Johnson' }
]
4. Retrieve the employees who are currently working on 'In Progress' projects (include only name and dname).
  db.employee.find(
...   { "projects.status": "In Progress" },
...   { _id: 0, name: 1, dname: 1 }
... );
[
  { name: 'Doe', dname: 'Engineering' },
  { name: 'Emily', dname: 'Human Resources' },
  { name: 'Smith', dname: 'Sales' },
  { name: 'William', dname: 'Human Resources' }
]

5. Find all projects where the members include both ‘Tom’ and ‘Jane’, sorted by department name in descending order (include only department name, project name and members).
db.employee.aggregate([
...   { $unwind: "$projects" },
...   {
...     $match: {
...       "projects.members": { $all: ["Tom", "Jane"] }
...     }
...   },
...   {
...     $project: {
...       _id: 0,
...       dname: 1,
...       "project name": "$projects.pname",
...       members: "$projects.members"
...     }
...   },
...   { $sort: { dname: -1 } }
... ]);
[
  {
    dname: 'Sales',
    'project name': 'Marketing',
    members: [ 'Jane', 'Tom' ]
  },
  {
    dname: 'Engineering',
    'project name': 'Mobile App',
    members: [ 'Tom', 'Jane', 'Mike' ]
  }
]

6. List the total count of employees in each department (include only department name and total).
 db.employee.aggregate([
...   {
...     $group: {
...       _id: "$dname",
...       total: { $sum: 1 }
...     }
...   },
...   {
...     $project: {
...       _id: 0,
...       dname: "$_id",
...       total: 1
...     }
...   }
... ]);
[
  { total: 1, dname: 'Finance' },
  { total: 2, dname: 'Human Resources' },
  { total: 1, dname: 'Sales' },
  { total: 1, dname: 'Engineering' }
]

7. Find the employee who joined before every other employee (include only name and year).
db.employee.find({}, { _id: 0, name: 1, year: 1 }).sort({ year: 1 }).limit(1);
[ { name: 'William', year: 1800 } ]
