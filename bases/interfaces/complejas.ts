(() => {
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id: string): string
    };

    interface Address {
        id: number,
        zip: string,
        city: string
    };

    const client: Client = {
        name: "Juan David",
        age: 22,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    };

    const client2: Client = {
        name: "Fernando",
        age: 30,
        address: {
            city: "Toronto",
            id: 120,
            zip: "K2S U23"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    };
})();