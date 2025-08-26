import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', (req, res) => res.send('Duong Khanh Nguyen'));

    router.get('/home', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage); // Cần thêm hàm này
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.getFindAllCrud);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD); // Sửa từ PUT sang POST nếu bạn dùng form
    router.get('/delete-crud', homeController.deleteCRUD);

    app.use("/", router); // Không cần return
};

export default initWebRoutes;