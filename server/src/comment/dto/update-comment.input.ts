import { IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;
}
