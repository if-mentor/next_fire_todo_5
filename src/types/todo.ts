import { Timestamp } from "firebase/firestore"

export type Todo = {
    id: string
    title: string
    detail: string
    status: 'NOT STARTED' | 'DOING' | 'DONE'
    priority: 'Low' | 'Middle' | 'High'
    create: Timestamp
    update: Timestamp
    isDraft: boolean
    isTrash: boolean
    author: string
    editor: string
}