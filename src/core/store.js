import { observable } from "./observer.js";

export const store = {
    state: observable({
        pageView: 'posts',
        aboutView: 'introduction', // introduction, biography, discography
        postMode: 'list',
    }),
    setState(newState) {
        for (const [key, value] of Object.entries(newState)) {
            if (!this.state[key]) continue;
            this.state[key] = value;
        }
    }
}