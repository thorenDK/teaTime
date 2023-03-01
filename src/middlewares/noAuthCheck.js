function noAuthCheck(req, res, next) {
  if (!req?.session?.user?.id) {
    next();
  }
  return res.sendStatus(403);
}

export default noAuthCheck;
