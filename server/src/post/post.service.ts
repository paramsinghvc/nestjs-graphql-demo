import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateCommentInput } from 'src/comment/dto/create-comment.input';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @Inject(CommentService)
    private commentService: CommentService,
  ) {}

  create(createPostInput: CreatePostInput) {
    const post = new Post();
    post.title = createPostInput.title;
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: string, options?: FindOneOptions<Post>) {
    return this.postRepository.findOne({ where: { id }, ...options });
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
    const post = await this.findOne(id);
    post.title = updatePostInput.title;
    return this.postRepository.save(post);
  }

  remove(id: string) {
    return this.postRepository.delete(id);
  }

  async addComment(postId: string, createCommentInput: CreateCommentInput) {
    const post = await this.findOne(postId, { relations: ['comments'] });
    const comment = await this.commentService.create(createCommentInput);
    if (!post.comments) {
      post.comments = [comment];
    } else {
      post.comments.push(comment);
    }
    return this.postRepository.save(post);
  }
}
