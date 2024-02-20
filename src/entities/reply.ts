import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
 } from "typeorm";
 import { Thread } from "./thread";
 import { User } from "./user";

 @Entity({ name: "replies" })
 export class Reply {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({ type: "text", nullable: true })
    image: string;

    @ManyToOne(() => Thread, (thread) => thread.replies, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn({ name: "thread_id" })
    thread: Thread;

    @ManyToOne(() => User, (user) => user.replies, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        
    })
    @JoinColumn({ name: "user_id" })
    user: User;

    @CreateDateColumn({ type: "timestamp with time zone"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

 }