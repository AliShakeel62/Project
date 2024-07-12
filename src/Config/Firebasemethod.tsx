import { promises } from "dns";
import app from "./FirebaseConfig";
import { getDatabase, onValue, push, ref, set ,DatabaseReference } from "firebase/database";
const db = getDatabase(app);
export const sentdata = (nodename: string, data: any, id?: string) => {
  let reference: DatabaseReference; // Explicitly define reference type

  if (!id) {
    // Create a new ID if not provided (for new data)
    const newRef = push(ref(db, nodename));
  let   id = newRef.key;
    if (!id) {
      return Promise.reject(new Error("Failed to generate new ID"));
    }
    reference = newRef;
  } else {
    reference = ref(db, `${nodename}/${id}`) as DatabaseReference;
  }

  return new Promise<void>((resolve, reject) => {
    set(reference, { id, ...data })
      .then(() => {
        console.log("Data successfully saved");
        resolve();
      })
      .catch((error) => {
        console.log("Error saving data", error);
        reject(error);
      });
  });
};
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
      }else{
        reject(new Error("no Data Found"))
      }
    });
  });
};
