import { createContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'
import { Axios } from '../config/axios'

export const AuthContext = createContext<any | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      localStorage.setItem('session_key', JSON.stringify(session))
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      localStorage.setItem('session_key', JSON.stringify(session))
    })

    setLoading(false)

    return () => subscription.unsubscribe()
  }, [])

  const session = localStorage.getItem('session_key')

  return (
    <AuthContext.Provider value={{ session }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
