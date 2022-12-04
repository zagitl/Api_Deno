
import { MongoClient, ClientMariaDB } 
    from "../dependences.ts";


const mongoClient = new MongoClient();
//const URI_MONGO="mongodb://developerItvo:t0ps3cr3t@localhost:27017/quotes?authMechanism=SCRAM-SHA-256&authSource=admin";
const URI_MONGO="mongodb://itvoDeveloper:admin@localhost:27017/quotes?authMechanism=SCRAM-SHA-256&authSource=admin";

export const connectorMongoDB = await mongoClient.connect(URI_MONGO);

const CONN_MARIADB = {
    hostname: "localhost",
    port: 3307,
    username: "denoDev",
    password: "mariadb",
    db: "quotes",
    poolSize: 10
};

export const connectorMariaDB = await new ClientMariaDB().connect(CONN_MARIADB);

