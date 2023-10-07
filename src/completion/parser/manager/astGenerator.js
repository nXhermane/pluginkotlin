// Import the required ANTLR4 module.
import antlr4 from "antlr4";

// Define a class named SyntaxTreeGenerator.
export default class SyntaxTreeGenerator {
    // Initialize class properties.
    inputStream = null;
    lexer = null;
    tokenStream = null;
    parser = null;
    tree = null;
    visitor = null;
    error = null;
    tokens = null;

    // Constructor: Accepts source code as input.
    constructor(sourceCode) {
        // Create an ANTLR4 InputStream from the source code.
        this.inputStream = new antlr4.InputStream(sourceCode);
    }

    // Method to apply a Lexer to the input stream.
    applyLexer(Lexer) {
        this.lexer = new Lexer(this.inputStream);
        return this; // Return the instance for method chaining.
    }

    // Method to apply a Parser to the token stream.
    applyParser(Parser) {
        // Create a CommonTokenStream from the Lexer.
        this.tokenStream = new antlr4.CommonTokenStream(this.lexer);
        // Create a Parser using the token stream.
        this.parser = new Parser(this.tokenStream);
        return this; // Return the instance for method chaining.
    }

    // Method to apply a custom error handler.
    applyCustomError(CustomError) {
        // Remove the default error listeners from the Parser.
        this.parser.removeErrorListeners();
        // Create a custom error handler.
        this.error = new CustomError()
        // Add the custom error handler to the Parser.
        this.parser.addErrorListener(this.error);
        return this; // Return the instance for method chaining.
    }

    // Method to generate the syntax tree.
    generate() {
        // Parse the code and generate the syntax tree.
        this.tree = this.parser.kotlinFile();
        return this; // Return the instance for method chaining.
    }

    // Method to apply a custom visitor to the syntax tree.
    applyVisitor(CustomVisitor) {
        // Create an instance of the custom visitor.
        this.visitor = new CustomVisitor();
        // Traverse the syntax tree using the visitor.
        this.tree.accept(this.visitor);
        return this; // Return the instance for method chaining.
    }

    // Build method (not used in the current implementation).
    build() {
        return this; // Return the instance for method chaining.
    }

    // Method to initialize the error array.
    initError() {
        this.error.errorArray = [];
    }

    // Method to get the error array.
    getErrorArray() {
        return this.error.errorArray;
    }
}