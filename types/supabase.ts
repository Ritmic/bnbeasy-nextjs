export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      booking: {
        Row: {
          created_at: string
          date_end: string | null
          date_start: string | null
          email: string | null
          full_name: string | null
          id: number
          mobile_number: string | null
          number_of_persons: number | null
        }
        Insert: {
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          mobile_number?: string | null
          number_of_persons?: number | null
        }
        Update: {
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          mobile_number?: string | null
          number_of_persons?: number | null
        }
        Relationships: []
      }
      booking_to_room: {
        Row: {
          book_id: number | null
          created_at: string
          id: number
          persons: number | null
          room_id: number | null
        }
        Insert: {
          book_id?: number | null
          created_at?: string
          id?: number
          persons?: number | null
          room_id?: number | null
        }
        Update: {
          book_id?: number | null
          created_at?: string
          id?: number
          persons?: number | null
          room_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_to_room_book_id_fkey"
            columns: ["book_id"]
            referencedRelation: "booking"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_to_room_room_id_fkey"
            columns: ["room_id"]
            referencedRelation: "room"
            referencedColumns: ["id"]
          }
        ]
      }
      establishment: {
        Row: {
          created_at: string
          id: number
          name: string | null
          owner: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          owner?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          owner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "establishment_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      room: {
        Row: {
          created_at: string
          establishment: number | null
          id: number
          "label ": string | null
          max_occupants: number | null
          name: string | null
          prices: number[] | null
        }
        Insert: {
          created_at?: string
          establishment?: number | null
          id?: number
          "label "?: string | null
          max_occupants?: number | null
          name?: string | null
          prices?: number[] | null
        }
        Update: {
          created_at?: string
          establishment?: number | null
          id?: number
          "label "?: string | null
          max_occupants?: number | null
          name?: string | null
          prices?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "room_establishment_fkey"
            columns: ["establishment"]
            referencedRelation: "establishment"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
