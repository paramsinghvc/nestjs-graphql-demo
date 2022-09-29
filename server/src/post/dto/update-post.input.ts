import { IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;
}
