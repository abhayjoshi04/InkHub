import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";
//import { nanoid } from 'nanoid';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userId = ID.unique(); 
            
            // console.log("Creating user with ID:", userId);
            // console.log("Email:", email);
            // console.log("Password:", password);
            // console.log("Name:", name);

            const userAccount = await this.account.create(userId, email, password, name);
            if (userAccount) {

                return this.login({email, password});
            }
            return userAccount; 
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error);
            throw error; 
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw error; 
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null; 
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true; 
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            return false; 
        }
    }
}

const authService = new AuthService();

export default authService;
