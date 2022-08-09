import { ApiProperty } from "@nestjs/swagger";

export class createProductsDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly description: string;
}
