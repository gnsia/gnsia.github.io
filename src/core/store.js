import { observable } from "./observer.js";

export const aboutStore = {
    state: observable({
        view: 'Introduction', // introduction, biography, discography
        content: '',
    }),
    setState(newState) {
        for (const [key, value] of Object.entries(newState)) {
            if (!this.state.hasOwnProperty(key)) continue;
            this.state[key] = value;
        }
    }
}

export const pageStore = {
    state: observable({
        view: 'posts', // playground, about
    }),
    setState(newState) {
        for (const [key, value] of Object.entries(newState)) {
            if (!this.state.hasOwnProperty(key)) continue;
            this.state[key] = value;
        }
    }
}

export const postStore = {
    state: observable({
        postMode: 'list',
        postId: 0,
        postDate: '',
        content: null,
    }),
    setState(newState) {
        for (const [key, value] of Object.entries(newState)) {
            if (!this.state.hasOwnProperty(key)) continue;
            this.state[key] = value;
        }
    }
}
