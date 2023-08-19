import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { CreateCommentInput } from 'src/comment/dto/create-comment.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(
    @Args('id') postId: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postService.update(postId, updatePostInput);
  }

  @Mutation(() => Boolean)
  async removePost(@Args('id', { type: () => String }) id: string) {
    const result = await this.postService.remove(id);
    return !!result;
  }

  @Mutation(() => Post)
  addComment(
    @Args('id') postId: string,
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {
    return this.postService.addComment(postId, createCommentInput);
  }

  @ResolveField(() => Comment)
  comments(@Parent() post: Post) {
    return this.postService
      .findOne(post.id, {
        relations: ['comments'],
      })
      .then((postResult: Post) => postResult.comments);
  }
}
