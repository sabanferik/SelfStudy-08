/* ------------------ --------------------------- */
/*                     1.QUESTION                  */
/* --------------------- ------------------------------- */
const userTodos=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "suscipit repellat esse quibusdam voluptatem incidunt",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "distinctio vitae autem nihil ut molestias quo",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "et itaque necessitatibus maxime molestiae qui quas velit",
      "completed": false
    },
    {
      "userId": 2,
      "id": 24,
      "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "completed": false
    },
    {
      "userId": 2,
      "id": 25,
      "title": "voluptas quo tenetur perspiciatis explicabo natus",
      "completed": true
    },
    {
      "userId": 2,
      "id": 26,
      "title": "aliquam aut quasi",
      "completed": true
    },
    {
      "userId": 2,
      "id": 27,
      "title": "veritatis pariatur delectus",
      "completed": true
    },
    {
      "userId": 2,
      "id": 28,
      "title": "nesciunt totam sit blanditiis sit",
      "completed": false
    },
    {
      "userId": 2,
      "id": 29,
      "title": "laborum aut in quam",
      "completed": false
    },
    {
      "userId": 2,
      "id": 30,
      "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      "completed": true
    },
    {
      "userId": 2,
      "id": 31,
      "title": "repudiandae totam in est sint facere fuga",
      "completed": false
    },
    {
      "userId": 2,
      "id": 32,
      "title": "earum doloribus ea doloremque quis",
      "completed": false
    },
    {
      "userId": 2,
      "id": 33,
      "title": "sint sit aut vero",
      "completed": false
    },
    {
      "userId": 2,
      "id": 34,
      "title": "porro aut necessitatibus eaque distinctio",
      "completed": false
    },
    {
      "userId": 2,
      "id": 35,
      "title": "repellendus veritatis molestias dicta incidunt",
      "completed": true
    },
    {
      "userId": 2,
      "id": 36,
      "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      "completed": true
    },
    {
      "userId": 2,
      "id": 37,
      "title": "sunt cum tempora",
      "completed": false
    },
    {
      "userId": 2,
      "id": 38,
      "title": "totam quia non",
      "completed": false
    },
    {
      "userId": 2,
      "id": 39,
      "title": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      "completed": false
    },
    {
      "userId": 2,
      "id": 40,
      "title": "totam atque quo nesciunt",
      "completed": true
    },
    {
      "userId": 3,
      "id": 41,
      "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      "completed": false
    },
    {
      "userId": 3,
      "id": 42,
      "title": "rerum perferendis error quia ut eveniet",
      "completed": false
    },
    {
      "userId": 3,
      "id": 43,
      "title": "tempore ut sint quis recusandae",
      "completed": true
    },
    {
      "userId": 3,
      "id": 44,
      "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      "completed": true
    },
    {
      "userId": 3,
      "id": 45,
      "title": "velit soluta adipisci molestias reiciendis harum",
      "completed": false
    },
    {
      "userId": 3,
      "id": 46,
      "title": "vel voluptatem repellat nihil placeat corporis",
      "completed": false
    },
    {
      "userId": 3,
      "id": 47,
      "title": "nam qui rerum fugiat accusamus",
      "completed": false
    },
    {
      "userId": 3,
      "id": 48,
      "title": "sit reprehenderit omnis quia",
      "completed": false
    },
    {
      "userId": 3,
      "id": 49,
      "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      "completed": false
    },
    {
      "userId": 3,
      "id": 50,
      "title": "cupiditate necessitatibus ullam aut quis dolor voluptate",
      "completed": true
    },
    {
      "userId": 3,
      "id": 51,
      "title": "distinctio exercitationem ab doloribus",
      "completed": false
    },
    {
      "userId": 3,
      "id": 52,
      "title": "nesciunt dolorum quis recusandae ad pariatur ratione",
      "completed": false
    },
    {
      "userId": 3,
      "id": 53,
      "title": "qui labore est occaecati recusandae aliquid quam",
      "completed": false
    },
    {
      "userId": 3,
      "id": 54,
      "title": "quis et est ut voluptate quam dolor",
      "completed": true
    },
    {
      "userId": 3,
      "id": 55,
      "title": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
      "completed": true
    },
    {
      "userId": 3,
      "id": 56,
      "title": "deleniti ea temporibus enim",
      "completed": true
    },
    {
      "userId": 3,
      "id": 57,
      "title": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
      "completed": false
    },
    {
      "userId": 3,
      "id": 58,
      "title": "est dicta totam qui explicabo doloribus qui dignissimos",
      "completed": false
    },
    {
      "userId": 3,
      "id": 59,
      "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
      "completed": false
    },
    {
      "userId": 3,
      "id": 60,
      "title": "et sequi qui architecto ut adipisci",
      "completed": true
    },
    {
      "userId": 4,
      "id": 61,
      "title": "odit optio omnis qui sunt",
      "completed": true
    },
    {
      "userId": 4,
      "id": 62,
      "title": "et placeat et tempore aspernatur sint numquam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 63,
      "title": "doloremque aut dolores quidem fuga qui nulla",
      "completed": true
    },
    {
      "userId": 4,
      "id": 64,
      "title": "voluptas consequatur qui ut quia magnam nemo esse",
      "completed": false
    },
    {
      "userId": 4,
      "id": 65,
      "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
      "completed": false
    },
    {
      "userId": 4,
      "id": 66,
      "title": "rerum eum molestias autem voluptatum sit optio",
      "completed": false
    },
    {
      "userId": 4,
      "id": 67,
      "title": "quia voluptatibus voluptatem quos similique maiores repellat",
      "completed": false
    },
    {
      "userId": 4,
      "id": 68,
      "title": "aut id perspiciatis voluptatem iusto",
      "completed": false
    },
    {
      "userId": 4,
      "id": 69,
      "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      "completed": false
    },
    {
      "userId": 4,
      "id": 70,
      "title": "ut sequi accusantium et mollitia delectus sunt",
      "completed": false
    },
    {
      "userId": 4,
      "id": 71,
      "title": "aut velit saepe ullam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 72,
      "title": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
      "completed": false
    },
    {
      "userId": 4,
      "id": 73,
      "title": "sint amet quia totam corporis qui exercitationem commodi",
      "completed": true
    },
    {
      "userId": 4,
      "id": 74,
      "title": "expedita tempore nobis eveniet laborum maiores",
      "completed": false
    },
    {
      "userId": 4,
      "id": 75,
      "title": "occaecati adipisci est possimus totam",
      "completed": false
    },
    {
      "userId": 4,
      "id": 76,
      "title": "sequi dolorem sed",
      "completed": true
    },
    {
      "userId": 4,
      "id": 77,
      "title": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
      "completed": false
    },
    {
      "userId": 4,
      "id": 78,
      "title": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
      "completed": false
    },
    {
      "userId": 4,
      "id": 79,
      "title": "eum ipsa maxime ut",
      "completed": true
    },
    {
      "userId": 4,
      "id": 80,
      "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      "completed": true
    },
    {
      "userId": 5,
      "id": 81,
      "title": "suscipit qui totam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 82,
      "title": "voluptates eum voluptas et dicta",
      "completed": false
    },
    {
      "userId": 5,
      "id": 83,
      "title": "quidem at rerum quis ex aut sit quam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 84,
      "title": "sunt veritatis ut voluptate",
      "completed": false
    },
    {
      "userId": 5,
      "id": 85,
      "title": "et quia ad iste a",
      "completed": true
    },
    {
      "userId": 5,
      "id": 86,
      "title": "incidunt ut saepe autem",
      "completed": true
    },
    {
      "userId": 5,
      "id": 87,
      "title": "laudantium quae eligendi consequatur quia et vero autem",
      "completed": true
    },
    {
      "userId": 5,
      "id": 88,
      "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
      "completed": false
    },
    {
      "userId": 5,
      "id": 89,
      "title": "sequi ut omnis et",
      "completed": true
    },
    {
      "userId": 5,
      "id": 90,
      "title": "molestiae nisi accusantium tenetur dolorem et",
      "completed": true
    },
    {
      "userId": 5,
      "id": 91,
      "title": "nulla quis consequatur saepe qui id expedita",
      "completed": true
    },
    {
      "userId": 5,
      "id": 92,
      "title": "in omnis laboriosam",
      "completed": true
    },
    {
      "userId": 5,
      "id": 93,
      "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
      "completed": true
    },
    {
      "userId": 5,
      "id": 94,
      "title": "facilis modi saepe mollitia",
      "completed": false
    },
    {
      "userId": 5,
      "id": 95,
      "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
      "completed": true
    },
    {
      "userId": 5,
      "id": 96,
      "title": "nobis suscipit ducimus enim asperiores voluptas",
      "completed": false
    },
    {
      "userId": 5,
      "id": 97,
      "title": "dolorum laboriosam eos qui iure aliquam",
      "completed": false
    },
    {
      "userId": 5,
      "id": 98,
      "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
      "completed": true
    },
    {
      "userId": 5,
      "id": 99,
      "title": "neque voluptates ratione",
      "completed": false
    },
    {
      "userId": 5,
      "id": 100,
      "title": "excepturi a et neque qui expedita vel voluptate",
      "completed": false
    }
  ]

  /*-----------------------------------------*
  /*             1.Question
  /*-----------------------------------------*/

