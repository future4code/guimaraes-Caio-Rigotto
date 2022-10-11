import app from "./app";
import { ProductsRouter } from "./Router/ProductsRouter";

app.use('/products', ProductsRouter)