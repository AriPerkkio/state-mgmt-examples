import { observable, action } from 'mobx';

export default class UserStore {
    @observable
    users = [];

    @observable
    isLoading = false;

    @observable
    hasLoaded = false;

    @observable
    error = false;

    @action
    setUsers(users) {
        this.users = users;
        this.isLoading = false;
        this.hasLoaded = true;
    }

    @action
    setLoading() {
        this.isLoading = true;
    }

    @action
    setLoadingError() {
        this.error = true;
        this.isLoading = false;
        this.hasLoaded = true;
    }

    @observable
    isAdding = false;

    @observable
    addingError = false;

    @action
    add(user) {
        this.users.push(user);
        this.isAdding = false;
    }

    @action
    setAdding() {
        this.isAdding = true;
    }

    @action
    setAddingError() {
        this.addingError = true;
        this.isAdding = false;
    }

    @observable
    isRemoving = false;

    @observable
    removingError = false;

    @action
    remove(user) {
        this.users = this.users.filter(_user => _user.id !== user.id);
        this.isRemoving = false;
    }

    @action
    setRemoving() {
        this.isRemoving = true;
    }

    @action
    setRemovingError() {
        this.removingError = true;
        this.isRemoving = false;
    }
}
