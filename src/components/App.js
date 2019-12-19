import React from 'react'
import Entry from './Entry'
import emojipedia from '../emojipedia'

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className='dictionary'>
                {emojipedia.map(el => {
                    return (
                        <Entry
                            key={el.id}
                            emoji={el.emoji}
                            name={el.name}
                            meaning={el.meaning}
                        />
                    )
                })}
            </dl>
        </div>
    )
}

export default App
