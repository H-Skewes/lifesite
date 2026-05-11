import { useState } from 'react'
import { loginUser } from '../api'
import './Home.css'

export default function Home() {


  return (
    <div className="page-root">
      <div className="header">LifeSite</div>
      <div className="subheader">
        <a href="/budget">Budget</a>
        <a href="/calendar">Calendar</a>
        <a href="/todo">Todo</a>
        <a href="/notes">Notes</a>
        <a href="/fashion">Fashion</a>
      </div>
      <div className="page-content">
        <div className="home-grid">
          <div className="window window-calendar">
            <div className="titlebar">Calendar</div>
            <div className="window-body">...</div>
          </div>
          <div className="window window-todos">
            <div className="titlebar">Today's Todos</div>
            <div className="window-body">...</div>
          </div>
          <div className="window window-weather">
            <div className="titlebar">Today's Weather</div>
            <div className="window-weather">...</div>
          </div>
          <div className="window window-notifications">
            <div className="titlebar">Recent Notifications</div>
            <div className="window-body">...</div>
          </div>
        </div>
      </div>
    </div>
  )
}