//   const userTodos=[

//   ]

//! Bir Todo Uygulamasında 5 tane kullanıcının todolistinin olduğu Json dosyasında
//!a-Kullanıcıların yapılacak listesini ve completed durumunu listeleyelim

//  1.yol
userTodos.forEach(todo => {
  console.log(`User ${todo.userId}'s Todo: ${todo.title}, Completed: ${todo.completed}`);
});

//  2.yol

userTodos.forEach((todo)=>console.log(`${todo.title}: ${todo.completed}`))

//! b - Birinci kullanicinin todo bilgisi ve yapilip yapilmama durumunu listeleyin

// 1-yol

const firstUserTodos = userTodos.filter(todo => todo.userId === 1);

console.log(`Birinci Kullanıcının Todo Bilgileri:`);
firstUserTodos.forEach(todo => {
  console.log(`Todo ID: ${todo.id}, Todo: ${todo.title}, Completed: ${todo.completed}`);
});

// 2-yol

userTodos
.filter((user1)=>user1.userId===1)
.forEach((user1)=>console.log(`${user1.title}: ${user1.completed}`))

//! c- Birinci kullanicinin (id si 1 olan ) sadece bitirdigi islerin listesi

userTodos
.filter((user1)=>user1.userId===1 && user1.completed===true)
.forEach((user1)=>console.log(`${user1.title}: ${user1.completed}`))

