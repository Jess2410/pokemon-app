export default class AuthentificationService {
    static isAuthentificated: boolean = false;

    static login(username: string, password: string): Promise<boolean>{
        const isAuthentificated = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() =>{
                this.isAuthentificated = isAuthentificated;
                resolve(isAuthentificated);
            }, 1000);
        })
    }
}