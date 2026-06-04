import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    try {
        let token = req.cookies.token;

        // If no token in cookies, check Authorization header
        if (!token) {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith("Bearer ")) {
                token = authHeader.slice(7); // Remove "Bearer " prefix
            }
        }

        if (!token) {
            return res.status(401).json({ message: "No token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default isAuth;