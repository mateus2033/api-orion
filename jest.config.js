"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testEnviroment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
};
