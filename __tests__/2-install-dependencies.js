const project = require('../package.json');
describe('2-Install-Dependencies', () => {

    test('devDependencies Exists', () => {
        expect(project.devDependencies).toBeDefined();
    });

    test('Start script setup', () => {
        expect(project.scripts).toBeDefined();
        expect(project.scripts.start).toBe("webpack-dev-server");
    });

    [
        "webpack",
        "webpack-cli",
        "webpack-dev-server",
        "css-loader",
        "sass-loader",
        "sass",
        "extract-loader",
        "file-loader",
        "jest"
    ].forEach(dependency => {
        test(`${dependency} Installed in devDependencies`, () => {
            expect(project.devDependencies).toBeDefined();
            expect(project.devDependencies[dependency]).toBeDefined();
        });
    })

});