//! d- Kullanicinin girdigi id'ye sahip kisinin bitirdigi islerin listesi

// 1.Yol

const targetUserId = 2;  
const targetUserCompletedTodos = userTodos.filter(todo => todo.userId === targetUserId && todo.completed);

console.log(`ID'si ${targetUserId} olan Kullanıcının Bitirdiği İşlerin Listesi:`);
targetUserCompletedTodos.forEach(todo => {
  console.log(`Todo ID: ${todo.id}, Todo: ${todo.title}`);
});

// 2.Yol

// user=+prompt("Enter an Id (1-5):")

// userTodos
// .filter((todo)=> todo.userId===user && todo.completed === true)
// .forEach((newtodo)=> console.log(`${newtodo.title}`))


//! e- Bu yapiya yeni bir eleman ekleyelim

// 1.yoll

const newTodo = {
    "userId": 1,
    "id": 6,
    "title": "Yeni Todo",
    "completed": false
  };
  
  userTodos.push(newTodo);
  
  console.log("Yeni Eklenen Todo:");
  console.log(newTodo);
  
  console.log("Güncellenmiş Todo Listesi:");
  userTodos.forEach(todo => {
    console.log(`Todo ID: ${todo.id}, Todo: ${todo.title}, Completed: ${todo.completed}`);
  });

//   2.yol

