import Loading from "../component/utils/Loading";

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
        const { $target } = this;
        const $loading = $target.querySelector('[data-util="loading"]');
        if($loading) {
            const { isImported } = this.state;
            Loading.render($loading, isImported);
        }
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}