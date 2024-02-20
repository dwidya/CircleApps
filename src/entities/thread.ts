import {
        Entity, 
        PrimaryGeneratedColumn, 
        Column,
        CreateDateColumn,
        UpdateDateColumn, 
        ManyToOne,
        OneToMany,
        JoinColumn
    } from "typeorm"
import { User } from "./user"
import { Like } from "./like"
import { Reply } from "./reply"

@Entity({ name: "threads" })
export class Thread {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    content: string

    @Column({ nullable: true })
    image: string

    @CreateDateColumn({ type: "timestamp with time zone"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.threads, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })

    @JoinColumn({ name: "created_by" })
    user:User;

    @OneToMany(() => Like, (likes) => likes.thread , {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    likes: Like[];

    @OneToMany(() => Reply, (replies) => replies.thread, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    replies: Reply[];

}