userTodos.push({
    userId: 6,
    id: 6,
    title: "my new todo",
    completed: false,
  });
  console.log(userTodos[100]);

  /*-----------------------------------------*
  /*             2.Question
  /*-----------------------------------------*/

  let products=[
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg"
      ]
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg"
      ]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      ]
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/8/1.jpg",
        "https://cdn.dummyjson.com/product-images/8/2.jpg",
        "https://cdn.dummyjson.com/product-images/8/3.jpg",
        "https://cdn.dummyjson.com/product-images/8/4.jpg",
        "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/9/1.jpg",
        "https://cdn.dummyjson.com/product-images/9/2.png",
        "https://cdn.dummyjson.com/product-images/9/3.png",
        "https://cdn.dummyjson.com/product-images/9/4.jpg",
        "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
      ]
    },
    {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/10/1.jpg",
        "https://cdn.dummyjson.com/product-images/10/2.jpg",
        "https://cdn.dummyjson.com/product-images/10/3.jpg",
        "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
      ]
    },
    {
      "id": 11,
      "title": "perfume Oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 13,
      "discountPercentage": 8.4,
      "rating": 4.26,
      "stock": 65,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/11/1.jpg",
        "https://cdn.dummyjson.com/product-images/11/2.jpg",
        "https://cdn.dummyjson.com/product-images/11/3.jpg",
        "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
      ]
    },
    {
      "id": 12,
      "title": "Brown Perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 40,
      "discountPercentage": 15.66,
      "rating": 4,
      "stock": 52,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/12/1.jpg",
        "https://cdn.dummyjson.com/product-images/12/2.jpg",
        "https://cdn.dummyjson.com/product-images/12/3.png",
        "https://cdn.dummyjson.com/product-images/12/4.jpg",
        "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
      ]
    },
    {
      "id": 13,
      "title": "Fog Scent Xpressio Perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 13,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/13/1.jpg",
        "https://cdn.dummyjson.com/product-images/13/2.png",
        "https://cdn.dummyjson.com/product-images/13/3.jpg",
        "https://cdn.dummyjson.com/product-images/13/4.jpg",
        "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
      ]
    },
    {
      "id": 14,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 120,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Al Munakh",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/14/1.jpg",
        "https://cdn.dummyjson.com/product-images/14/2.jpg",
        "https://cdn.dummyjson.com/product-images/14/3.jpg",
        "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
      ]
    },
    {
      "id": 15,
      "title": "Eau De Perfume Spray",
      "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 30,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/15/1.jpg",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/4.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
      ]
    },
    {
      "id": 16,
      "title": "Hyaluronic Acid Serum",
      "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      "price": 19,
      "discountPercentage": 13.31,
      "rating": 4.83,
      "stock": 110,
      "brand": "L'Oreal Paris",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/16/1.png",
        "https://cdn.dummyjson.com/product-images/16/2.webp",
        "https://cdn.dummyjson.com/product-images/16/3.jpg",
        "https://cdn.dummyjson.com/product-images/16/4.jpg",
        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
      ]
    },
    {
      "id": 17,
      "title": "Tree Oil 30ml",
      "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "price": 12,
      "discountPercentage": 4.09,
      "rating": 4.52,
      "stock": 78,
      "brand": "Hemani Tea",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/17/1.jpg",
        "https://cdn.dummyjson.com/product-images/17/2.jpg",
        "https://cdn.dummyjson.com/product-images/17/3.jpg",
        "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
      ]
    },
    {
      "id": 18,
      "title": "Oil Free Moisturizer 100ml",
      "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      "price": 40,
      "discountPercentage": 13.1,
      "rating": 4.56,
      "stock": 88,
      "brand": "Dermive",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/18/1.jpg",
        "https://cdn.dummyjson.com/product-images/18/2.jpg",
        "https://cdn.dummyjson.com/product-images/18/3.jpg",
        "https://cdn.dummyjson.com/product-images/18/4.jpg",
        "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
      ]
    },
    {
      "id": 19,
      "title": "Skin Beauty Serum.",
      "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "price": 46,
      "discountPercentage": 10.68,
      "rating": 4.42,
      "stock": 54,
      "brand": "ROREC White Rice",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/19/1.jpg",
        "https://cdn.dummyjson.com/product-images/19/2.jpg",
        "https://cdn.dummyjson.com/product-images/19/3.png",
        "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
      ]
    },
    {
      "id": 20,
      "title": "Freckle Treatment Cream- 15gm",
      "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "price": 70,
      "discountPercentage": 16.99,
      "rating": 4.06,
      "stock": 140,
      "brand": "Fair & Clear",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/20/1.jpg",
        "https://cdn.dummyjson.com/product-images/20/2.jpg",
        "https://cdn.dummyjson.com/product-images/20/3.jpg",
        "https://cdn.dummyjson.com/product-images/20/4.jpg",
        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
      ]
    },
    {
      "id": 21,
      "title": "- Daal Masoor 500 grams",
      "description": "Fine quality Branded Product Keep in a cool and dry place",
      "price": 20,
      "discountPercentage": 4.81,
      "rating": 4.44,
      "stock": 133,
      "brand": "Saaf & Khaas",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
      "images": [
        "https://cdn.dummyjson.com/product-images/21/1.png",
        "https://cdn.dummyjson.com/product-images/21/2.jpg",
        "https://cdn.dummyjson.com/product-images/21/3.jpg"
      ]
    },
    {
      "id": 22,
      "title": "Elbow Macaroni - 400 gm",
      "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      "price": 14,
      "discountPercentage": 15.58,
      "rating": 4.57,
      "stock": 146,
      "brand": "Bake Parlor Big",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/22/1.jpg",
        "https://cdn.dummyjson.com/product-images/22/2.jpg",
        "https://cdn.dummyjson.com/product-images/22/3.jpg"
      ]
    },
    {
      "id": 23,
      "title": "Orange Essence Food Flavou",
      "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "price": 14,
      "discountPercentage": 8.04,
      "rating": 4.85,
      "stock": 26,
      "brand": "Baking Food Items",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/23/1.jpg",
        "https://cdn.dummyjson.com/product-images/23/2.jpg",
        "https://cdn.dummyjson.com/product-images/23/3.jpg",
        "https://cdn.dummyjson.com/product-images/23/4.jpg",
        "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
      ]
    },
    {
      "id": 24,
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 46,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "fauji",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/24/1.jpg",
        "https://cdn.dummyjson.com/product-images/24/2.jpg",
        "https://cdn.dummyjson.com/product-images/24/3.jpg",
        "https://cdn.dummyjson.com/product-images/24/4.jpg",
        "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
      ]
    },
    {
      "id": 25,
      "title": "Gulab Powder 50 Gram",
      "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "price": 70,
      "discountPercentage": 13.58,
      "rating": 4.87,
      "stock": 47,
      "brand": "Dry Rose",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/25/1.png",
        "https://cdn.dummyjson.com/product-images/25/2.jpg",
        "https://cdn.dummyjson.com/product-images/25/3.png",
        "https://cdn.dummyjson.com/product-images/25/4.jpg",
        "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
      ]
    },
    {
      "id": 26,
      "title": "Plant Hanger For Home",
      "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      "price": 41,
      "discountPercentage": 17.86,
      "rating": 4.08,
      "stock": 131,
      "brand": "Boho Decor",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/26/1.jpg",
        "https://cdn.dummyjson.com/product-images/26/2.jpg",
        "https://cdn.dummyjson.com/product-images/26/3.jpg",
        "https://cdn.dummyjson.com/product-images/26/4.jpg",
        "https://cdn.dummyjson.com/product-images/26/5.jpg",
        "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
      ]
    },
    {
      "id": 27,
      "title": "Flying Wooden Bird",
      "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "price": 51,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Flying Wooden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/27/1.jpg",
        "https://cdn.dummyjson.com/product-images/27/2.jpg",
        "https://cdn.dummyjson.com/product-images/27/3.jpg",
        "https://cdn.dummyjson.com/product-images/27/4.jpg",
        "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
      ]
    },
    {
      "id": 28,
      "title": "3D Embellishment Art Lamp",
      "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      "price": 20,
      "discountPercentage": 16.49,
      "rating": 4.82,
      "stock": 54,
      "brand": "LED Lights",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/28/1.jpg",
        "https://cdn.dummyjson.com/product-images/28/2.jpg",
        "https://cdn.dummyjson.com/product-images/28/3.png",
        "https://cdn.dummyjson.com/product-images/28/4.jpg",
        "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
      ]
    },
    {
      "id": 29,
      "title": "Handcraft Chinese style",
      "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      "price": 60,
      "discountPercentage": 15.34,
      "rating": 4.44,
      "stock": 7,
      "brand": "luxury palace",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/29/1.jpg",
        "https://cdn.dummyjson.com/product-images/29/2.jpg",
        "https://cdn.dummyjson.com/product-images/29/3.webp",
        "https://cdn.dummyjson.com/product-images/29/4.webp",
        "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
      ]
    },
    {
      "id": 30,
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "discountPercentage": 2.92,
      "rating": 4.92,
      "stock": 54,
      "brand": "Golden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/30/1.jpg",
        "https://cdn.dummyjson.com/product-images/30/2.jpg",
        "https://cdn.dummyjson.com/product-images/30/3.jpg",
        "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
      ]
    }
  ]

  //! a- Ürün ve fiyatlarini listeleyelim

