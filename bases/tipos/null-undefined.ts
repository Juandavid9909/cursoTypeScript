(() => {
    // strictNullChecks
    // let isActive: (boolean | undefined) = undefined;
    let isActive: (boolean | null) = null;

    console.log(isActive);
})();