// components/DayComplete.js
// Drop this button into any course page lesson
// Usage: <DayComplete userId={user.uid} week="week1-2" dayNumber={1} totalDays={14} />

import { useProgress } from '../lib/useProgress'

const C = { green:'#3D5A3E', cream:'#FAF6F0', border:'#E0D5C5', muted:'#7A6A5A', white:'#ffffff' }

export default function DayComplete({ userId, week, dayNumber, totalDays }) {
  const { isDone, markDone, markUndone, completed, percentDone, loading } = useProgress(userId, week)
  const done = isDone(dayNumber)

  if (loading) return null

  return (
    <div style={{ margin:'2rem 0', padding:'1.5rem', background:C.cream, border:`1px solid ${C.border}`, borderRadius:12, textAlign:'center' }}>

      {/* Completion button */}
      <button
        onClick={() => done ? markUndone(dayNumber) : markDone(dayNumber)}
        style={{
          padding:'0.9rem 2.5rem',
          background: done ? '#E8F5E9' : C.green,
          color: done ? '#2E7D32' : C.white,
          border: done ? '1.5px solid #A5D6A7' : 'none',
          borderRadius: 8,
          fontFamily: "'Jost', sans-serif",
          fontSize: '1rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '1rem',
        }}
      >
        {done ? '✓ Day Complete' : 'Mark Day Complete'}
      </button>

      {/* Progress for this week */}
      <div style={{ maxWidth:300, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.78rem', color:C.muted, marginBottom:'0.4rem' }}>
          <span>{completed.length} of {totalDays} days done</span>
          <span>{percentDone(totalDays)}%</span>
        </div>
        <div style={{ background:'#E0D5C5', borderRadius:999, height:6, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${percentDone(totalDays)}%`, background:C.green, borderRadius:999, transition:'width 0.4s ease' }} />
        </div>
      </div>

      {/* Celebration message */}
      {done && (
        <p style={{ margin:'0.75rem 0 0', fontSize:'0.85rem', color:'#2E7D32', fontStyle:'italic' }}>
          ✦ Well done. Your practice is deepening.
        </p>
      )}
    </div>
  )
}
