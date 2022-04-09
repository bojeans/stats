"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const date = (dateString) => {
    const extractDate = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(extractDate[2], extractDate[1] - 1, extractDate[0]);
};
exports.date = date;
