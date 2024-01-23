class StoreService {
    private user = {
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        role: '',
        present: ''
    }

    setUser(newUser: any): void {
        this.user.id = newUser.id;
        this.user.firstName = newUser.firstName,
        this.user.lastName = newUser.lastName,
        this.user.username = newUser.username,
        this.user.email = newUser.email,
        this.user.role = newUser.role,
        this.user.present = newUser.present
    }

    getUser(): any {
        return this.user;
    }
}

const storeService = new StoreService();

export default storeService;