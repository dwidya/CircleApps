import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    JoinColumn,
    JoinTable,
} from "typeorm"
import { Thread } from "./thread"
import { Like } from "./like";
import { Reply } from "./reply";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ nullable: true })
    profile_picture: string;

    @Column({ nullable: true })
    profile_description: string;

    @CreateDateColumn({ type: "timestamp with time zone"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

    @OneToMany(() => Thread, (thread) => thread.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    threads: Thread[]

    @OneToMany(() => Like, likes => likes.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn()
    likes: Like[]

    @OneToMany(() => Reply, (replies) => replies.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn()
    replies: Reply[];

    @ManyToMany(() => User, (user) => user.following)
    @JoinTable({
        name: "follow",
        joinColumn: {
            name: "following_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "follower_id",
            referencedColumnName: "id",
        },
    })
    follower: User[];
    @ManyToMany(() => User, (user) => user.follower)
    following: User[]



}