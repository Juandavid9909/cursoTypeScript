"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
        }
        return `${firstName} ${lastName || "no lastname"}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map