// Payment Info
export interface LeaderBoardData {
  id: number;
  likes_received: number;
  likes_given: number;
  topic_count: number;
  post_count: number;
  topics_entered: number;
  posts_read: number;
  days_visited: number;
  solutions: number;
  time_read: number;
  user: User;
}

export interface User {
  id: number;
  username: string;
  name: string;
  avatar_template: string;
  title: string | null;
  admin?: boolean;
  moderator: boolean;
  trust_level: number;
}
