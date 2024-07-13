import { connect } from "mongoose";


export const dbConfig = async() => {
    try {
        await connect("mongodb://localhost:27017/Adminside").then(()=> {
            console.clear()
            console.log('Connected...');
        })
    } catch (error) {
        console.error(error);
    }
}