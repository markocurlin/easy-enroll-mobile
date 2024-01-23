import axios from "axios";

class ApiService {
    private readonly apiUrl = "https://easy-enroll-backend-yze6.vercel.app";

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/login`, {
                username: username,
                password: password
            });

            return new Promise((resolve) => {
                if (response.status === 200) {
                    resolve(response.data);
                }
            });
        } catch(error) {
            throw error;
        }
    }

    async addUser(user: any): Promise<any> {

    }

    async editUser(user: any): Promise<any> {
        
    }
}

const apiService = new ApiService();

export default apiService;