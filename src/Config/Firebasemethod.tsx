import app from "./FirebaseConfig";
import { getDatabase, push, ref ,set } from "firebase/database";
const db = getDatabase(app);
export const getdata = (nodename: any, data: any) => {
   data.firstname = push(ref(db, `${nodename}`)).key;
  let refrence = ref(db, `${nodename},${data.firstname}`);
  set (refrence,data)
};
