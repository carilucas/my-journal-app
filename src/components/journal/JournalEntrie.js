import React from 'react'

export const JournalEntrie = () => {
   return (
      <div className="journal__entrie">
         <div 
            className="journal__entrie-picture"
            style={{
               backgroundSize:'cover',
               backgroundImage:'url(https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg)'
            }}
         >
         </div>
         <div className="journal__entrie-body">
            <p className="journal__entrie-title">
               Título
            </p>
            <p className="journal__entrie-content">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus .
            </p>
         </div>
         <div className="journal__entrie-date-box">
            <span>Monday</span>
            <h4>28</h4>
         </div>
      </div>
   )
}
