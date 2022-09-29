import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './entities/post.entity';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { Comment } from 'src/comment/entities/comment.entity';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment]), CommentModule],
  providers: [PostResolver, PostService],
  exports: [PostResolver, PostService],
})
export class PostModule {}
