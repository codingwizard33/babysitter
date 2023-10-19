import { pathService } from "../services/pathService.js";

const indexController = async (req, res) => {
  const response = await pathService('index.html');

  return res.sendFile(response);
};

export { indexController };