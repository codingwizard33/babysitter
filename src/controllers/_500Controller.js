import { pathService } from "../services/pathService.js";

const _500Controller = async (req, res) => {
  const response = await pathService('500.html');

  return res.status(500).sendFile(response);
};

export { _500Controller };