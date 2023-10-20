const logOutController = async (req, res) => {
  await res.setHeader('Authorization', '');

  return res.json({ message: 'You are successfully logged out.' });
};

export { logOutController };