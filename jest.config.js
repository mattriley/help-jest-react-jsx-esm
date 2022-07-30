const config = {
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>./tests/**/*.test.mjs"],
    transform: {
        "^.+\\.*js?$": "babel-jest",
    }
}

module.exports = config
