let data = [
    { id: 1, ism: "Otabek", familiya: "Valiyev", yosh: 14 },
    { id: 2, ism: "Orifjon", familiya: "Abdujabborov", yosh: 15 },
    { id: 3, ism: "Asadbek", familiya: "Atamirzayev", yosh: 16 },
    { id: 4, ism: "Salimjon", familiya: "Qahramonov", yosh: 16 },
  ];

  
  let creatAction = (ism, familiya, yosh)=>{
    data.push({id: data.length + 1, ism, familiya, yosh})
  }

  creatAction( "Ali", "Aliyev", 17)

  creatAction( "G'ani", "Hasanov", 18)

  // console.log(data);

  //Read

  let readAction = (prop)=>{
   data = data.filter((obj)=> obj.familiya.endsWith(prop) )
  }
  
  // readAction("ev")


  // ===================================

  // console.log(data);
  
  // let sortAction = (prop)=>{
  //   data.sort((a, b)=>{
  //     if (typeof a[prop] === "string")return a[prop].localeCompare(b[prop])
  //       return a[prop] - b[prop]
  //     })
  // }

  // sortAction("ism")
  // sortAction("familiya")
  // sortAction("yosh")

  // console.log(data);
  
  // ============================================

  // let sortAction = (prop)=>{
  //   data.sort((a, b) => {
  //   if (prop === "ism" ) {
  //    return a.ism.localeCompare(b.ism)
  //   } else if(prop === "familiya"){
  //     return a.familiya.localeCompare(b.familiya)
  //   }else if(prop === "yosh"){
  //     return a.yosh - b.yosh
  //   }
  // })
  // }

  //  sortAction("ism")
  // sortAction("familiya")
  // sortAction("yosh")

  // console.log(data);
  