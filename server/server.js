require("dotenv").config();

const express = require ("express")
const cors= require ("cors");
const dns= require("dns");

const app= express();

app.use(cors());
app.use(express.json());

dns.setServers(["1.1.1.1","8.8.8.8"])
const connectDB= require("./config/db");
connectDB();

const projectRoutes= require("../server/routes/projectRoutes");
const experienceRoutes= require("./routes/experienceRoutes")

app.use("/api/projects",projectRoutes);
app.use("/api/experiences",experienceRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
});