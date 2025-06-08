import ApiError from "./apiError.js"

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });
    }
    console.log(err)
    // For unknown errors, avoid full HTML dump
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export default asyncHandler
