module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    is_success: false,
    message: err.message || "Internal server error"
  });
};
