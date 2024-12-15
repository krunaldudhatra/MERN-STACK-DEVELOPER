  const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  function mapContactsToCompanies(contacts) {
      return contacts.reduce((obj,con) => {
          if(obj[con.company])
              {
                  obj[con.company].push(con.name);
              }
          else{
              obj[con.company]=[con.name];
          }
           return obj;
      },{}
                            
              );
  //Implement your function and return the object
  }
