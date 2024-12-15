// //Complete the createUserObjects function
// //Do not alter the starter Code
//     const ids = [1, 2, 3];
//     const names = ["John", "Jane", "Alice"];
//     const images = ["john.jpg", "jane.jpg", "alice.jpg"];
//     function createUserObjects(ids,names,images){
//         let out = createUserObjects.map(function(ids){
//             return function(names)
//             {
//                 return function(images)
//                 {
//                     return {`id: `};
//                 }
//             }
//         })
//         //Implement your function here
//     }


    const ids = [1, 2, 3];
    const names = ["John", "Jane", "Alice"];
    const images = ["john.jpg", "jane.jpg", "alice.jpg"];
    function createUserObjects(ids, names, images) {
      const users = ids.map((id, index) => {
        return {
          id: id,
          name: names[index],
          image: images[index]
        };
      });
  
      return users;
    }
  