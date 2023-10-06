"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientAccess = {
    limitedClient: {
        origin: ['https://week15-rpb-x.netlify.app', 'https://week15-rpb-x.netlify.app/*', 'https://week15-rpb-y.netlify.app', 'https://week15-rpb-y.netlify.app/*'],
        // origin: ['http://localhost:5173', 'http://localhost:5173/add', 'https://week15-rpb-x.netlify.app/'],
        methods: ['GET', 'POST']
    },
    globalClient: {
        origin: ['https://week15-rpb-y.netlify.app', 'https://week15-rpb-y.netlify.app/*'],
        methods: ['PATCH', 'DELETE']
    }
};
exports.default = clientAccess;
