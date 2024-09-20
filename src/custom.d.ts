/**
 * Declares a module for handling PDF files.
 * The module exports a default string value representing the PDF content.
 */
declare module '*.pdf' {
    const content: string;
    export default content;
}
