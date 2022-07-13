import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { TwitterAuthProvider } from "@firebase/auth";
import firebase from "firebase/compat/app";

@Injectable({
    providedIn: 'root'
})

export class UserService{

    constructor (private auth: AngularFireAuth){

    }

    async register(email: string, password: string){
        try {
            return await this.auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('error en registrando:' + error);
            return null;
        }
    }

    async login(email: string, password: string){
        try {
            return await this.auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('error en login:' + error);
            return null;
        }
    }

    async loginWithGoogle(email: string, password: string){
        try {
            return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        } catch (error) {
            console.log('error en login con Google:' + error);
            return null;
        }
    }

    getCurrentUser(){
        return this.auth.authState;
    }

    logOut(){
        this.auth.signOut();
    }

    sendRecoveryLink(email: string){
        this.auth.sendPasswordResetEmail(email)
        .then(()=>{

        }, error => {
            console.log('Algo fallo');
        })
    }

    sendVerificationEmail(user: any){
        user.sendVerificationEmail().then((res: any) => {
            console.log('Email enviado')
        }, (err : any) => {
            console.log('Algo fallo')
        })
    }
}