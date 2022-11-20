import { DataSource } from "typeorm"

const ModelDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5678,
    username: "test",
    password: "test",
    database: "test",
})

ModelDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default ModelDataSource;