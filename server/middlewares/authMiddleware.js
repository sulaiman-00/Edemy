import { clerkClient } from "@clerk/express";

//Middleware (protect Educator Route)
export const protectEducator = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const response = await clerkClient.users.getUser(userId);
    if (response.publicMetadata.role !== "educator") {
      return res.json({
        status: "false",
        message: "Unauthorized Access",
      });
    }
    next();
  } catch (error) {
    res.json({
      status: "false",
      message: error.message,
    });
  }
};
