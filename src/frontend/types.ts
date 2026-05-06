export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  username: string
  avatar_url: string | null
}

export interface TodoItem {
  id: number
  text: string
  done: boolean
}

export interface CalendarEvent {
  id: number
  title: string
  date: string
  time: string | null
}

export interface Note {
  id: number
  title: string
  preview: string
  updated_at: string
}

export interface EmailAlert {
  id: number
  subject: string
  sent_at: string
  recipient: string
}

export interface DashboardData {
  todos: TodoItem[]
  events: CalendarEvent[]
  recent_note: Note | null
  recent_emails: EmailAlert[]
}