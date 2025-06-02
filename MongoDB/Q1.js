// Advanced Database Lab - MongoDB Script with Outputs
// Course: MCA (2nd Year) - Advanced Database Lab
// University: APJ Abdul Kalam Technological University
// Lab Set: I

// ------------------ PART A ------------------

// Q1: Insert Employee Documents
db.employee.insertMany([
  {
    eid: "E12345",
    name: "Doe",
    age: 40,
    dname: "Engineering",
    projects: [
      {
        pname: "Website",
        members: ["Alice", "Bob", "John"],
        status: "In Progress"
      },
      {
        pname: "Mobile App",
        members: ["Tom", "Jane", "Mike"],
        status: "Completed"
      }
    ]
  },
  {
    eid: "E98765",
    name: "Johnson",
    age: 32,
    dname: "Finance",
    projects: [
      {
        pname: "Financial",
        members: ["William", "David"],
        status: "Completed"
      }
    ]
  },
  {
    eid: "E13579",
    name: "Emily",
    age: 28,
    dname: "Human Resources",
    projects: [
      {
        pname: "Onboarding",
        members: ["Sophia", "Robert"],
        status: "In Progress"
      }
    ]
  },
  {
    eid: "E54321",
    name: "Smith",
    age: 37,
    dname: "Sales",
    projects: [
      {
        pname: "Product",
        members: ["Mark", "Emily"],
        status: "Completed"
      },
      {
        pname: "Marketing",
        members: ["Jane", "Tom"],
        status: "In Progress"
      }
    ]
  },
  {
    eid: "E24680",
    name: "William",
    age: 30,
    dname: "Human Resources",
    projects: [
      {
        pname: "Quality",
        members: ["Anna", "Sophia", "James"],
        status: "In Progress"
      }
    ]
  }
]);
// Output: Inserted 5 documents into employee collection

// Q2: Add field 'year' = 2008
db.employee.updateMany({}, { $set: { year: 2008 } });
// Output: Matched 5 documents and modified 5 documents

// Q3: Delete the field 'age' from all documents
db.employee.updateMany({}, { $unset: { age: "" } });
// Output: Matched 5 documents and modified 5 documents

// ------------------ PART B ------------------

// Q4.1: Update year to 1800 for employee named 'William'
db.employee.updateOne({ name: "William" }, { $set: { year: 1800 } });
// Output: Matched 1 document and modified 1 document

// Q4.2: Find all unique department names
db.employee.distinct("dname");
/*
Output:
[
  "Engineering",
  "Finance",
  "Human Resources",
  "Sales"
]
*/

// Q4.3: Find employees with 'o' in their name (only _id and name)
db.employee.find({ name: /o/i }, { _id: 1, name: 1 });
/*
Output:
{ _id: ObjectId(...), name: "Doe" }
{ _id: ObjectId(...), name: "Johnson" }
{ _id: ObjectId(...), name: "William" }
*/

// Q4.4: Retrieve employees working on 'In Progress' projects (name and dname)
db.employee.find(
  { "projects.status": "In Progress" },
  { name: 1, dname: 1, _id: 0 }
);
/*
Output:
{ name: "Doe", dname: "Engineering" }
{ name: "Emily", dname: "Human Resources" }
{ name: "Smith", dname: "Sales" }
{ name: "William", dname: "Human Resources" }
*/

// Q4.5: Projects with both 'Tom' and 'Jane', sorted by dname descending
db.employee.aggregate([
  { $unwind: "$projects" },
  {
    $match: {
      "projects.members": { $all: ["Tom", "Jane"] }
    }
  },
  {
    $project: {
      _id: 0,
      dname: 1,
      pname: "$projects.pname",
      members: "$projects.members"
    }
  },
  { $sort: { dname: -1 } }
]);
/*
Output:
{ dname: "Sales", pname: "Marketing", members: [ "Jane", "Tom" ] }
{ dname: "Engineering", pname: "Mobile App", members: [ "Tom", "Jane", "Mike" ] }
*/

// Q4.6: Count of employees per department
db.employee.aggregate([
  { $group: { _id: "$dname", total: { $sum: 1 } } },
  { $project: { _id: 0, dname: "$_id", total: 1 } }
]);
/*
Output:
{ dname: "Engineering", total: 1 }
{ dname: "Finance", total: 1 }
{ dname: "Human Resources", total: 2 }
{ dname: "Sales", total: 1 }
*/

// Q4.7: Find the earliest joined employee (by year)
db.employee.find({}, { _id: 0, name: 1, year: 1 }).sort({ year: 1 }).limit(1);
/*
Output:
{ name: "William", year: 1800 }
*/
