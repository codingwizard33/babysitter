import { pathService } from "../services/pathService.js";

const _404Controller = async (req, res) => {
  const response = await pathService('404.html');

  return res.status(404).sendFile(response);
};

export { _404Controller };