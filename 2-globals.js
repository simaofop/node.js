// Globals -- NO WINDOWS

// __dirname    - The name of the directory that the currently executing script resides in. This is the same as the path.dirname() of the __filename variable.
// __filename   - The filename of the currently executing script. This is the resolved absolute path of the script file.
// require      - The function to use to import modules, JSON, and local files. The require function is defined per module and not available globally. It is passed as an argument to the module wrapper function.
// module       - The module object representing the current module. module.exports is the object that will be returned as the result of a require call.
// process       - A global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('Hello world');
}, 1000);