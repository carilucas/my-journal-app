import React from 'react'
import { JournalEntrie } from './JournalEntrie'

export const JournalEntries = () => {

   const entries = [1,2,3,4,5,6,7,8,9,10]
   return (
      <div className="journal-entries">
         {
            entries.map( entrie => (
               <JournalEntrie key={entrie} />
            ))
         }
      </div>
   )
}
