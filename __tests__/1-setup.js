// Example Test
const project = require('../package.json');
describe('1-Setup', () => {

    test('package.json exists', () => {
        expect(project).toBeTruthy();
    });

    test('Name should be correct', () => {
        expect(project.name).toBe("1-tools-assignment");
    });

    test('Test command should be correct', () => {
        expect(project.scripts).toBeDefined();
        expect(project.scripts.test).toBe("jest");
    });

    test('Git Repository is set', () => {
        expect(project.repository).toBeDefined();
        expect(project.repository.url).toMatch(/\.git$/);
        expect(project.repository.type).toBe("git");
    });

    test('Added assignment keyword', () => {
        expect(project.keywords).toBeDefined();
        expect(project.keywords).toContain("assignment");
    });

    test('Author should be First and Last Name', ()=>{
        expect(project.author).toBeDefined();
        expect(project.author).toMatch(/\w+ \w+/);
    });
});