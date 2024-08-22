import Loading from "../component/utils/Loading.js";

export default class Component {
    $target;
    state;
    props;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setup();
        this.setEvent();
        this.render();       
    }
    setup() {}
    setEvent() {}   
    render() {
        this.$target.innerHTML = this.template();
        this.mounted();
    }
    template() {
        return ``;
    }
    mounted() {}
    loading() {
        const $loading = this.$target.querySelector('[data-util="loading"]');
        if($loading) {
            const { isImported } = this.state;
            Loading.standby($loading, isImported);
        }
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}