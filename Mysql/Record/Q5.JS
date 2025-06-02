1. Create a MongoDB Database named "Inventory"
use Inventory
switched to db Inventory

2. Create a collection named 'Products' and Insert documents
db.Products.insertMany([
    { 
        "_id": 1, 
        "name": "xPhone", 
        "price": 799, 
        "releaseDate": ISODate("2011-05-14"), 
        "spec": { "ram": 4, "screen": 6.5, "cpu": 2.66 }, 
        "color": ["white","black"],
        "storage": [64,128,256]
    },
    { 
        "_id": 2, 
        "name": "xTablet", 
        "price": 899, 
        "releaseDate": ISODate("2011-09-01"), 
        "spec": { "ram": 16, "screen": 9.5, "cpu": 3.66 }, 
        "color": ["white","black","purple"],
        "storage": [128,256,512]
    },
    { 
        "_id": 3, 
        "name": "SmartTablet", 
        "price": 899, 
        "releaseDate": ISODate("2015-01-14"), 
        "spec": { "ram": 12, "screen": 9.7, "cpu": 3.66 }, 
        "color": ["blue"],
        "storage": [16,64,128]
    },
    { 
        "_id": 4, 
        "name": "SmartPad", 
        "price": 699, 
        "releaseDate": ISODate("2020-05-14"), 
        "spec": { "ram": 8, "screen": 9.7, "cpu": 1.66 }, 
        "color": ["white","orange","gold","gray"],
        "storage": [128,256,1024]
    },
    { 
        "_id": 5, 
        "name": "SmartPhone", 
        "price": 599, 
        "releaseDate": ISODate("2022-09-14"), 
        "spec": { "ram": 4, "screen": 9.7, "cpu": 1.66 }, 
        "color": ["white","orange","gold","gray"],
        "storage": [128,256]
    }
])

Output:

{
    acknowledged: true,
    insertedIds: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
}

3. Display all documents in the collection product
db.Products.find()

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  },
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate("2020-05-14T00:00:00.000Z"),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256, 1024 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]


4. Display all the details of product with _id is 2
db.Products.find({ _id: 2 })

Output:

[
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  }
]


5. Display the first document in the collection product
db.Products.findOne()

Output:

{
  _id: 1,
  name: 'xPhone',
  price: 799,
  releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
  spec: { ram: 4, screen: 6.5, cpu: 2.66 },
  color: [ 'white', 'black' ],
  storage: [ 64, 128, 256 ]
}


6. Display name and price of product with _id is 5
db.Products.find({ _id: 5 }, { name: 1, price: 1, _id: 0 })

Output:

[ { name: 'SmartPhone', price: 599 } ]


7. Query products where price equals 899
db.Products.find({ price: 899 })

Output:

[
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  }
]


8. Search for documents where spec.ram equals 4
db.Products.find({ "spec.ram": 4 })

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]


9. Find all documents where color array contains "black"
db.Products.find({ color: "black" })

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  }
]


10. Select documents with release date 2020-05-14
db.Products.find({ releaseDate: ISODate("2020-05-14") })

Output:

[
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate("2020-05-14T00:00:00.000Z"),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256, 1024 ]
  }
]


11. Select documents where price is less than 799
db.Products.find({ price: { $lt: 799 } })

Output:

[
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate("2020-05-14T00:00:00.000Z"),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256, 1024 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]


12. Select documents where spec.screen is less than 7
db.Products.find({ "spec.screen": { $lt: 7 } })

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  }
]

13. Find documents where storage array has at least one element less than 128
db.Products.find({ storage: { $elemMatch: { $lt: 128 } } })

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  }
]


14. Display documents where price is either 599 or 799
db.Products.find({ price: { $in: [599, 799] } })

Output:


[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]

15. Display documents where color array has at least one element either "black" or "white"
db.Products.find({ color: { $in: ["black", "white"] } })

Output:

[
  {
    _id: 1,
    name: 'xPhone',
    price: 799,
    releaseDate: ISODate("2011-05-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 6.5, cpu: 2.66 },
    color: [ 'white', 'black' ],
    storage: [ 64, 128, 256 ]
  },
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  },
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate("2020-05-14T00:00:00.000Z"),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256, 1024 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]


16. Display documents where price is neither 599 nor 799
db.Products.find({ price: { $nin: [599, 799] } })

Output:


[
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  },
  {
    _id: 4,
    name: 'SmartPad',
    price: 699,
    releaseDate: ISODate("2020-05-14T00:00:00.000Z"),
    spec: { ram: 8, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256, 1024 ]
  }
]


17. Display documents where color array doesn't have "black" or "white"
db.Products.find({ color: { $nin: ["black", "white"] } })

Output:

[
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  }
]


18. Display documents where price is 899 and color is either "white" or "black"
db.Products.find({
    price: 899,
    color: { $in: ["black", "white"] } 
})

Output:

[
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  }
]


19. Select documents where price is less than 699 or greater than 799
db.Products.find({
    $or: [
        { price: { $lt: 699 } },
        { price: { $gt: 799 } }
    ]
})

Output:

[
  {
    _id: 2,
    name: 'xTablet',
    price: 899,
    releaseDate: ISODate("2011-09-01T00:00:00.000Z"),
    spec: { ram: 16, screen: 9.5, cpu: 3.66 },
    color: [ 'white', 'black', 'purple' ],
    storage: [ 128, 256, 512 ]
  },
  {
    _id: 3,
    name: 'SmartTablet',
    price: 899,
    releaseDate: ISODate("2015-01-14T00:00:00.000Z"),
    spec: { ram: 12, screen: 9.7, cpu: 3.66 },
    color: [ 'blue' ],
    storage: [ 16, 64, 128 ]
  },
  {
    _id: 5,
    name: 'SmartPhone',
    price: 599,
    releaseDate: ISODate("2022-09-14T00:00:00.000Z"),
    spec: { ram: 4, screen: 9.7, cpu: 1.66 },
    color: [ 'white', 'orange', 'gold', 'gray' ],
    storage: [ 128, 256 ]
  }
]
