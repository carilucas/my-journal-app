import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
   return (
      <div className="notes__main-content">
         <NoteAppBar />
         <div className="notes__content">
            <input 
               type="text"
               placeholder="Some awesome title"
               className="notes__title-input"
               autoComplete="off"
            />

            <textarea 
               placeholder="What happend today"
               className="notes__textarea"
            ></textarea>

            <div className="notes__image">
               <img 
                  src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg" 
                  alt="iamgen"

               />
            </div>
         </div>
      </div>
   )
}
