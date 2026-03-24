import Jwt from "jsonwebtoken";

const getToken = (userId) => {
    try {
        const token = Jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return token;
        
    } catch (error) {
        console.error("Error generating token:", error);
        return null;
    }
};

export default getToken;
