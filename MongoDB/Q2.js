// === MongoDB Practical – Set 2: Course Database ===

// Insert documents into 'course' collection
db.course.insertMany([
  {
    cno: "HIS-351",
    duration: 3,
    sem: "fall",
    dname: "social",
    teaches: {
      fname: "El Siad",
      specialization: ["history", "music"],
      salary: 65000
    },
    ratings: 5
  },
  {
    cno: "PHY-102",
    duration: 4,
    sem: "fall",
    dname: "physics",
    teaches: {
      fname: "Mozart",
      specialization: ["physics"],
      salary: 45000
    },
    ratings: 3
  },
  {
    cno: "FIN-201",
    duration: 2,
    sem: "spring",
    dname: "finance",
    teaches: {
      fname: "Wu",
      specialization: ["history", "finance"],
      salary: 90000
    },
    ratings: 4
  },
  {
    cno: "CS-190",
    duration: 4,
    sem: "summer",
    dname: "computer",
    teaches: {
      fname: "Katz",
      specialization: ["dbms", "os"],
      salary: 95000
    },
    ratings: 4
  },
  {
    cno: "BIO-121",
    duration: 5,
    sem: "winter",
    dname: "biology",
    teaches: {
      fname: "Brandt",
      specialization: ["biology"],
      salary: 75000
    },
    ratings: 5
  }
]);

// Q2: Add a new field 'year = 2009' to all documents
db.course.updateMany({}, { $set: { year: 2009 } });

// Q3: Delete the field 'duration' from every document
db.course.updateMany({}, { $unset: { duration: "" } });

// Q4.1: Update year to 2010 for PHY-102 and FIN-201
db.course.updateMany(
  { cno: { $in: ["PHY-102", "FIN-201"] } },
  { $set: { year: 2010 } }
);

// Q4.2: Add 2 more ratings to PHY-102
db.course.updateOne(
  { cno: "PHY-102" },
  { $set: { ratings: [3, 3, 3] } }
);

// Q4.3: Display fall courses from physics department
db.course.find(
  { sem: "fall", dname: "physics" },
  { cno: 1, sem: 1, dname: 1, year: 1, _id: 0 }
);
// Output:
// { "cno": "PHY-102", "sem": "fall", "dname": "physics", "year": 2010 }

// Q4.4: Courses where salary is between 60000 and 90000
db.course.find(
  { "teaches.salary": { $gte: 60000, $lte: 90000 } },
  { cno: 1, "teaches.fname": 1, "teaches.salary": 1, _id: 0 }
);
// Output:
// { "cno": "HIS-351", "teaches": { "fname": "El Siad", "salary": 65000 } }
// { "cno": "FIN-201", "teaches": { "fname": "Wu", "salary": 90000 } }
// { "cno": "BIO-121", "teaches": { "fname": "Brandt", "salary": 75000 } }

// Q4.5: Faculty with highest salary from physics, finance, biology
db.course.find(
  { dname: { $in: ["physics", "finance", "biology"] } },
  { "teaches.fname": 1, "teaches.salary": 1, _id: 0 }
).sort({ "teaches.salary": -1 }).limit(1);
// Output:
// { "teaches": { "fname": "Wu", "salary": 90000 } }

// Q4.6: Year-wise course count in ascending order
db.course.aggregate([
  { $group: { _id: "$year", courseCount: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);
// Output:
// { "_id": 2009, "courseCount": 3 }
// { "_id": 2010, "courseCount": 2 }

// Q4.7: Semester with most number of courses
db.course.aggregate([
  { $group: { _id: "$sem", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]);
// Output:
// { "_id": "fall", "total": 2 }
