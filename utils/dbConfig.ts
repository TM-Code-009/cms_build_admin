import { connect } from "mongoose";


export const dbConfig = async() => {
    try {
        await connect("mongodb+srv://osakweterrynduka:osakweterrynduka@admindb.t511qwr.mongodb.net/?retryWrites=true&w=majority&appName=admindb").then(()=> {
            console.clear()
            console.log('Connected...');
        })
    } catch (error) {
        console.error(error);
    }
}