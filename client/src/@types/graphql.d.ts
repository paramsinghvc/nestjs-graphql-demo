
declare module '*/posts.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getPosts: DocumentNode;
export const createPost: DocumentNode;
export const addComment: DocumentNode;

  export default defaultDocument;
}
    