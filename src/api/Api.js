import { delay, uniqueId } from 'utils';
import mockData from './mock-data';

class Api {
    requests = [];
    subscribers = [];

    getUsers = () => {
        return this._fetch('/users');
    };

    addUser = async name => {
        this.addRequest(`POST /users`);
        await delay(2000);
        this.addRequest(`OK /users`);

        return { name, id: uniqueId() };
    };

    removeUser = async user => {
        this.addRequest(`DELETE /users/${user.id}`);
        await delay(2000);
        this.addRequest(`OK /users/${user.id}`);
    };

    async _fetch(url, options = {}) {
        const { delayMs } = options;
        const resource = url.replace(this.baseUrl, '');
        this.addRequest(`GET ${resource}`);

        return this._mockFetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `Request to ${url} failed with HTTP${response.status}`
                    );
                }

                return response;
            })
            .then(response => response.json())
            .then(async json => {
                await delay(delayMs || 2000);

                this.addRequest(`OK ${resource}`);
                return json;
            });
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        subscriber(this.reqests);
    }

    unSubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(
            _subscriber => _subscriber !== subscriber
        );
    }

    addRequest(request) {
        this.requests.push(request);
        this.notifySubscribers();
    }

    notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber(this.requests));
    }

    clearRequests = () => {
        this.requests = [];
        this.notifySubscribers();
    };

    async _mockFetch(resource) {
        const data = mockData[resource];

        return {
            ok: !!data,
            status: !!data ? 200 : 404,
            json: () => new Promise(r => r(data)),
        };
    }
}

const Instance = new Api();
export default Instance;

// Additional exports for lucy dsl
export const getUsers = Instance.getUsers;