//   products.forEach((product) => console.log(`${product.title} ürün fiyati : ${product.price}`))

//destructure ile
products.forEach(({title,price})=>console.log(`${title} ürün fiyati : ${price}`))

console.clear()
//! b Ilk ürünün bilgilerini object destructure yöntemi ile gösterelim
// title
// description
// price
// category

// 1.yol
products
  .filter((product) => product.id === 1)
  .forEach((product) => {
    const { title, description, price, category } = product;
    console.log(`${title} ${description} ${price} ${category}`);
  });

//   2.yoll

  products
  .filter(({id}) => id == 1)
  .forEach(({ title,description,price,category }) => {
    console.log(title,description,price,category);
  });

//   3.yol

products
.filter(({id})=>id===1)
.forEach(({title,description,price,category})=> console.log(`${title}
${description}
${price}
${category}`))

// ! c laptoplarin adini ve fiyatlarini listeleyelim

// 1.Yol

products
  .filter((product) => product.category == 'laptops')
  .map(({title,price}) => {
    console.log(title,price,);
  });

//   2.yol

products
  .filter((product) => product.category == "laptops")
  .forEach(({ title, price }) => {
    console.log(title, price);
  });

//   3.yol

products
.filter(({category})=> category==="laptops")
.forEach(({title,price})=>console.log(`${title}: ${price}`))

