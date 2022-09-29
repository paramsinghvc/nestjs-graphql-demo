import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  create(createCommentInput: CreateCommentInput) {
    const comment = new Comment();
    comment.title = createCommentInput.title;
    return this.commentRepository.save(comment);
  }

  findAll(postId: string) {
    return this.commentRepository.findBy({ post: { id: postId } });
  }

  findOne(id: string) {
    return this.commentRepository.findOneBy({ id });
  }

  async update(id: string, updateCommentInput: UpdateCommentInput) {
    const comment = await this.findOne(id);
    comment.title = updateCommentInput.title;
    return this.commentRepository.save(comment);
  }

  remove(id: string) {
    return this.commentRepository.delete(id);
  }
}
