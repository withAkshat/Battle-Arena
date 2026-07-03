import dotenv from "dotenv"

dotenv.config();

const config = {

    googleKey: process.env.GOOGLE_API_KEY|| "",
    cohereKey: process.env.COHERE_API_KEY || "",
    mistralKey: process.env.MISTRAL_API_KEY || "",


}

export default config;