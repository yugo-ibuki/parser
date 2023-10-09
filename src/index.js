// import * as ts from "typescript";
//
// function inspectNode(node: ts.Node) {
//   console.log(`Node kind: ${ts.SyntaxKind[node.kind]}, Start: ${node.getStart()}, End: ${node.getEnd()}`);
//
//   ts.forEachChild(node, inspectNode);
// }
//
// function generateAST(sourceCode: string) {
//   const sourceFile = ts.createSourceFile("sample.ts", sourceCode, ts.ScriptTarget.Latest, true);
//   inspectNode(sourceFile);
// }
//
// const code = `
// function hello(name: string) {
//     console.log("Hello, " + name);
// }
// `;
//
// generateAST(code);
console.log('hello world');
