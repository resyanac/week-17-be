"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientAccess = {
    limitedClient: {
        // origin: ['https://week15-rpb-x.netlify.app', 'https://week15-rpb-x.netlify.app/*','https://week15-rpb-y.netlify.app', 'https://week15-rpb-y.netlify.app/*'],
        origin: ['https://resyanac-week-15-client-x.netlify.app/', 'https://resyanac-week-15-client-x.netlify.app/*', 'https://resyanac-week-15-client-y.netlify.app', 'https://resyanac-week-15-client-y.netlify.app/*'],
        methods: ['GET', 'POST']
    },
    globalClient: {
        origin: ['https://resyanac-week-15-client-x.netlify.app/', 'https://resyanac-week-15-client-x.netlify.app/*'],
        methods: ['PATCH', 'DELETE']
    }
};
exports.default = clientAccess;
