import axios from "axios";

class ApiService {
    private readonly apiUrl = "https://easy-enroll-backend-yze6.vercel.app";

    async test() {
        try {
            const response = await axios.get(`${this.apiUrl}/user`, {
            });

            if (response.status === 200) {
                console.log("GET data: ", response);
      
                return;
            } else {
                throw new Error("Failed to get user");
            }
        } catch(error) {
            console.log("Error posting data: ", error);
            throw error;
        }
    }

    async login(username: string, password: string): Promise<boolean> {
        try {
            const reponse = await axios.post(`${this.apiUrl}/login`, {
                username: username,
                password: password
            });

            // change to 200
            if (reponse.status !== 201) {
                throw new Error();
            }

            return true;
        } catch(error) {
            console.log("Error posting data: ", error);
            throw error;
        }
    }
}

const apiService = new ApiService();

export default apiService;