const fs = require("fs");
const path = require("path");

const directory = "./"; // Change this to the correct path in your project

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath); // Recursively walk through subdirectories
    } else if (file.endsWith(".css")) {
      const newFilePath = fullPath.replace(".css", ".scss");
      fs.renameSync(fullPath, newFilePath);
      const componentPath = newFilePath.replace(".scss", ".ts");
      if (fs.existsSync(componentPath)) {
        let content = fs.readFileSync(componentPath, "utf8");
        content = content.replace(".css", ".scss");
        fs.writeFileSync(componentPath, content, "utf8");
      }
    }
  });
}

walkDir(directory);
