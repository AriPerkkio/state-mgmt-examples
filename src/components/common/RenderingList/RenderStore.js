class RenderStore {
    subscribers = [];
    renderers = [];

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        subscriber(this.getRenders());
    }

    unSubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(
            _subscriber => _subscriber !== subscriber
        );
    }

    addRender(componentName) {
        this.renderers.push(componentName);
        this.notifySubscribers();
    }

    notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber(this.getRenders()));
    }

    clearRenders = () => {
        this.renderers = [];
        this.notifySubscribers();
    };

    getRenders() {
        return this.renderers.map((componentName, index, renderers) => {
            const count = renderers.filter(
                (r, i) => index >= i && r === componentName
            ).length;

            return `${componentName} (${count})`;
        });
    }
}

export default new RenderStore();
