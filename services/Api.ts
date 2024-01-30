import axios from "axios";

class ApiService {
    private readonly apiUrl = "https://easy-enroll-backend-yze6.vercel.app";

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.apiUrl}/login-mobile`, {
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

    async getUser(id: number): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/user/${id}`);

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
        try {
            const response = await axios.post(`${this.apiUrl}/user`, user);

            return new Promise((resolve) => {
                if (response.status === 201) {
                    resolve(response.data);
                }
            });
        } catch(error) {
            throw error;
        }
    }

    async editUser(user: any, id: number): Promise<any> {
        try {
            const response = await axios.put(`${this.apiUrl}/user/${id}`, user);

            return new Promise((resolve) => {
                if (response.status === 200) {
                    resolve(response.data);
                }
            });
        } catch(error) {
            throw error;
        }
    }
}

const apiService = new ApiService();

export default apiService;