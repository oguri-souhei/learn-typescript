type Extension = "js" | "ts" | "json";

function print(ext: Extension) {
  switch (ext) {
    case "js":
      console.log("JavaScript");
      break;
    case "ts":
      console.log("TypeScript");
    // case "json":
    //   console.log("JSON")
    //   break;
    default:
      const check: never = ext;
      break;
  }
}