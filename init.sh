#!/bin/bash

if [ ! -e package.json ]; then 
    echo "aucun package.json"
    npm init --yes
    exit
fi

install_webpack_deps() {
    npm i -D webpack webpack-cli webpack-dev-server
    npm i -D coffeescript coffee-loader
    npm i -D typescript ts-loader
    npm i -D sass sass-loader style-loader css-loader
    npm i -D html-webpack-plugin
    npm i -D copy-webpack-plugin
}

install_test_deps() {
    npm i -D jest @babel/core @babel/preset-env @babel/preset-typescript
    npm i -D @testing-library/dom @testing-library/user-event @testing-library/jest-dom
    npm i -D jest-environment-jsdom

}

install_lint_deps() {
    npm i -D eslint @babel/eslint-parser
    npm i -D eslint-plugin-github eslint-plugin-jest
}

install_format_deps() {
    npm i -D prettier
}

install_webpack_deps
install_test_deps
install_lint_deps
install_format_deps