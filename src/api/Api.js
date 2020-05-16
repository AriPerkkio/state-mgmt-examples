import { delay } from 'utils';
import mockData from './mock-data';

class Api {
    requests = [];

    getUsers = () => {
        return this._fetch('/users');
    };

    addUser = async name => {
        this.requests.push(`POST /users`);
        await delay(2000);
        this.requests.push(`OK /users`);

        return { name, id: Math.floor(Math.random() * 100) };
    };

    removeUser = async user => {
        this.requests.push(`DELETE /users/${user.id}`);
        await delay(2000);
        this.requests.push(`OK /users/${user.id}`);
    };

    async _fetch(url, options = {}) {
        const { delayMs } = options;
        const resource = url.replace(this.baseUrl, '');
        this.requests.push(`GET ${resource}`);

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

                this.requests.push(`OK ${resource}`);
                return json;
            });
    }

    async _mockFetch(resource) {
        const data = mockData[resource];

        return {
            ok: !!data,
            status: !!data ? 200 : 404,
            json: () => new Promise(r => r(data)),
        };
    }
}

export default new Api();
