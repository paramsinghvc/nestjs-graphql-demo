import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  id: Scalars['String'];
  post: Post;
  title: Scalars['String'];
};

export type CreateCommentInput = {
  title: Scalars['String'];
};

export type CreatePostInput = {
  title: Scalars['String'];
};

export type Mutation = {
  addComment: Post;
  createComment: Comment;
  createPost: Post;
  removeComment: Comment;
  removePost: Post;
  updateComment: Comment;
  updatePost: Post;
};


export type MutationAddCommentArgs = {
  createCommentInput: CreateCommentInput;
  id: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['String'];
  updateCommentInput: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['String'];
  updatePostInput: UpdatePostInput;
};

export type Post = {
  comments?: Maybe<Array<Comment>>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  comment: Comment;
  comments: Array<Comment>;
  post: Post;
  posts: Array<Post>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCommentsArgs = {
  postId: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type UpdateCommentInput = {
  title: Scalars['String'];
};

export type UpdatePostInput = {
  title: Scalars['String'];
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { posts: Array<{ id: string, title: string, comments?: Array<{ id: string, title: string }> | null }> };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { createPost: { id: string, title: string } };

export type AddCommentMutationVariables = Exact<{
  id: Scalars['String'];
  createCommentInput: CreateCommentInput;
}>;


export type AddCommentMutation = { addComment: { id: string, title: string, comments?: Array<{ id: string, title: string }> | null } };


export const GetPostsDocument = gql`
    query getPosts {
  posts {
    id
    title
    comments {
      id
      title
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    title
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      createPostInput: // value for 'createPostInput'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($id: String!, $createCommentInput: CreateCommentInput!) {
  addComment(id: $id, createCommentInput: $createCommentInput) {
    id
    title
    comments {
      id
      title
    }
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      createCommentInput: // value for 'createCommentInput'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;