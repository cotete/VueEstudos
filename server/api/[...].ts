import * as videoController from "../controller/video";

const router = createRouter();

//router.get('/videos',defineEventHandler(videoController.buscaVideos))

export default useBase("/api/v1", router.handler)