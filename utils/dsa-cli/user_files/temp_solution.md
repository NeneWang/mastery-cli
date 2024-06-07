class Division {
    divide(a, b) {
        if (b === 0) return undefined;
        return a/b;
    }

    //Dont edit this.
    solve = this.divide;
}


module.exports = { Problem: Division };

Idea: Matches the find file path with the extension found
```js


keycode:
    this.temp_solution_filepath = './user_files/temp_solution';

    findFileWithFilepath(filepath, problemSlug){
        let absolute_temp_file_path = "";
        const extensions = ['.py', '.js', '.md', '.java', '.cpp', 'ipynb']; // Add more extensions as needed
    
        let extension_detected = "";
        for (const ext of extensions) {
            const filePath = getDirAbsoluteUri(filepath + problemSlug + ext, "./");
            if (fs.existsSync(filePath)) {
                absolute_temp_file_path = filePath;
                break;
            }
        }

        return (absolute_temp_file_path, extension_detected);
    }

```