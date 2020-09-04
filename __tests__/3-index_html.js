const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('3-Create-HTML', () => {
    it('Create an HTML5 document', () => {
        return JSDOM.fromFile('index.html').then(dom => {
            expect(dom.window.document.doctype.name).toBe('html');
        });
    });

    it('Set the title correctly', () => {
        return JSDOM.fromFile('index.html').then(dom => {
            expect(dom.window.document.title).toBe('1-tools-assignment');
        });
    });

    it('Add body text', () => {
        return JSDOM.fromFile('index.html').then(dom => {
            expect(dom.window.document.querySelector('body').textContent).toMatch(/[hH]ello [wW]orld/);
        });
    });
});