//! d- Firmamız home-decoration categorisine sahip ürünleri ayrı bir sitede yayınlama kararı aldığı için bu ürünleri pörtföyünden çıkartacak. Bu karategorideki ürünleri listeden çıkaralım

// 1.Yol

const newProducts = products.filter(
    (product) => product.category !== "home-decoration"
  );
  console.log(newProducts);

//   2. Yol

//  const newProducts=products.filter((products)=>products.category !== "home-decoration")

products=products.filter((products)=>products.category !== "home-decoration")

 console.log(newProducts);

 //! Kulanicinin sectigi ürünü (id si girilen ürünü) silelim

//  1. Yol
//  const idSil = +prompt("Silmek istediğiniz ürün id'si giriniz.");
// const urunler = products.filter(product => product.id !== idSil);
// console.log(urunler);

// 2.Yol
// const productId = +prompt("Please enter a product id you wanna remove");
// const newProducts = products.filter(({ id }) => id !== productId);
// console.log(newProducts);

// 3. Yol

// const id=Number(prompt("Enter an id:"))
// const updatedProducts= products.filter((product)=> product.id !== id)
// console.log(updatedProducts)
console.clear();
//! Yeni ürün ekleyelim - create

//  1. ürün ekleme cözümü

products.push({
    id: products.length + 1,
    title: "wallet",
    description: "Attractive Wallet",
    price: 20,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "blue",
    category: "leather",
    thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/30/1.jpg",
      "https://cdn.dummyjson.com/product-images/30/2.jpg",
      "https://cdn.dummyjson.com/product-images/30/3.jpg",
      "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
    ],
  });

//   2. ürün ekleme cözümü

products.push({
    id: 31,
    title: "iPhone 10",
    description: "An apple mobile which is nothing like apple",
    price: 599,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
    ],
  });
  console.log(products);

