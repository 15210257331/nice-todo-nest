import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NoteAddDTO {
    @IsNotEmpty({ message: 'title不能为空' })
    readonly title: string;
    @IsNotEmpty({ message: 'content不能为空' })
    readonly content: string;
}

