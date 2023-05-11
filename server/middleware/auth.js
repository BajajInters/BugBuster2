export const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["Authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    console.log(res.token);
    next();
  } else {
    res.status(404).send({ message: "Token is not valid" });
  }
};
