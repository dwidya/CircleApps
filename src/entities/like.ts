import { 
    Entity, 
    PrimaryGeneratedColumn,  
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
} from "typeorm";
import { User } from "./user";
import { Thread } from "./thread";

@Entity({ name: "likes" })
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.likes, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn({name: "user_id"})
    user: User;

    @ManyToOne(() => Thread, (thread) => thread.likes, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn({name: "thread_id"})
    thread: Thread;

    @CreateDateColumn({ type: "timestamp with time zone" })
	created_at: Date;

	@UpdateDateColumn({ type: "timestamp with time zone" })
	updated_at: Date;

    
}