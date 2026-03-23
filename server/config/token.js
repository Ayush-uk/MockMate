import Jwt from "jsonwebtoken";

const getToken =async (userId)=>{
    try {
         const token = Jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
        
    } catch (error) {
        console.error("Error generating token:", error);
        
    }

   
}
export default getToken;