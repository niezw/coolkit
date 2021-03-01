"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mdns = require('multicast-dns')();
// @ts-ignore
const multicast_dns_1 = __importDefault(require("multicast-dns"));
const mdns = new multicast_dns_1.default();
mdns.on('response', function (response) {
    console.log('got a response packet:', JSON.stringify(response));
});
mdns.on('query', function (query) {
    console.log('got a query packet:', query.questions[0]);
});
// lets query for an A record for 'brunhilde.local'
mdns.query({
    questions: [
        {
            name: '_ewelink._tcp.local',
            type: 'PTR',
        },
    ],
});
