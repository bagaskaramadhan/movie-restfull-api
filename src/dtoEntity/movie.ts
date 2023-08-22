import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "movie_tb" })

export class Movie extends BaseEntity {
    @PrimaryColumn({ name: "id" })
    id?: string;

    @Column({ name: "title" })
    title?: string;

    @Column({ name: "description" })
    description?: string;

    @Column({ name: "rating" })
    rating?: number;

    @Column({ name: "image" })
    image?: string;

    @Column({ name: "created_at" })
    createdAt?: string;

    @Column({ name: "updated_at" })
    updatedAt?: string;

}
