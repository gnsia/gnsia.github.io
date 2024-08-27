import { observable } from "./observer.js";

export const store = {
    state: observable({
        view: 'posts',
        about: 'introduction', // introduction, biography, discography
    }),
    setState(newState) {
        for (const [key, value] of Object.entries(newState)) {
            if (!this.state[key]) continue;
            this.state[key] = value;
        }
    }
}