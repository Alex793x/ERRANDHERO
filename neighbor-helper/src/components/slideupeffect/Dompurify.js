import DOMPurify from "isomorphic-dompurify";

export const validator = (dirty) => {
    return DOMPurify.sanitize(dirty);
}
