import { promises } from "dns";
import app from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  DatabaseReference,
} from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
// export const sentdata = (nodename: string, data: any, id?: string) => {
//   let reference: DatabaseReference; // Explicitly define reference type

//   if (!id) {
//   const newRef = push(ref(db, nodename));
//   let   id = newRef.key;
//     if (!id) {
//       return Promise.reject(new Error("Failed to generate new ID"));
//     }
//     reference =newRef
//   } else {
//     reference = ref(db, `${nodename}/${id}`) as DatabaseReference;
//   }

//   return new Promise<void>((resolve, reject) => {
//     set(reference, { id, ...data })
//       .then(() => {
//         console.log("Data successfully saved");
//         resolve();
//       })
//       .catch((error) => {
//         console.log("Error saving data", error);
//         reject(error);
//       });
//   });
// };
export const sentdata = (nodename: String, data: any) => {
  return new Promise((resolve,reject)=>{
    data.id = push(ref(db, `${nodename}`)).key;
    let refrence = ref(db, `${nodename}/${data.id ? data.id : "sorry"}`);
    set(refrence, data)
      .then(() => {
       resolve( console.log("Data Sucssefully go"))
      })
      .catch((error) => {
       reject( console.log("Sooory", error))
      });
  })
};
export const Editmethod = (nodename:string,id:any,data:any)=>{
  return new Promise ((resolve,reject)=>{
    const refrence = ref(db,`${nodename}/${id}`) 
  set(refrence,data).then(() => {
   resolve( console.log("Edit Data Sucssefully go"))
  })
  .catch((error) => {
    reject(console.log("Sooory", error))
  });
  })
 
}
const newsent = (nodename:string,data:any ,uid:any)=>{
  return new Promise((resolve,reject)=>{
    let refrence = ref(db, `${nodename}/${uid}`);
    set(refrence, data)
      .then(() => {
       resolve( console.log("Data Sucssefully go"))
      })
      .catch((error) => {
       reject( console.log("Sooory", error))
      });
  })
}
// import app from "./FirebaseConfig";
// import { getDatabase, ref, push, set } from "firebase/database";

// const db = getDatabase(app);

// export const getdata = (nodename: string, data: any) => {
//   const reference = ref(db, `${nodename}`);
//   const newRef = push(reference);
//   set(newRef, data)
//     .then(() => {
//       console.log("Data saved successfully!");
//     })
//     .catch((error) => {
//       console.error("Error saving data: ", error);
//     });
// };
export const getdata = (nodename: string, id?: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodename}/${id ? id : ""}`);
    onValue(reference, (dt) => {
      if (dt.exists()) {
        resolve(dt.val());
      } else {
        reject(new Error("no Data Found"));
      }
    });
  });
};


export const Singup = (email:any , password:string , username?:string)=>{
  return new Promise((resolve,reject)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // Signed up 
      const user = res.user;
     
     resolve(newsent(`users`,{email:email,usernamed:username,uid:res.user.uid},`${res.user.uid}`))
      // ...
      console.log(res.user.uid)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     reject(console.log("singup sorry",error))
    });
  }) 
}


export const Login = (email:any , password:string)=>{
 return new Promise((resolve,reject)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
    const user = res.user
  resolve(user)
    console.log(user, "responce agaya")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
reject(console.log("sorry"))
  });
 })
  
}

