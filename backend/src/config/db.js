import mongoose from "mongoose"

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING)
        console.log("Connect successfully!");
        
    } catch (error) {
        console.error("Fail when connect: ", error)
        process.exit(1); // exit with error , 0 mean success
    }
}