//   3. ürün ekleme cözümü

  const addProduct = {
    
        "id": products.length + 1,
        "title": "iPhone 10",
        "description": "An apple mobile which is nothing like apple",
        "price": 1299,
        "discountPercentage": 14.96,
        "rating": 4.69,
        "stock": 73,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
     
    }

    products=[...products,addProduct]
    console.log(products);
    //? Bu son yöntem daha best practice olarak kullanılır


    //! - Rest operatörünü kullanarak 
    // fiyatlari indirimli fiyatlarla güncelliyoruz

// 1. Yol

const guncelFiyatlar = products.map(product => {
    const discount = product.price * (product.discountPercentage / 100);
    const newPrice = product.price - discount;
    return { ...product, price: newPrice };
   });
   
   console.log(guncelFiyatlar);

//    2. Yol

const newIndirimliProducts = products.map(product => ({
    ...product,
    price: product.price - (product.price * (product.discountPercentage / 100)).toFixed(2)
  }));
  console.log(newIndirimliProducts);

//! - Her kategoride kac ürün oldugunu gösterelim

// // 1.Yol
// const categoryCount = products.reduce((acc, product) => {
//   if (!acc[product.category]) {
//     acc[product.category] = 1;
//   } else {
//     acc[product.category]++;
//   }
//   return acc;
// });

// console.log(categoryCount);

// 2. Yol

function countCategoryElements(products) {
  const categoryCount={}

  products.forEach((product)=>{
      
    const {category}=product

    if (categoryCount[category]){
        categoryCount[category]=categoryCount[category]+1
    }
    else{
        categoryCount[category]=1
    }

    
  });
  return categoryCount
}

console.log(countCategoryElements(products));




//! - Kac Katogori var

console.log(
    products
      .map((product) => product.category)
      .reduce((catArray, category) => {
        if (!catArray.includes(category)) {
          catArray.push(category);
        }
        return catArray;
      }, [])
      .length
  );


  //!1- Müşteri bilgilerini düzenli bir şekilde göstermek istiyor.Bunun için
//   İsim - adres ve telefonlarını yeni bir listeye alarak düzenli bir şekide gösterecektir.

// Beklenen Sonuç:
// [
//     {name: 'LEANNE GRAHAM', adress: 'Gwenborough city, Kulas Light street Apt. 556 suite', phone: '1-770-736-8031 x56442'}
//     {name: 'ERVIN HOWELL', adress: 'Wisokyburgh city, Victor Plains street Suite 879 suite', phone: '010-692-6593 x09125'}
//     {name: 'CLEMENTINE BAUCH', adress: 'McKenziehaven city, Douglas Extension street Suite 847 suite', phone: '1-463-123-4447'}
// ]

/* -------------------------------------------------------------------------- */
//!2- Müşterilerinin bazılarına telefon ile arayıp memnuniyet anketi yapacaktır
// Baş harfi e ile başlıyorsa Pazartesi,
// Baş harfi C ile başlıyorsa Çarşamba arayacaktır

// Beklenen Sonuç:
// Pazartesi Aranacaklar
// {name: 'ERVIN HOWELL', phone: '010-692-6593 x09125'}

// Çarşamba Aranacaklar
// {name: 'CLEMENTINE BAUCH', phone: '1-463-123-4447'}
// {name: 'CHELSEY DIETRICH', phone: '(254)954-1289'}
// {name: 'CLEMENTINA DUBUQUE', phone: '024-648-3804'}

/* -------------------------------------------------------------------------- */
//!3- id Ad-ve email adreslerini ayrı bir listeye alıp, id numaraları tek sayı olanlara yeni çıkan elektronik cihazları ile ilgili mesaj ekleyecek, çift sayı olanlara yeni çıkan küçük ev aleti mesajını ekleyecektir

// Beklenen Sonuc
// {name: 'Leanne Graham', phone: 'Sincere@april.biz', mesaj: 'Yeni çıkan XXX elektronik cihazımızı mutlaka denemelisiniz '}
// {name: 'Ervin Howell', phone: 'Shanna@melissa.tv', mesaj: ' Yeni Çıkan kahve yapma makinamızı deneyin.Memnun kalacaksınız'}
